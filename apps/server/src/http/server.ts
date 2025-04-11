import bodyParser from "body-parser";
import express, { type Express } from "express";
import morgan from "morgan";
import cors from "cors";
import { createServer, Server } from "node:http";

export const createHttpServer = (): Server => {
  const app = express();
  const server = createServer(app);
  app
    .disable("x-powered-by")
    .use(morgan("dev"))
    .use(bodyParser.urlencoded({ extended: true }))
    .use(bodyParser.json())
    .use(cors())
    .get("/message/:name", (req, res) => {
      return res.json({ message: `hello ${req.params.name}` });
    })
    .get("/status", (_, res) => {
      return res.json({ ok: true });
    });

  return server;
};
