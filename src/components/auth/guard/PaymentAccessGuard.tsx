import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import { useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';

const PaymentAccessGuard = () => {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  if (!data) {
    return <div>로딩중..</div>;
  }
  if (data.member.role !== 'ASSOCIATE') {
    navigate(RoutePath.Dashboard);
  }
};

export default PaymentAccessGuard;
