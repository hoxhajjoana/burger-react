import React from "react";
import Button from'./Button'

class Ingredient extends React.Component{
    render(){
      return(
        <button>
          <Button classes={['pg-btn']} text={this.props.name}/>
        </button>
      );
    }
}

export default Ingredient;