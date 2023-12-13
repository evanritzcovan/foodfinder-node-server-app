import restaurantModel from "./model.js";

export const createRestaurant = (restaurant) => restaurantModel.create(restaurant);
export const findRestaurantByYelpId = (restaurantYelpId) => restaurantModel.findOne({ restaurantYelpId: restaurantYelpId });
export const deleteRestaurant = (restaurant) => restaurantModel.deleteOne(restaurant);
export const updateRestaurant = (restaurantId, restaurant) => restaurantModel.updateOne({ _id: restaurantId }, { $set: restaurant });
