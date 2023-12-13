import mongoose from "mongoose";
import imageSchema from './schema.js';

const imageModel = mongoose.model('Image', imageSchema);
export default imageModel;
