import mongoose from "mongoose";
import contactSchema from "./schema.js";

const model = mongoose.model("contacts", contactSchema);
export default model;
