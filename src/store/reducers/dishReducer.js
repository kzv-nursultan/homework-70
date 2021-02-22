import { GET_DISHES_REQUEST, GET_DISHES_SUCCESS, GET_DISHES_FAILURE, POST_ORDERS_REQUEST, POST_ORDERS_SUCCESS, POST_ORDERS_FAILURE } from "../actions/dishAction";

const initialState = {
    loading: false,
    dishes: {test:'test'},
    error: false
};

export const dishReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_DISHES_REQUEST:
            return {...state, loading:true};
        case GET_DISHES_SUCCESS:
            return {...state, loading:false, dishes:action.value};
        case GET_DISHES_FAILURE:
            return{...state, error:true};
        case POST_ORDERS_REQUEST:
            return {...state, loading:true};
        case POST_ORDERS_SUCCESS:
            return {...state, loading:false};
        case POST_ORDERS_FAILURE:
            return {...state, error:true}
        default:
            return state;
    };
};