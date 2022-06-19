import axios from "axios";
//import createApi, { toJson } from "unsplash-js";

//Base API call
export const fruitAPI = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api",
});

// 1. All fruit GET request.
export const getAllFruit = () => {
  return fruitAPI.get("/fruit/all").then((response) => {
    return response.data;
  });
};

// 2. Single fruit by id/name GET request.
export const getSingleFruit = (fruitName) => {
  return fruitAPI.get(`/fruit/${fruitName}`).then((response) => {
    return response.data;
  });
};

export const getPhotos = (fruitName) => {
  return axios
    .get(
      `https://api.unsplash.com/search/photos?page=1&per_page=1&query=${fruitName}-fruit&orientation=squarish&client_id=${process.env.REACT_APP_ACCESS_KEY}`
    )
    .then((response) => {
      return response.data;
    });
};
