import mongoose from "mongoose";

const bookmarkSchema = new mongoose.Schema(
    {
        user: { type: mongoose.Schema.Types.ObjectId, ref: "users" },
        restaurantId: String,
        restaurantName: String
    },
    { collections: "bookmarks"}
);

export default bookmarkSchema;
