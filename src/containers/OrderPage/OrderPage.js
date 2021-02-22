import React, { useState } from 'react';
import {useSelector, useDispatch} from 'react-redux';
import CartInfo from '../../components/CartInfo/CartInfo'
import { cartRemoved } from '../../store/actions/cartAction';
import { postDishes } from '../../store/actions/dishAction';

const OrderPage = props => {
    const dispatch = useDispatch();
    const store = useSelector(state => state.cart);
    const [fields, setFields] = useState({address:'', name:'', phone:''});

    const deleteItem = name => dispatch(cartRemoved(name))

    const onChangeHandler = e => {
       const name = e.target.name;
       const value = e.target.value;

       setFields(prevState=>({
           ...prevState,
           [name]:value
       }));
    };

    const onSubmitHandler = e => {
        e.preventDefault();

        const orders = (
            Object.keys(store).map(key=>{
                return {[key]:store[key]['counter']};
            })
        );
       
        const newOrder = {
            customer: {...fields},
            dishes: {orders}
        };
        dispatch(postDishes(newOrder));
    };

    const showOrder = (
        Object.keys(store).map(key=>(
            <CartInfo key={key}
            name={key}
            counter={store[key]['counter']}
            totalPrice={store[key]['totalPrice']}
            deleteItem={deleteItem}/>
        ))
    );

    return (
        <div className='d-flex'>
            <div>
                {showOrder}
            </div>
            <form onSubmit={onSubmitHandler}>
                <h3>
                    Input your data:
                </h3>
                <p> 
                    <input name='name' onChange={onChangeHandler} 
                    placeholder='Name' required/>
                </p>
                <p> 
                    <input name='address' onChange={onChangeHandler} 
                    placeholder='Address' required/>
                </p>
                <p> 
                    <input name='phone' onChange={onChangeHandler} 
                    placeholder='Phone' required/>
                </p>
                <button type='submit' className='bg-secondary text-white m-2'>
                    Order
                </button>
            </form>
        </div>
    );
};

export default OrderPage;