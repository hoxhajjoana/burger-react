import React from "react";

class BurgerContainer extends React.Component{
    render(){
      return(
        <div className='burger'>
          <div className="bun top-bun"></div>
          <div className="bun bottom-bun"></div>
        </div>
      );
    }
}

export default BurgerContainer;