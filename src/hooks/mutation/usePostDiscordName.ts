import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';

export function usePostDiscordName(userName: string) {
  const { mutate: checkDuplicate, ...rest } = useMutation({
    mutationFn: () => discordApi.GET_DISCORD_NAME(userName)
  });
  return { checkDuplicate, ...rest };
}
