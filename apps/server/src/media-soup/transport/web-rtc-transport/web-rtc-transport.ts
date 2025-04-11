import {
  Router,
  WebRtcServer,
  WebRtcTransport,
} from "mediasoup/node/lib/types";

// TODO: grab more understanding about the WebRtcTransportOptions
export async function createWebRtcTransport(
  router: Router,
  webRtcServer: WebRtcServer,
): Promise<WebRtcTransport> {
  const transport = await router.createWebRtcTransport({
    webRtcServer: webRtcServer,
    enableUdp: true,
    enableTcp: true,
  });
  return transport;
}
