import * as types from "../../constants/categoriesTypes";
import initialState from "../initialState";

const categoriesReducer = (state = initialState.categories, action) => {
    switch (action.type) {
        case types.FETCH_CATEGORIES_REQUEST:
            return {
                ...state,
                loading: true
            };
        case types.FETCH_CATEGORIES_FAILURE:
            return {
                ...state,
                errors: action.errors,
                loading: false
            };
        case types.FETCH_CATEGORIES_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false
            };
        default:
            return state;
    }
};

export default categoriesReducer;
