import React from "react";
import Button from'./Button'
import Canvas from "./Pages/Canvas";
import AddBurger from "./Pages/AddBurger";
import Past from "./Pages/Past";
import PageNotFound from "./Pages/PageNotFound";
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';


class Header extends React.Component{

    render(){
    
      return(
        <>
        <Router>        
          <div className="flex nav">

            <Link to="/">
              <Button  classes={['pg-btn', 'index']} text="Add Burger"/>
            </Link>
            <Link to="/past">
              <Button  classes={['pg-btn', 'past']} text="Past Burgers & Favorites"/>
            </Link>
            
          </div>

          <Switch>
            
            <Route path="/past" exact>
              <Past />
            </Route>
            <Route path="/" exact> 
              <AddBurger classes={['flex', 'center']}/>
            </Route>
            <Route path="/add_burger" exact>
                <Canvas classes={['flex', 'center', 'add-bur']} />
            </Route>
            <Route path="*" exact component={PageNotFound}/> 
          </Switch>
        </Router>
        </>

      );
    }
  }

  export default Header;