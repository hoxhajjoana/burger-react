import React from "react";
import Button from "../Button";
import {useHistory} from 'react-router-dom';

function AddBurger(props){

    let history = useHistory();

    const headerClasses = props.classes;

    return(

        <div onClick={() => {
            history.push("/add_burger")
                }} 
            className={headerClasses.length===1?headerClasses:headerClasses.join(' ')} >

            <Button classes={['pg-btn', 'add-btn']} text="Choose Your Burger!"/>   

        </div>

    );
    
}

export default AddBurger;