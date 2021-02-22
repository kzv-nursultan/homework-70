import React from 'react';

const CartInfo = props => {

    return (
        <div className='m-2 border border-success p-3'
        style={{fontSize:'22px'}}>
            <p className='m-0'>
                <strong>{props.name}</strong> x {props.counter}
            </p>
            Price:<strong>{props.totalPrice}</strong>
            <div>
            <button onClick={()=>props.deleteItem(props.name)}>
                x
            </button>
            </div>
        </div>
    );
};

export default CartInfo;