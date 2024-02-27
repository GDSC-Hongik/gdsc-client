/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    ChannelIO: (arg0: string, arg1?: unknown, arg2?: unknown) => void;
    ChannelIOInitialized: boolean;
  }
}

class ChannelService {
  constructor() {
    this.loadScript();
  }

  loadScript() {
    const w = window;
    if (w.ChannelIOInitialized) {
      return;
    }
    const channelIO = function () {
      // eslint-disable-next-line prefer-rest-params
      channelIO.c(arguments);
    };

    channelIO.q = [] as any[];
    channelIO.c = function (args: any) {
      channelIO.q.push(args);
    };
    w.ChannelIO = channelIO;
    function initializeChannelIO() {
      if (w.ChannelIOInitialized) {
        return;
      }
      w.ChannelIOInitialized = true;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.async = true;
      script.src = "https://cdn.channel.io/plugin/ch-plugin-web.js";
      const firstScript = document.getElementsByTagName("script")[0];
      if (firstScript?.parentNode) {
        firstScript.parentNode.insertBefore(script, firstScript);
      }
    }
    if (document.readyState === "complete") {
      initializeChannelIO();
    } else {
      w.addEventListener("DOMContentLoaded", initializeChannelIO);
      w.addEventListener("load", initializeChannelIO);
    }
  }
  boot(settings: any, callback: any) {
    window.ChannelIO("boot", settings, callback);
  }
  onBadgeChanged(callback: (number: number) => void) {
    window.ChannelIO("onBadgeChanged", callback);
  }
  addTags(tags: string[]) {
    window.ChannelIO("addTags", tags);
  }
  shutdown() {
    window.ChannelIO("shutdown");
  }
}

export default ChannelService;
