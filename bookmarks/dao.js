import bookmarkModel from "./model.js";

export const findAllBookmarks = () => bookmarkModel.find();
export const createBookmark = (userId, restaurantId, restaurantName) => bookmarkModel.create({ user: userId, restaurantId: restaurantId, restaurantName: restaurantName });
export const deleteBookmark = (userId, restaurantId) => bookmarkModel.deleteOne({ user: userId, restaurantId: restaurantId });
export const findUsersBookmarked = (restaurantId) => bookmarkModel.find({ restaurantId: restaurantId }).populate("user");
export const findRestaurantsBookmarked = (userId) => bookmarkModel.find({ user: userId });
