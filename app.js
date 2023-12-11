import express from "express";
import cors from "cors";
import SearchRoutes from "./search/routes.js";
import session from "express-session";
import { createRequire } from 'module';
import UserRoutes from "./users/routes.js";
import RestaurantRoutes from "./restaurants/routes.js";
import BookmarksRoutes from "./bookmarks/routes.js";

const require = createRequire(import.meta.url);
const mongoose = require('mongoose');
const url = 'mongodb+srv://evanritzcovan:ffpassword@foodfinder.18o5l1d.mongodb.net/?retryWrites=true&w=majority';
const connectionParams={
    useNewUrlParser: true,
    useUnifiedTopology: true 
}
mongoose.connect(url,connectionParams)
    .then( () => {
        console.log(`Connected to database: ${url}`);
        console.log(mongoose.Connection);
    })
    .catch( (err) => {
        console.error(`Error connecting to the database. \n${err}`);
    })

const app = express();
app.use(
    cors({
        credentials: true,
        origin: "http://localhost:3000"
    })
);
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false
};
app.use(session(sessionOptions));
app.use(express.json());
app.get('/', (req, res) => {
    res.send('Hello, this is the root endpoint!');
});
console.log("Server running successfully...")

SearchRoutes(app);
UserRoutes(app);
RestaurantRoutes(app);
BookmarksRoutes(app);
app.listen(4000);
