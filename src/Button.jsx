import React from "react";

function Button (props){

  const classes = props.classes;
  const text = props.text;
  
  return(
    <div className={classes.length===1?classes:classes.join(' ')} onClick={props.onPress}>
      {text}
    </div>
  );

}

export default Button;