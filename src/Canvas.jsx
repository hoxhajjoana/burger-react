import React from "react";
import ChooseIngredients from'./ChooseIngredients';
import Burger from "./Burger";

const ingSect = [
    {
        "name":"patties",
        "value":[
            {"name":"Chicken Patty","type":"patty","price":7},
            {"name":"Beef Patty","type":"patty","price":10},
            {"name":"Meatballs","type":"patty","price":12},
            {"name":"Pork Patty","type":"patty","price":10},
            {"name":"Vegan-Patty","type":"patty","price":15}
        ]
    },
    {
        "name":"veggies",
        "value":[
            {"name":"Tomato","type":"veggie","price":1},
            {"name":"Lettuce","type":"veggie","price":1},
            {"name":"Pickles","type":"veggie","price":1},
            {"name":"Cheese","type":"veggie","price":2},
            {"name":"Onion","type":"veggie","price":1},
            {"name":"Ham","type":"veggie","price":3},
            {"name":"Bacon","type":"veggie","price":3},
            {"name":"Vegan Cheese","type":"veggie","price":5},
            {"name":"Egg","type":"veggie","price":2.5},
            {"name":"Jalapeno pepper","type":"veggie","price":2}
        ]
    },
    {
        "name":"sauces",
        "value":[
            {"name":"Mayonnaise","type":"sauce","price":0.5},
            {"name":"Ketchup","type":"sauce","price":0.5},
            {"name":"Barbeque","type":"sauce","price":1},
            {"name":"Hot Sauce","type":"sauce","price":1},
            {"name":"Mustard","type":"sauce","price":1}
        ]
    }
  ]

class Canvas extends React.Component{
    render(){
  
      const headerClasses = this.props.classes;
  
      return(
        <div className={headerClasses.join(' ')}>
          <ChooseIngredients ingSect={ingSect}/>
          <Burger />
        </div>
      );
    }
}

export default Canvas;