import { RouterOptions, Worker, Router } from "mediasoup/node/lib/types";
import { getSupportedRtpCapabilities } from "mediasoup";

const rtpCapabilities = getSupportedRtpCapabilities();
// TODO: Add app data to every where
const config: RouterOptions = {
  mediaCodecs: rtpCapabilities.codecs,
  appData: { data: "data" },
};

export async function createRouter(worker: Worker): Promise<Router> {
  const router = await worker.createRouter(config);
  return router;
}
