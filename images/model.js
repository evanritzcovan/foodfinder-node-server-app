import mongoose from 'mongoose';
import imageSchema from './schema';

const imageModel = mongoose.model('Image', imageSchema);
export default imageModel;
