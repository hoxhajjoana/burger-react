import React from "react";
import Button from "../Button";
import {useHistory} from 'react-router-dom';
import BurgerClass from "../BurgerClass";

function AddBurger(props){

    let history = useHistory();

    const classes = props.classes;

    return(

        <div className={classes.length===1?classes:classes.join(' ')} >

            <Button classes={['pg-btn', 'add-btn']} text="Choose Your Burger!" onPress={() => {history.push("/add_burger"); global.burger = new BurgerClass()}}/>   

        </div>

    );
    
}

export default AddBurger;