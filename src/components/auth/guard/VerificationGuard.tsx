import RoutePath from '@/routes/routePath';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { PropsWithChildren, useEffect } from 'react';
import memberApi from '@/apis/member/memberApi';
import { useQuery } from '@tanstack/react-query';

type GuardType = 'StudentVerification' | 'Discord' | 'SignUp' | 'Bevy';

interface VerificationGuardProps extends PropsWithChildren {
  guardType: GuardType;
}
/** 기본 정보, 디스코드 정보, 이메일 정보가 인증되어 있는지에 대한 가드 */

export default function VerificationGuard({
  guardType,
  children
}: VerificationGuardProps) {
  const navigate = useNavigate();
  const { data } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_DASHBOARD
  });

  useEffect(() => {
    if (!data) return;

    if (
      guardType === 'SignUp' &&
      data.member.associateRequirement.infoStatus === 'SATISFIED'
    ) {
      toast.error('기본 정보를 이미 입력했습니다.');
      navigate(RoutePath.Dashboard);
      return;
    }
    if (
      guardType === 'Discord' &&
      data.member.associateRequirement.discordStatus === 'SATISFIED'
    ) {
      toast.error('디스코드 연동을 이미 완료했습니다.');
      navigate(RoutePath.Dashboard);
      return;
    }
    if (
      guardType === 'StudentVerification' &&
      data.member.associateRequirement.univStatus === 'SATISFIED'
    ) {
      toast.error('재학생 인증을 이미 완료했습니다.');
      navigate(RoutePath.Dashboard);
      return;
    }
    if (
      guardType === 'Bevy' &&
      data.member.associateRequirement.bevyStatus === 'SATISFIED'
    ) {
      toast.error('bevy 가입을 이미 완료했습니다.');
      navigate(RoutePath.Dashboard);
      return;
    }
  }, [data, guardType, navigate]);

  return children;
}
