import { Server } from "socket.io";
import { Server as HttpServer } from "node:http";

export function createIoServer(httpServer: HttpServer) {
  const io = new Server(httpServer, {});

  io.on("connection", (socket) => {
    console.log("a user connected");

    socket.on("disconnect", () => {
      console.log("user disconnected");
    });
  });

  return io;
}
