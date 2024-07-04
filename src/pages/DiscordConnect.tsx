import { useFunnel } from '@/hooks/common/useFunnel';
import DiscordConnection from '@/components/joinDiscord/DiscordConnection';

const steps = ['이름 설정', '별명 설정', '서버 합류', '서버 연동', '연동 완료'];

export const DicordConnect = () => {
  const { Funnel, Step, setStep } = useFunnel(steps[0]);
  //   const { register, watch, formState, getValues } = useForm({
  //     defaultValues: {
  //       discordHandle: '',
  //       discordNickname: '',
  //       code: ''
  //     },
  //     mode: 'onChange'
  //   });

  //   const postDiscordLinkMutation = useMutation({
  //     mutationFn: discordApi.POST_DISCORD,
  //     onSuccess: () => {
  //       toast('디스코드 연동이 완료되었습니다.');
  //       navigate(RoutePath.MyPage);
  //     }
  //   });

  //   const handleLinkButtonClick = () => {
  //     const data = {
  //       discordUsername: getValues('discordHandle'),
  //       nickname: getValues('discordNickname'),
  //       code: Number(getValues('code'))
  //     } as DiscordLinkRequest;

  //     postDiscordLinkMutation.mutate({ ...data });
  //   };

  const nextClickHandler = (step: string) => {
    setStep(step);
  };
  return (
    <>
      <DiscordConnection
        steps={steps}
        nextClickHandler={nextClickHandler}
        Funnel={Funnel}
        Step={Step}
      />
    </>
  );
};
