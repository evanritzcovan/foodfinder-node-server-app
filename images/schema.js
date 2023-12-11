import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    name: String,
    desc: String,
    img:
    {
      data: Buffer,
      contentType: String
    }
  }
);

export default imageSchema;