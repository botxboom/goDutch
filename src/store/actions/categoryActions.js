import { ADD_CATEGORY, REMOVE_CATEGORY, SET_CATEGORIES } from "./actions";

const addCategory = (category) => {
  return { type: ADD_CATEGORY, category };
};

const setCategories = (categories) => {
  return { type: SET_CATEGORIES, categories };
};

const removeCategory = (id) => {
  return { type: REMOVE_CATEGORY, id };
};

export { addCategory, removeCategory, setCategories };
