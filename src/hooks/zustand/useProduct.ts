import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import secureLocalStorage from 'react-secure-storage';

const SecureStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return secureLocalStorage.getItem(name) as string | null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    return secureLocalStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    return secureLocalStorage.removeItem(name);
  }
};

type ProductStore = {
  name: string;
  amount: number;
  totalAmount: number;
  discount: number;
  issuedCouponId: number | null;
  setDiscount: (discount: number, couponId: number) => void;
};

export const useProductStore = create(
  persist<ProductStore>(
    (set) => ({
      name: '2024년 1학기 정회원 회비',
      amount: 20000,
      totalAmount: 20000,
      discount: 0,
      issuedCouponId: null,
      setDiscount: (newDiscount, couponId) =>
        set({ discount: newDiscount, issuedCouponId: couponId })
    }),
    {
      name: 'productStorage',
      storage: createJSONStorage(() => SecureStorage)
    }
  )
);

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
