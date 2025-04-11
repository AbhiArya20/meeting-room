import { config } from "dotenv";
config();

const server = createHttpServer();
const io = createIoServer(server);

import {
  setLogEventListeners,
  parseScalabilityMode,
  observer,
} from "mediasoup";
import { createHttpServer } from "./http/server.js";
import { createIoServer } from "./socket-io/index.js";

setLogEventListeners({
  ondebug: (namespace, log) => {
    console.debug(`${namespace} ${log}`);
  },
  onwarn: (namespace, log) => {
    console.warn(`${namespace} ${log}`);
  },
  onerror: (namespace, log, error) => {
    if (error) {
      console.error(`${namespace} ${log}: ${error}`);
    } else {
      console.error(`${namespace} ${log}`);
    }
  },
});

console.log(parseScalabilityMode());

// import { log } from "@meeting-room/logger";
// import { createServer } from "./server";

// const worker = await createWorker({});

// // console.log(worker.);

// const rtpCapabilities = getSupportedRtpCapabilities();

// console.log(rtpCapabilities);

// parseScalabilityMode("L2T3");
// // => { spatialLayers: 2, temporalLayers: 3 }

// parseScalabilityMode("S3T3");
// // => { spatialLayers: 3, temporalLayers: 3 }

// parseScalabilityMode("L4T7_KEY_SHIFT");

// observer.on("newworker", (worker) => {
//   console.log("new worker created [pid:%d]", worker.pid);
// });

// const port = process.env.PORT || 3001;
// const server = createServer();

// server.listen(port, () => {
//   log(`api running on ${port}`);
// });
