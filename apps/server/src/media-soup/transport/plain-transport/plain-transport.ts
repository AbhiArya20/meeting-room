import { PlainTransportOptions, Router } from "mediasoup/node/lib/types";

const config: PlainTransportOptions = {
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
  rtcpListenInfo: {
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
    // recvBufferSize: 1024,},
  },

  rtcpMux: true,
  comedia: true,
  //   enableSctp,
  //   numSctpStreams: {
  //     OS: 1024,
  //     MIS: 1024,
  //   },
  //   maxSctpMessageSize,
  //   sctpSendBufferSize,
  //   enableSrtp,
  srtpCryptoSuite: "AES_CM_128_HMAC_SHA1_80",

  appData: { data: "data" },
};

export async function createPlainTransport(router: Router) {
  const transport = await router.createPlainTransport(config);

  return transport;
}
