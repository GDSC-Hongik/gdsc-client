import { useEffect } from 'react';

import { CHANNELIO_PLUGIN_KEY } from '@constants/environment';

import ChannelService from '@/components/chatbot/ChannelService';
import { useQuery } from '@tanstack/react-query';
import memberApi from '@/apis/member/memberApi';
import { MemberInfoResponse } from '@/apis/member/memberType';

export default function Chatbot() {
  const { data: user } = useQuery({
    queryKey: ['member'],
    queryFn: memberApi.GET_MEMBERS_ME,
    // 로그인 하지 않았을 경우 임의로 memberId -1 지정
    initialData: {
      memberId: -1
    } as MemberInfoResponse
  });

  useEffect(() => {
    const { memberId, name, phone: mobileNumber, univEmail: email } = user;

    const setting =
      memberId === -1
        ? { pluginKey: CHANNELIO_PLUGIN_KEY }
        : {
            pluginKey: CHANNELIO_PLUGIN_KEY,
            memberId,
            profile: {
              name,
              email,
              mobileNumber
            }
          };

    const channelTalk = new ChannelService();

    channelTalk.boot(setting, () => {});

    return () => channelTalk.shutdown();
  }, []);

  return <script src="https://unpkg.com/lodash" async={true} />;
}
