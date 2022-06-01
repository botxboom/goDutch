import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_CATEGORIES,
} from "../actions/actions";

const initCatState = {
  list: [
    {
      _id: "6295ae0a9dbdf4a931c55b3e",
      value: "Travel",
      color: "#36A2EB",
      __v: 0,
    },
    {
      _id: "6295ae1d9dbdf4a931c55b40",
      value: "Groceries",
      color: "#FF6384",
      __v: 0,
    },
    {
      _id: "6295ae299dbdf4a931c55b42",
      value: "Recharges",
      color: "#4BC0C0",
      __v: 0,
    },
    {
      _id: "6295ae379dbdf4a931c55b44",
      value: "Food & Beverages",
      color: "#ffcd56",
      __v: 0,
    },
    {
      _id: "6295ae439dbdf4a931c55b46",
      value: "Health & Fitness",
      color: "#FF9F40",
      __v: 0,
    },
    {
      _id: "6295ae4f9dbdf4a931c55b48",
      value: "Miscellaneous",
      color: "#E53A64",
      __v: 0,
    },
  ],
};

const categoryReducer = (state = initCatState, action) => {
  switch (action.type) {
    case ADD_CATEGORY:
      return {
        list: [action.category, ...state.list],
      };

    case SET_CATEGORIES:
      console.log(action.categories);
      return {
        ...state,
        list: action.categories,
      };

    case REMOVE_CATEGORY:
      const categories = state.list.filter((e) => e._id !== action.id);

      return {
        list: categories,
      };
    default:
      return state;
  }
};

export default categoryReducer;
