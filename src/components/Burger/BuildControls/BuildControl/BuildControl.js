import React from 'react';
import classes from './BuildControl.module.scss';

const buildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button onClick={props.added}>+</button>
        <button onClick={props.removed} disabled={props.disabled}>-</button>
    </div>
);

export default buildControl;