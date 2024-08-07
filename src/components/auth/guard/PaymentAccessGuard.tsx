import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import { useState, useEffect } from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import RoutePath from '@/routes/routePath';
import { toast } from 'react-toastify';
import LoadingSpinner from '@/components/common/LoadingSpinner';

const PaymentAccessGuard = () => {
  const [redirect, setRedirect] = useState(false);
  const navigate = useNavigate();
  const { data, isLoading } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  useEffect(() => {
    if (!data) return;

    if (data.member.role !== 'ASSOCIATE') {
      toast.error('준회원 조건을 충족해주세요.');
      setRedirect(true);
    }

    if (!data.currentMembership) {
      toast.error('정회원 지원 이후 학회비를 결제할 수 있어요.');
      setRedirect(true);
    }

    if (!data.currentRecruitmentRound) {
      toast.error('지금은 정회원 모집 기간이 아니에요.');
      setRedirect(true);
    }
  }, []);

  useEffect(() => {
    if (redirect) {
      navigate(RoutePath.Dashboard);
    }
  }, [redirect, navigate]);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  if (!data) return;

  if (
    data.member.role !== 'ASSOCIATE' ||
    !data.currentRecruitmentRound ||
    !data.currentMembership
  ) {
    navigate(RoutePath.Dashboard);
    return null;
  } else return <Outlet />;
};

export default PaymentAccessGuard;
