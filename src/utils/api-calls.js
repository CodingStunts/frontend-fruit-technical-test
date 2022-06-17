import axios from "axios";

//Base API call
export const fruitAPI = axios.create({
  baseURL: "https://cors-anywhere.herokuapp.com/https://www.fruityvice.com/api",
});

// 1. All fruit GET request
export const getAllFruit = () => {
  return fruitAPI.get("/fruit/all").then((response) => {
    return response.data;
  });
};

// 2. Single fruit by id/name GET request - Name, genus, family, nutrition info, image. (As per wire frame)
export const getSingleFruit = (fruitName) => {
  return fruitAPI.get(`/fruit/${fruitName}`).then((response) => {
    return response.data;
  });
};
