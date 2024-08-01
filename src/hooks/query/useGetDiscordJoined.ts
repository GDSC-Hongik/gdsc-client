import discordApi from '@/apis/discord/discordApi';
import QueryKeys from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

export default function useGetDiscordJoined(username: string) {
  const query = useQuery({
    queryKey: [QueryKeys.DiscordJoined],
    queryFn: () => discordApi.GET_DISCORD_JOIN(username),
    refetchOnWindowFocus: true
  });

  return query;
}
