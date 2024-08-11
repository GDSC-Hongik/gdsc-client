import discordApi from '@/apis/discord/discordApi';
import QueryKeys from '@/constants/queryKey';
import { useQuery } from '@tanstack/react-query';

const FETCH_INTERVAL = 5000;
export default function useGetDiscordJoined(
  username: string,
  isEnabled: boolean
) {
  const query = useQuery({
    queryKey: [QueryKeys.DiscordJoined],
    queryFn: () => discordApi.GET_DISCORD_JOIN(username),
    refetchOnWindowFocus: true,
    refetchInterval: FETCH_INTERVAL,
    enabled: isEnabled
  });

  return query;
}
