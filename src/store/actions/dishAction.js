import axios from '../../axios-dishes';

export const GET_DISHES_REQUEST = 'GET_DISHES_REQUEST';
export const GET_DISHES_SUCCESS = 'GET_DISHES_SUCCESS';
export const GET_DISHES_FAILURE = 'GET_DISHES_FAILURE';

export const POST_ORDERS_REQUEST = 'POST_ORDERS_REQUEST';
export const POST_ORDERS_SUCCESS = 'POST_ORDERS_SUCCESS';
export const POST_ORDERS_FAILURE = 'POST_ORDERS_FAILURE';

export const getDishesRequest = () => ({type:GET_DISHES_REQUEST});
export const getDishesSuccess = value => ({type:GET_DISHES_SUCCESS, value });
export const getDishesFailure = () => ({type:GET_DISHES_FAILURE});

export const postDishesRequest = () => ({type:POST_ORDERS_REQUEST});
export const postDishesSuccess = () => ({type:POST_ORDERS_SUCCESS});
export const postDishesFailure = () => ({type:POST_ORDERS_FAILURE});

export const getDishes = () => {
    return async dispatch => {
        dispatch(getDishesRequest());
        try {
            const response = await axios.get('dishes/.json');
            dispatch(getDishesSuccess(response.data));
        } catch (e) {
            dispatch(getDishesFailure());
        }
    };
};

export const postDishes = data => {
    return async dispatch => {
        dispatch(postDishesRequest());
        try {
            await axios.post('orders/.json', data);
            dispatch(postDishesSuccess());
        } catch (e) {
            dispatch(postDishesFailure());
        }
    }
}