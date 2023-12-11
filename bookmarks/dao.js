import bookmarkModel from "./model.js";

export const findAllBookmarks = () => bookmarkModel.find();
export const createUserBookmarksRestaurant = (userId, restaurantId) => bookmarkModel.create({ user: userId, restaurantId: restaurantId });
export const deleteUserBookmarksRestaurant = (userId, restaurantId) => bookmarkModel.deleteOne({ user: userId, restaurantId: restaurantId });
export const findUsersThatBookmarkRestaurant = (restaurantId) => bookmarkModel.find({ restaurantId: restaurantId }).populate("user");
export const findRestaurantsThatUserBookmarks = (userId) => bookmarkModel.find({user: userId});
