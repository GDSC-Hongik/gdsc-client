import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

import ordersApi from '@/apis/orders/ordersApi';
import RoutePath from '@/routes/routePath';
import { toast } from 'react-toastify';

const usePostPrevOrder = (amount: number) => {
  const navigate = useNavigate();

  const { mutate: postPrevOrder, ...rest } = useMutation({
    onMutate: () => {
      if (!amount) toast('결제를 실패했어요. 문제가 지속되면 문의해주세요.');
    },
    mutationFn: ordersApi.POST_PREV_ORDER,
    onError: () => navigate(RoutePath.PaymentsCheckout)
  });

  return { postPrevOrder, ...rest };
};

export default usePostPrevOrder;
