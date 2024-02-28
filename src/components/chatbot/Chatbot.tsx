import { useEffect } from 'react';

import { CHANNELIO_PLUGIN_KEY } from '@constants/environment';

import ChannelService from '@/components/chatbot/ChannelService';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import { getCookie } from '@/utils/auth';

export default function Chatbot() {
  const { data: user, refetch } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_MEMBERS_ME,
    enabled: false
  });

  const checkAuth = () => {
    if (getCookie('accessToken') && getCookie('refreshToken')) {
      refetch();
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (checkAuth() && user) {
      const { memberId, name, phone: mobileNumber, univEmail: email } = user;
      const channelTalk = new ChannelService();
      channelTalk.boot(
        {
          pluginKey: CHANNELIO_PLUGIN_KEY,
          memberId,
          profile: {
            name,
            email,
            mobileNumber
          }
        },
        () => {}
      );
      return () => channelTalk.shutdown();
    } else {
      const channelTalk = new ChannelService();
      channelTalk.boot({ pluginKey: CHANNELIO_PLUGIN_KEY }, () => {});
      return () => channelTalk.shutdown();
    }
  }, []);

  return <script src="https://unpkg.com/lodash" async={true} />;
}
