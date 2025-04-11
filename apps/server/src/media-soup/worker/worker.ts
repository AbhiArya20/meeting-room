import { createWorker } from "mediasoup";
import { cpus } from "os";
import { WorkerSettings, Worker } from "mediasoup/node/lib/types";
import { env } from "@/config/env";

const config: WorkerSettings = {
  logLevel: "debug",
  logTags: [
    "info",
    "ice",
    "dtls",
    "rtp",
    "srtp",
    "rtcp",
    "rtx",
    "bwe",
    "score",
    "simulcast",
    "svc",
    "sctp",
    "message",
  ],

  /**
   * @deprecated
   */
  rtcMinPort: 10000,
  /**
   * @deprecated
   */
  rtcMaxPort: 59999,
  dtlsCertificateFile: process.env.WORKER_CERT_FULL_CHAIN,
  dtlsPrivateKeyFile: process.env.WORKER_CERT_PRIVATE_KEY,
  libwebrtcFieldTrials: "WebRTC-Bwe-AlrLimitedBackoff/Enabled/",
  disableLiburing: false,
  appData: { data: "data" },
};

const workers: Worker[] = [];

const MAX_WORKERS = env.WORKER_MAX_COUNT || cpus().length;

export async function createWorkers(): Promise<Worker[]> {
  for (let i = 0; i < MAX_WORKERS; i++) {
    workers.push(await createWorker(config));
  }
  return workers;
}

// TODO: learn about workerupdateableseting and workerresourceusage
// mediasoup.parseScalabilityMode(scalabilityMode);
