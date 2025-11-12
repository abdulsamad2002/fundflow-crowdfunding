import mongoose from "mongoose";
const { Schema, model } = mongoose;

const PaymentSchema = new Schema({
  name: String,
  reciever: String,
  message: String,
  amount: Number,
});

export default mongoose.models.Payment || model("Payment", PaymentSchema);
