import express from "express";
import cors from "cors";
import SearchRoutes from "./search/routes.js";
import session from "express-session";
import { createRequire } from 'module';
import UserRoutes from "./users/routes.js";
import RestaurantRoutes from "./restaurants/routes.js";
import BookmarksRoutes from "./bookmarks/routes.js";
import ContactRoutes from "./contact/routes.js";

const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
const url = 'mongodb+srv://evanritzcovan:ffpassword@foodfinder.18o5l1d.mongodb.net/?retryWrites=true&w=majority';
const connectionParams = {
  useNewUrlParser: true,
  useUnifiedTopology: true
}

mongoose.connect(url, connectionParams).then(() => {
  console.log(mongoose.Connection);
}).catch((err) => {
  console.error(`Error connecting to the database. \n${err}`);
})

const app = express();
app.use(cors({
  credentials: true,
  origin: "https://foodfinder-react-web-app.netlify.app"
}));

const sessionOptions = {
  secret: "any string",
  resave: false,
  saveUninitialized: false
};

if (process.env.NODE_ENV !== "development") {
  sessionOptions.proxy = true;
  sessionOptions.cookie = {
    sameSite: "none",
    secure: true,
  };
}

app.use(session(sessionOptions));
app.use(express.json());
app.get('/', (req, res) => {
  res.send("This is the root endpoint for FoodFinder! View here: https://foodfinder-react-web-app.netlify.app");
});

SearchRoutes(app);
UserRoutes(app);
RestaurantRoutes(app);
BookmarksRoutes(app);
ContactRoutes(app);

app.listen(4000);
