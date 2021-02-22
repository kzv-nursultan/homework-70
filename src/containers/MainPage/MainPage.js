import React, { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import {useDispatch, useSelector} from 'react-redux';
import { useHistory } from "react-router-dom";
import { getDishes } from '../../store/actions/dishAction';
import DishCard from '../../components/DishCard/DishCard';
import CartInfo from '../../components/CartInfo/CartInfo';
import { cartClicked, cartRemoved } from '../../store/actions/cartAction';
import Modal from '../../components/UI/Modal/Modal';
import OrderPage from '../OrderPage/OrderPage';

const MainPage = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [show, setShow] = useState(false);

    const dishes = useSelector(state => state.dish.dishes);
    const cart = useSelector(state => state.cart);

    const clickHandler = (name,value) => dispatch(cartClicked(name,value));
    const deleteHandler = (name) => dispatch(cartRemoved(name));

    useEffect(()=>{
        dispatch(getDishes());
    },[dispatch]);

    const allPrices = (Object.keys(cart).reduce((acc, dish)=>{
            return acc + cart[dish]['totalPrice'];
        },0)
    );

    const orderHandler = () => {
        setShow(true);
    };

    let Prices = '';
    if(allPrices === 0) {
        Prices = 'No orders yet';
    } else {
        Prices = ( 
            'Total Price: ' + allPrices + " kgs"
        );
    };


    const dishCards = (
        Object.keys(dishes).map(key=>(
                <DishCard
                key = {key} 
                src={dishes[key]['image']}
                name={key}
                price={dishes[key]['price']}
                onClick={()=>clickHandler(key, dishes[key])}/>            
            )            
        )
    );

    const cartInfo = (
        Object.keys(cart).map(key=>(
            <CartInfo key={key}
            name={key}
            counter={cart[key]['counter']}
            totalPrice={cart[key]['totalPrice']}
            deleteItem={deleteHandler}/>
        ))
    );

    const backDropClick = () => {
        setShow(false);
    };  
    

    return (
        <div className='d-flex text-center' 
        style={{width:'450px', margin:'20px auto'}}>
            <div className='border border-secondary mr-1'>
                <h3>
                    Our Dishes:
                </h3>
                {dishCards}
            </div>
            <div className='border border-secondary p-2'>
                <h3>
                    Cart
                </h3>
                {cartInfo}
                {Prices}
                <div>
                    <button className='bg-success text-white'
                    disabled={!allPrices > 0}
                    onClick={()=>orderHandler()}>
                        Place Order
                    </button>
                </div>
                <Modal show={show} onClick={()=>backDropClick()}>
                    <OrderPage/>
                </Modal>
            </div>
        </div>
    );
};

export default MainPage;