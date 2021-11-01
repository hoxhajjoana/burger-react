import React from "react";

class IngredientSection extends React.Component{
    render(){
  
      const buttons = [];
      console.log(this.props)
      this.props.value.forEach(ingredient => {
        buttons.push(<button key={ingredient.name} className={'pg-btn ingredients'} type="button">{ingredient.name + " (" + ingredient.price + "tl)"}</button>);
      })
  
      return(
        <div className={this.props.name + ' ingredients'}>
          {this.props.name.charAt(0).toUpperCase() + this.props.name.slice(1)}
          <br/>
          {buttons}
        </div>
      );
    }
}

export default IngredientSection;