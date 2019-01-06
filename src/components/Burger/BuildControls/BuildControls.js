import React from 'react';
import BuildControl from './BuildControl/BuildControl';
import classes from './BuildControls.module.scss';
import Modal from '../../../containers/UI/Modal/Modal';

const controls = [
    { label: 'Cheese', type: 'cheese'},
    { label: 'Salad', type: 'salad'},
    { label: 'Meat', type: 'meat'},
    { label: 'Bacon', type: 'bacon'}
]

const buildControls = (props) => (
    <div className={classes.BuildControls}>
    <p>Total Price: {props.price.toFixed(2)}</p>
        {
            controls.map(ctrl => (
                <BuildControl 
                    key={ctrl.label} 
                    label={ctrl.label} 
                    added={() => props.ingredientAdded(ctrl.type)}
                    removed={() => props.ingredientRemoved(ctrl.type)} 
                    disabled={props.disabled[ctrl.type]}/>
            ))
        }
    {/* <button className={classes.OrderButton} disabled={!props.purchasable}>Order Now</button> */}
    <Modal 
        btnTitle="Order Now" 
        btnStatus={!props.purchasable}
        btnClass={classes.OrderButton}
        >Order the Burger</Modal>
    </div>
);

export default buildControls;