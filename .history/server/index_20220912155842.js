import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http";
import cors from "cors";

import { PORT } from "./config.js";

const app = express();
const server = http.createServer(app);
const io = new SocketServer(server);

app.use(cors());
app.use(morgan("dev"));

io.on("connection", () => {
  console.log("a user connected");
});

app.listen(PORT);
console.log("Server started on port 3000", PORT);
