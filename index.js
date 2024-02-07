import express from "express";
import cors from "cors";
import { dataRouter } from "./Router/datarouter.js";
import mongoose from "mongoose";
import dotenv from "dotenv";

const app = express();
app.use(express.json());
app.use(cors());
dotenv.config();

app.get("/health", (req, res) => res.send("up and running"));

app.use("/scannedData", dataRouter);

mongoose
  .connect("mongodb://localhost:27017/qrcode")
  .then(() =>
    app.listen("5000", () =>
      console.log("server is running && db is connected")
    )
  )
  .catch((e) => console.log(e));
