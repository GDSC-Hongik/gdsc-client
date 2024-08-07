import createBasicInfoApi from '@/apis/member/createBasicInfoApi';
import RoutePath from '@/routes/routePath';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';

export default function useCreateUserBasicInfo() {
  const navigation = useNavigate();

  const { mutate: createBasicInfo, ...rest } = useMutation({
    mutationFn: createBasicInfoApi.BASIC_INFO,
    onSuccess: () => {
      navigation(RoutePath.Dashboard, { replace: true });
    }
  });

  return { createBasicInfo, ...rest };
}
