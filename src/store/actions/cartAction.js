export const CART_CLICKED = 'CART_CLICKED';
export const CART_REMOVED = 'CART_REMOVED';

export const cartClicked = (name, value) => {
    return (
        {type:CART_CLICKED, name, value}
    )
};

export const cartRemoved = name => {
    return ({type:CART_REMOVED, name});
};

