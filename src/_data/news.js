const axios = require("axios");
require("dotenv").config();

module.exports = async function () {
  try {
    const response = await axios.get(
      `http://newsapi.org/v2/everything?q=tesla&from=2020-12-31&sortBy=publishedAt&apiKey=${process.env.API_KEY}&pageSize=5`
    );
    return response.data;
  } catch (error) {
    console.error(errror);
  }
};
