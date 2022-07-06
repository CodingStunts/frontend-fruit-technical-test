import axios from "axios";

//Base API calls
export const fruitAPI = axios.create({
  baseURL: "/api",
});

export const photoAPI = axios.create({
  baseURL: "/search",
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

// 3. Get photos for each fruit
export const getPhotos = (fruitName) => {
  return photoAPI.get(`/photos?page=1&per_page=1&query=${fruitName}-fruit&orientation=squarish&client_id=${process.env.REACT_APP_ACCESS_KEY}`)
    .then((response) => {
      return response.data;
    });
};
