import express from "express";
import Qrdata from "../DB/db-schema.js";

export let dataRouter = express.Router();

dataRouter.post("/", async (req, res) => {
  const data = req.body;
  let insertData = new Qrdata(data);
  try {
    await insertData.save();
    res.send({ message: "data inserted" });
  } catch (error) {
    console.log("error", error);
    res.status(400).send({ message: "error posting data " });
  }

  console.log("data", data);
});

dataRouter.get("/", async (req, res) => {
  let data = await Qrdata.find();

  try {
    res.send(data);
  } catch (error) {
    res.status(400).send({ message: "error getting data" });
  }
});
