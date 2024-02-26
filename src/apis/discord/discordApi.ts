import apiClient from '@/apis';
import { DiscordLinkRequest } from '@/apis/discord/discordType';

const discordApi = {
  POST_DISCORD: async (payload: DiscordLinkRequest) => {
    const response = await apiClient.post(
      '/onboarding/me/link-discord',
      payload
    );
    return response.data;
  }
};

export default discordApi;
