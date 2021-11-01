import React from "react";
import IngredientSection from "./IngredientSection";

class ChooseIngredients extends React.Component{

    render(){
  
      const sections = [];
      
      this.props.ingSect.forEach(section =>{
        sections.push(<IngredientSection key={section.name} name={section.name} value={section.value} />)
      })
  
      return(
  
        <div className={'cho-ing'}>
          <h2>Choose your ingredients!</h2>
          {sections}
        </div>
      
      );
    }
}

export default ChooseIngredients;