import React from "react";
import BurgerContainer from "./BurgerContainer";

class Burger extends React.Component{
    render(){
      return(
        <div className={'cho-ing'}>
          <h2>Your burger goes here</h2>
          <BurgerContainer /> 
        </div>
      );
    }
}

export default Burger;
  