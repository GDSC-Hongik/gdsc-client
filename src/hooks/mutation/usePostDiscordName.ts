import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';

export function usePostDiscordName() {
  const { mutate: checkDuplicate, ...rest } = useMutation({
    mutationFn: (userName: string) => discordApi.GET_DISCORD_NAME(userName)
  });
  return { checkDuplicate, ...rest };
}
