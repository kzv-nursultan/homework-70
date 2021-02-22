import { CART_CLICKED, CART_REMOVED } from "../actions/cartAction";

const initialState = {};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
        case CART_CLICKED:
            if(!state[action.name]) {
                return { ...state, [action.name]:action.value };
            } else {
                return {
                    ...state,
                    [action.name]:
                    {...state[action.name], 
                        counter: state[action.name].counter + 1,
                        totalPrice: (state[action.name].price) * (state[action.name].counter+1)}};
            }
        case CART_REMOVED:
            if(state[action.name].counter > 1) {
                return {...state, [action.name]:{
                    ...state[action.name], 
                    counter: state[action.name].counter - 1,
                    totalPrice: (state[action.name].price) * (state[action.name].counter-1)
                }};
            } else {
                const stateCopy = {...state};
                delete stateCopy[action.name]
                return {...stateCopy}
            }
        default:
            return state;
    }
};