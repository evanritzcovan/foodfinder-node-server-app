import * as dao from "./dao.js";

function BookmarksRoutes(app) {
  const findAllBookmarks = async (req, res) => {};

  const createBookmark = async (req, res) => {
    const userId = req.params.userId;
    const restaurantId = req.params.restaurantId;
    const restaurantName = req.params.restaurantName;
    const bookmarks = await dao.createBookmark(userId, restaurantId, restaurantName);
    res.json(bookmarks);
  };

  const deleteBookmark = async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const userId = req.params.userId;
    const bookmarks = await dao.deleteBookmark(userId, restaurantId);
    res.json(bookmarks);
  };

  const findUsersBookmarked = async (req, res) => {
    const restaurantId = req.params.restaurantId;
    const users = await dao.findUsersBookmarked(restaurantId);
    res.json(users);
  };

  const findRestaurantsBookmarked = async (req, res) => {
    const userId = req.params.userId;
    const bookmarks = await dao.findRestaurantsBookmarked(userId);
    res.json(bookmarks);
  };

  app.get("/api/bookmarks", findAllBookmarks);
  app.post("/api/users/:userId/bookmarks/:restaurantId/:restaurantName", createBookmark);
  app.delete("/api/users/:userId/bookmarks/:restaurantId", deleteBookmark);
  app.get("/api/bookmarks/:restaurantId/users", findUsersBookmarked);
  app.get("/api/users/:userId/bookmarks", findRestaurantsBookmarked);
}

export default BookmarksRoutes;
