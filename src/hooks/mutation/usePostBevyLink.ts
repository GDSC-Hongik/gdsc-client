import { useMutation } from '@tanstack/react-query';
import bevyApi from '@/apis/bevy/bevyApi';
import { toast } from 'react-toastify';
import RoutePath from '@/routes/routePath';
import { useNavigate } from 'react-router-dom';

const usePostBevyLink = () => {
  const navigate = useNavigate();
  const {
    mutate: postBevyLink,
    error,
    ...rest
  } = useMutation({
    mutationFn: bevyApi.POST_LINK_BEVY,
    onSuccess: () => {
      toast('bevy 연동이 완료되었습니다.');
      navigate(RoutePath.Dashboard);
    },
    onError: () => {
      toast(error?.message);
    }
  });

  return { postBevyLink, ...rest };
};

export default usePostBevyLink;
