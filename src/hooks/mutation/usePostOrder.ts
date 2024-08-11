import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import ordersApi from '@/apis/orders/ordersApi';
import RoutePath from '@/routes/routePath';

const usePostOrder = () => {
  const navigate = useNavigate();
  const { mutate: postOrder, ...rest } = useMutation({
    mutationFn: ordersApi.POST_ORDER,
    onError: () => navigate(RoutePath.PaymentsFail)
  });

  return { postOrder, ...rest };
};

export default usePostOrder;
