import React from 'react';

const DishCard = props => {
    return (
        <div className = 'd-flex border border-primary m-2'
        style={{width:'250px'}} 
        onClick={()=>props.onClick(props.name)}>

            <img src={props.src} alt='dish' 
            style={{width:'120px',height:'70px', margin:'auto'}}/>

            <div className='p-2'>
                <h3>{props.name}</h3>
                <h3>{props.price}</h3>
            </div>
            
        </div>
    );
};

export default DishCard;