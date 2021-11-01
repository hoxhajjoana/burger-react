import React from "react";
import Button from'./Button'

class Header extends React.Component{

    render(){
    
      return(
        <div className="flex nav">
          <Button  classes={['pg-btn', 'index']} text="Add Burger"/>
          <Button classes={['pg-btn', 'past']} text="Past Burgers & Favorites"/>
        </div>
      );
    }
  }

  export default Header;