import discordApi from '@/apis/discord/discordApi';
import { useMutation } from '@tanstack/react-query';

export function usePostDiscordLink() {
  const { mutate: postDiscordLink, ...rest } = useMutation({
    mutationFn: discordApi.POST_DISCORD
  });
  return { postDiscordLink, ...rest };
}
