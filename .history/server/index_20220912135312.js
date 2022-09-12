import express from "express";
import morgan from "morgan";
import { Server as SocketServer } from "socket.io";
import http from "http"

const app = express();
const server = http.cr

app.use(morgan("dev"));

app.listen(3000);
console.log("Server started on port 3000");
