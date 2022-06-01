import {
  ADD_CATEGORY,
  REMOVE_CATEGORY,
  SET_CATEGORIES,
} from "../actions/actions";

export const initCatState = {
  list: [
    {
      _id: "6297469c60bc0485931bc722",
      value: "Health & Fitness",
      color: "#FF9F40",
      __v: 0,
    },
    {
      _id: "629746a360bc0485931bc725",
      value: "Food & Beverages",
      color: "#ffcd56",
      __v: 0,
    },
    {
      _id: "629746a960bc0485931bc728",
      value: "Recharges",
      color: "#4BC0C0",
      __v: 0,
    },
    {
      _id: "629746b060bc0485931bc72b",
      value: "Groceries",
      color: "#FF6384",
      __v: 0,
    },
    {
      _id: "629746b860bc0485931bc72e",
      value: "Travel",
      color: "#36A2EB",
      __v: 0,
    },
    {
      _id: "629747701601de72672574ff",
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
