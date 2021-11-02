import React from "react";

function BurgerContainer (props){

  const contents = [];

  if(props.past){
    props.burger.ingredients.forEach(
      ingredient => {
        contents.push(<div className={`${ingredient.name.toLowerCase().split(" ")[0]} ${ingredient.type} ing`}>
        </div>);
      }
    )
  }
  debugger;
  

  return(

    <div className='burger-container'>

      <div className="bun top-bun"></div>
        {contents}      
      <div className="bun bottom-bun"></div>
      
    </div>
  );
}

export default BurgerContainer;