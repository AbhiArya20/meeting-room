import { DirectTransportOptions, Router } from "mediasoup/node/lib/types";

const config: DirectTransportOptions = {
  maxMessageSize: 262144,
  appData: { data: "data" },
};

export async function createDirectTransport(router: Router) {
  const transport = await router.createDirectTransport(config);

  return transport;
}
