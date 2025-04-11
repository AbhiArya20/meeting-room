import { observer } from "mediasoup";
import { type Worker } from "mediasoup/node/lib/types";

observer.on("listenererror", (event, error) => {
  console.log("listenererror", error);
});

observer.on("newworker", (worker: Worker) => {
  console.log("New Worker Created [pid:%d]", worker.pid);

  worker.on("died", (error) => {
    console.log(`Worker Died [pid:${worker.pid}]`);
    console.log(error);
    console.log("Exiting in 2 seconds...");
    setTimeout(() => {
      process.exit(1);
    }, 2000);
  });

  //   TODO: understand about below events and implment them
  worker.on("subprocessclose", (event, error) => {
    console.log("newpeerconnection");
  });

  worker.on("listenererror", (event, error) => {
    console.log("listenererror", error);
  });

  // Worker observer event
  worker.observer.on("close", () => {
    console.log("worker closed [worker.pid:%d]", worker.pid);
  });

  worker.observer.on("newrouter", (router) => {
    console.log(
      "new router created [worker.pid:%d, router.id:%s]",
      worker.pid,
      router.id,
    );

    router.observer.on("close", () => {
      console.log("router closed [router.id:%s]", router.id);
    });

    router.observer.on("newtransport", (transport) => {
      console.log(
        "new transport created [worker.pid:%d, router.id:%s, transport.id:%s]",
        worker.pid,
        router.id,
        transport.id,
      );

      transport.observer.on("close", () => {
        console.log("transport closed [transport.id:%s]", transport.id);
      });

      transport.observer.on("newproducer", (producer) => {
        console.log(
          "new producer created [worker.pid:%d, router.id:%s, transport.id:%s, producer.id:%s]",
          worker.pid,
          router.id,
          transport.id,
          producer.id,
        );

        producer.observer.on("close", () => {
          console.log("producer closed [producer.id:%s]", producer.id);
        });
      });

      transport.observer.on("newconsumer", (consumer) => {
        console.log(
          "new consumer created [worker.pid:%d, router.id:%s, transport.id:%s, consumer.id:%s]",
          worker.pid,
          router.id,
          transport.id,
          consumer.id,
        );

        consumer.observer.on("close", () => {
          console.log("consumer closed [consumer.id:%s]", consumer.id);
        });
      });

      transport.observer.on("newdataproducer", (dataProducer) => {
        console.log(
          "new data producer created [worker.pid:%d, router.id:%s, transport.id:%s, dataProducer.id:%s]",
          worker.pid,
          router.id,
          transport.id,
          dataProducer.id,
        );

        dataProducer.observer.on("close", () => {
          console.log(
            "data producer closed [dataProducer.id:%s]",
            dataProducer.id,
          );
        });
      });

      transport.observer.on("newdataconsumer", (dataConsumer) => {
        console.log(
          "new data consumer created [worker.pid:%d, router.id:%s, transport.id:%s, dataConsumer.id:%s]",
          worker.pid,
          router.id,
          transport.id,
          dataConsumer.id,
        );

        dataConsumer.observer.on("close", () => {
          console.log(
            "data consumer closed [dataConsumer.id:%s]",
            dataConsumer.id,
          );
        });
      });
    });
  });

  worker.observer.on("newwebrtcserver", (webRtcServer) => {
    console.log(
      "new WebRTC server created [worker.pid:%d, webRtcServer.id:%s]",
      worker.pid,
      webRtcServer.id,
    );

    webRtcServer.observer.on("close", () => {
      console.log("WebRTC server closed [webRtcServer.id:%s]", webRtcServer.id);
    });
  });

  setInterval(() => {
    const usage = worker.getResourceUsage();
    console.log(`Worker Resource Usage [pid:${worker.pid}]`);
    console.log(usage);
  }, 10000);
});
