import { create } from 'zustand';
import { persist, createJSONStorage, StateStorage } from 'zustand/middleware';
import secureLocalStorage from 'react-secure-storage';

const SecureStorage: StateStorage = {
  getItem: async (name: string): Promise<string | null> => {
    return (await secureLocalStorage.getItem(name)) || null;
  },
  setItem: async (name: string, value: string): Promise<void> => {
    await secureLocalStorage.setItem(name, value);
  },
  removeItem: async (name: string): Promise<void> => {
    await secureLocalStorage.removeItem(name);
  }
};

type ProductStore = {
  name: string;
  amount: number;
  totalAmount: number;
  discount: number;
  setDiscount: (status: number) => void;
};

const useProductStore = create(
  persist<ProductStore>(
    (set) => ({
      name: '2024년 1학기 정회원 회비',
      amount: 20000,
      totalAmount: 20000,
      discount: 0,
      setDiscount: (newDiscount) => set({ discount: newDiscount })
    }),
    {
      name: 'productStorage',
      storage: createJSONStorage(() => SecureStorage)
    }
  )
);

export default function useProduct() {
  const { discount, setDiscount } = useProductStore((state) => ({
    discount: state.discount,
    setDiscount: state.setDiscount
  }));

  const totalAmount = useProductStore.getState().amount - discount;

  return {
    name: useProductStore.getState().name,
    amount: useProductStore.getState().amount,
    totalAmount,
    discount,
    strAmount: useProductStore.getState().amount.toLocaleString(),
    strDiscount: discount.toLocaleString(),
    strTotalAmount: totalAmount.toLocaleString(),
    setDiscount
  };
}
