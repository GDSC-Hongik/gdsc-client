import { useMutation } from '@tanstack/react-query';
import ordersApi from '@/apis/orders/ordersApi';

const usePostOrder = () => {
  const { mutate: postOrder, ...rest } = useMutation({
    mutationFn: ordersApi.POST_ORDER
  });

  return { postOrder, ...rest };
};

export default usePostOrder;
