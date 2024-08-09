import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';

export function usePostDiscordNickname() {
  const { mutate: checkDuplicate, ...rest } = useMutation({
    mutationFn: (nickname: string) => discordApi.GET_DISCORD_NICKNAME(nickname)
  });
  return { checkDuplicate, ...rest };
}
