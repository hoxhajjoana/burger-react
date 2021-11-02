import React from "react";

function IngredientSection (props){

  const buttons = [];

  props.value.forEach(ingredient => {
    buttons.push(<button key={ingredient.name} onClick={()=>{global.burger.addIngredient(ingredient)}} className={'pg-btn ingredients'} type="button">{ingredient.name + " (" + ingredient.price + "tl)"}</button>);
  })

  return(
    <div className={props.name + ' ingredients'}>
      {props.name.charAt(0).toUpperCase() + props.name.slice(1)}
      <br/>
      {buttons}
    </div>
  );
    
}

export default IngredientSection;