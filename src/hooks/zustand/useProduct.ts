import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

type ProductStore = {
  name: string | null;
  amount: number;
  totalAmount: number;
  discount: number;
  issuedCouponId: number | null;
  setName: (name: string) => void;
  setAmount: (amount: number) => void;
  setDiscount: (discount: number, couponId: number) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  name: null,
  amount: 20000,
  totalAmount: 20000,
  discount: 0,
  issuedCouponId: null,
  setName: (name) => set({ name }),
  setAmount: (amount) => set({ amount }),
  setDiscount: (newDiscount, couponId) =>
    set((state) => ({
      discount: newDiscount,
      totalAmount:
        state.amount - newDiscount < 0 ? 0 : state.amount - newDiscount,
      issuedCouponId: couponId
    }))
}));

export const useProductBase = () => {
  const { name, amount, setName, setAmount } = useProductStore(
    useShallow((state) => ({
      name: state.name,
      amount: state.amount,
      setName: state.setName,
      setAmount: state.setAmount
    }))
  );

  return {
    name,
    amount,
    strAmount: amount.toLocaleString(),
    setName,
    setAmount
  };
};

export const useProduct = () => {
  const { name, amount, discount, totalAmount, issuedCouponId, setDiscount } =
    useProductStore(
      useShallow((state) => ({
        name: state.name,
        amount: state.amount,
        discount: state.discount,
        totalAmount: state.totalAmount,
        issuedCouponId: state.issuedCouponId,
        setDiscount: state.setDiscount
      }))
    );

  return {
    name,
    amount,
    totalAmount,
    discount,
    issuedCouponId,
    strAmount: amount.toLocaleString(),
    strDiscount: discount.toLocaleString(),
    strTotalAmount: totalAmount.toLocaleString(),
    setDiscount
  };
};
