import axios from "axios";
import apiProxy from "../api-proxy/api-proxy";

//Base API call
export const fruitAPI = axios.create({
  baseURL: apiProxy,
});

// 1. All fruit GET request
export const getAllFruit = () => {
  return fruitAPI.get("fruit/all").then(({ fruitList }) => {
    console.log(fruitList);
    return fruitList;
  });
};

// 2. Single fruit by id/name GET request - Name, genus, family, nutrition info, image. (As per wire frame)
export const getSingleFruit = (id) => {
  return fruitAPI.get(`fruit/all/${id}`).then(({ fruitData }) => {
    return fruitData;
  });
};
