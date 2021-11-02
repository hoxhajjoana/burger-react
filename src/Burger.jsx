import React from "react";
import BurgerContainer from "./BurgerContainer";
import Button from "./Button";


function Burger(){


  const addBurgerToLocalStorage = () => {
    
    let burgers;
  
    if(localStorage.getItem('burgers') === null){
        burgers = [];
    }
    else{
        burgers = JSON.parse(localStorage.getItem('burgers'));
    }
  
    burgers.push(global.burger);
    localStorage.setItem('burgers', JSON.stringify(burgers));
  
  }
  
  return(
    <div className={'cho-ing'}>
      <h2>Your burger goes here</h2>
      <BurgerContainer /> 
      <p style={{float:"right", margin:"5% 20% 0 0"}}>{global.burger.price} TL</p>

      <Button classes={['pg-btn', 'fin-btn']} text="Add Burger!" onPress={addBurgerToLocalStorage}/>
    </div>
  );
}

export default Burger;
  