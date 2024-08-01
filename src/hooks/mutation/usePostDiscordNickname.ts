import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';

export function usePostDiscordNickname(nickname: string) {
  const { mutate: checkDuplicate, ...rest } = useMutation({
    mutationFn: () => discordApi.GET_DISCORD_NICKNAME(nickname)
  });
  return { checkDuplicate, ...rest };
}
