import axios from "axios";

export const YELP_API = "https://api.yelp.com/v3/businesses";
export const YELP_API_KEY = "egypJsq56bn5wlUmcF-S7lkOPW9Z-7RDdunPBztDTMqxqN9_M90ApznKaz66s6fQetP3NKMarNvE0s7AengEb2x9pV-0UzTlwLtAQD53_KNL7_DLhLxTVM3uaeB1ZXYx"

function SearchRoutes(app) {
  const findRestaurants = async (req, res) => {
    const { food } = req.params;
    const { location } = req.params;
    
    try {
      const options = {
        method: 'GET',
        url: `${YELP_API}/search`,
        params: {location: location, term: food, sort_by: 'best_match', limit: '10'},
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${YELP_API_KEY}`
        }
      };

      const response = await axios.request(options);
      const restaurants = response.data.businesses;
      res.json(restaurants);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  const findRestaurantById = async (req, res) => {
    const { restaurantId } = req.params;

    try {
      const options = {
        method: 'GET',
        url: `${YELP_API}/${restaurantId}`,
        headers: {
          accept: 'application/json',
          Authorization: `Bearer ${YELP_API_KEY}`
        }
      };

      const response = await axios.request(options);
      const restaurantDetails = response.data;
      res.json(restaurantDetails);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal server error' });
    }
  };

  app.get('/api/restaurants/search/:food/:location', findRestaurants);
  app.get('/api/restaurant/:restaurantId', findRestaurantById);
}

export default SearchRoutes;
