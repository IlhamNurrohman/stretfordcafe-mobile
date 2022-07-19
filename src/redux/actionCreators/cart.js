import { addProductString } from "./actionString";


export const addProductAction = (product) => ({
  type: addProductString,
  payload: product
})