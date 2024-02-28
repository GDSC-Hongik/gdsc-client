import { useEffect } from 'react';

import { CHANNELIO_PLUGIN_KEY } from '@constants/environment';

import ChannelService from '@/components/chatbot/ChannelService';

export default function Chatbot() {
  useEffect(() => {
    const channelTalk = new ChannelService();

    channelTalk.boot({ pluginKey: CHANNELIO_PLUGIN_KEY }, () => {});

    return () => channelTalk.shutdown();
  }, []);

  return <script src="https://unpkg.com/lodash" async={true} />;
}
