import React from "react";
import BurgerContainer from "./BurgerContainer";
import Button from "./Button";

class Burger extends React.Component{
    render(){
      return(
        <div className={'cho-ing'}>
          <h2>Your burger goes here</h2>
          <BurgerContainer /> 
          <Button classes={['pg-btn', 'fin-btn']} text="Add Burger!"/>
        </div>
      );
    }
}

export default Burger;
  