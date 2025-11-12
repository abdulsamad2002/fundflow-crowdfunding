"use server";

import mongoose from "mongoose";
import Payment from "@/models/Payment";
import connector from "@/mongo";

await connector();

export default async function Paymenter(data) {
  await Payment.create(data);
}
