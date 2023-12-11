import bookmarkSchema from "./schema.js";
import mongoose from "mongoose";

const model = mongoose.model("bookmarks", bookmarkSchema);
export default model;
