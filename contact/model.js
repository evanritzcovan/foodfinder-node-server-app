import mongoose from "mongoose";
import contactSchema from "./schema.js";

const contactModel = mongoose.model("contacts", contactSchema);
export default contactModel;
