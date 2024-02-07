import mongoose from "mongoose";

const Qrdata = new mongoose.Schema({
  name: String,
  from: String,
  to: String,
  data: String,
  airline: String,
  class: String,
  seat: String,
});

export default mongoose.model("qrdata", Qrdata);
