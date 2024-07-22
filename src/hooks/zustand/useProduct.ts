import { create } from 'zustand';

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
    set({ discount: newDiscount, issuedCouponId: couponId })
}));

export const useProduct = () => {
  const { discount, issuedCouponId, setDiscount } = useProductStore(
    (state) => ({
      discount: state.discount,
      issuedCouponId: state.issuedCouponId,
      setDiscount: state.setDiscount
    })
  );

  const totalAmount = useProductStore.getState().amount - discount;

  return {
    name: useProductStore.getState().name,
    amount: useProductStore.getState().amount,
    totalAmount,
    discount,
    issuedCouponId,
    strAmount: useProductStore.getState().amount.toLocaleString(),
    strDiscount: discount.toLocaleString(),
    strTotalAmount: totalAmount.toLocaleString(),
    setDiscount
  };
};
