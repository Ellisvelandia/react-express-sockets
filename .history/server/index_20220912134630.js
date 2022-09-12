import express from "express";
import morgan from "morgan";
import {Server as }

const app = express();

app.use(morgan("dev"));

app.listen(3000);
console.log("Server started on port 3000");
