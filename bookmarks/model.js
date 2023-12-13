import bookmarkSchema from "./schema.js";
import mongoose from "mongoose";

const bookmarkModel = mongoose.model("bookmarks", bookmarkSchema);
export default bookmarkModel;
