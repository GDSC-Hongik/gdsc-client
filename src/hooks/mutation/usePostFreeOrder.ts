import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import ordersApi from '@/apis/orders/ordersApi';
import RoutePath from '@/routes/routePath';
import { toast } from 'react-toastify';

const usePostFreeOrder = (amount: number) => {
  const navigate = useNavigate();

  const { mutate: postFreeOrder, ...rest } = useMutation({
    onMutate: () => {
      if (amount) toast('결제 실패');
    },
    mutationFn: ordersApi.POST_PREV_FREE_ORDER,
    onError: () => navigate(RoutePath.PaymentsCheckout),
    onSuccess: () => navigate(RoutePath.Dashboard)
  });

  return { postFreeOrder, ...rest };
};

export default usePostFreeOrder;
