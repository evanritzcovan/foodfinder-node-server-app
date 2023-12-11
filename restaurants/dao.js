import restaurantModel from "./model.js";

export const createRestaurant = (restaurant) => restaurantModel.create(restaurant);
export const findRestaurantById = (restaurantId) => restaurantModel.findById(restaurantId);
export const deleteRestaurant = (restaurant) => restaurantModel.deleteOne(restaurant);
export const updateRestaurant = (restaurantId, restaurant) => restaurantModel.updateOne({ _id: restaurantId }, { $set: restaurant });
