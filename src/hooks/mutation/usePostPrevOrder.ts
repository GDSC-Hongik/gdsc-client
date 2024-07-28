import { useMutation } from '@tanstack/react-query';
import ordersApi from '@/apis/orders/ordersApi';

const usePostPrevOrder = (amount: number) => {
  const { mutate: postPrevOrder, ...rest } = useMutation({
    mutationFn: amount
      ? ordersApi.POST_PREV_ORDER
      : ordersApi.POST_PREV_FREE_ORDER
  });

  return { postPrevOrder, ...rest };
};

export default usePostPrevOrder;
