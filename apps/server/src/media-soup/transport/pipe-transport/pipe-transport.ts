import { PipeTransportOptions, Router } from "mediasoup/node/lib/types";

const config: PipeTransportOptions = {
  listenInfo: {
    protocol: "tcp",
    ip: "127.0.0.1",
    announcedAddress: "127.0.0.1",
    // port: 5000,

    portRange: {
      min: 10000,
      max: 50000,
    },

    // flags:{
    //     ipv6Only: false,
    //     udpReusePort: false
    // }

    // sendBufferSize: 1024,
    // recvBufferSize: 1024,
  },

  //   port: 5000,

  //   enableSctp: true,
  //   numSctpStreams: {
  //     OS: 1024,
  //     MIS: 1024,
  //   },
  //   maxSctpMessageSize: 268435456,
  //   sctpSendBufferSize: 268435456,
  //   enableRtx: false,
  //   enableSrtp: true,

  appData: { data: "data" },
};

export async function createPipeTransport(router: Router) {
  const transport = await router.createPipeTransport(config);

  return transport;
}
