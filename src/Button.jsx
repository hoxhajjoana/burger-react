import React from "react";

class Button extends React.Component{
    render(){
      console.log(this.props);
      const classes = this.props.classes;
      const text = this.props.text;
      return(
        <div className={classes.length===1?classes:classes.join(' ')}>
          {text}
        </div>
      );
    }
  }

export default Button;