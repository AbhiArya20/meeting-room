import {
  Worker,
  WebRtcServer,
  WebRtcServerOptions,
} from "mediasoup/node/lib/types";

// TODO: Add app data to every where

// TODO: Fix and understand the options
const config: WebRtcServerOptions = {
  listenInfos: [
    {
      protocol: "udp",
      ip: "27.0.0.1",
      announcedAddress: "27.0.0.1",
      //  port: 5000,
      portRange: {
        min: 10000,
        max: 50000,
      },
      //   flags:{
      //     ipv6Only: false,
      //     udpReusePort: false
      //   },
      //   sendBufferSize: 1024,
      //   recvBufferSize: 1024,
    },
  ],
  appData: { data: "data" },
};

export async function createWebRtcServer(
  worker: Worker,
): Promise<WebRtcServer> {
  const webRtcServer = await worker.createWebRtcServer(config);
  return webRtcServer;
}
