import apiClient from '@/apis';
import { DiscordLinkRequest } from '@/apis/discord/discordType';

const discordApi = {
  POST_DISCORD: async (payload: DiscordLinkRequest) => {
    const response = await apiClient.post(
      '/onboarding/me/link-discord',
      payload
    );
    return response.data;
  },
  GET_DISCORD_NAME: async (name: string) => {
    const response = await apiClient.get('/onboarding/check-discord-username', {
      params: {
        username: name
      }
    });
    return response.data;
  },
  GET_DISCORD_NICKNAME: async (name: string) => {
    const response = await apiClient.get('/onboarding/check-discord-nickname', {
      params: {
        nickname: name
      }
    });
    return response.data;
  },
  GET_DISCORD_JOIN: async (name: string): Promise<{ isJoined: boolean }> => {
    const response = await apiClient.get('/onboarding/check-discord-join', {
      params: {
        username: name
      }
    });
    return response.data;
  }
};

export default discordApi;
