import { create } from 'zustand';
import { useShallow } from 'zustand/react/shallow';

type ProductStore = {
  name: string;
  amount: number;
  totalAmount: number;
  discount: number;
  issuedCouponId: number | null;
  setDiscount: (discount: number, couponId: number) => void;
};

export const useProductStore = create<ProductStore>((set) => ({
  name: '2024년 1학기 정회원 회비',
  amount: 20000,
  totalAmount: 20000,
  discount: 0,
  issuedCouponId: null,
  setDiscount: (newDiscount, couponId) =>
    set((state) => ({
      discount: newDiscount,
      totalAmount: state.amount - newDiscount,
      issuedCouponId: couponId
    }))
}));

export const useProductBase = () => {
  const { name, amount } = useProductStore(
    useShallow((state) => ({
      name: state.name,
      amount: state.amount
    }))
  );

  return {
    name,
    amount,
    strAmount: amount.toLocaleString()
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
