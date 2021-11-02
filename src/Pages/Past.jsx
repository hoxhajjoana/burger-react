import React from "react";
import BurgerContainer from "../BurgerContainer";
import Button from "../Button";

function Past(){


    const contents = [];

    const storageBurgers = JSON.parse(localStorage.getItem('burgers'));

    if(storageBurgers!=null){

        storageBurgers.forEach(burger => {

            const ingredients = [];

            burger.ingredients.forEach(
                ingredient => {
                    ingredients.push(
                        <div>{ingredient.name}</div>
                    )
                }
            );

            ingredients.push(<br/>);
            ingredients.push(<div>{burger.price} TL</div>);
            
            contents.push(
                <div className="flex">
                    
                    <BurgerContainer past={true} burger={burger}/>
                    <div className="list-ing"> {ingredients}</div>
                    <Button classes={['normal']} text={"Add to favorites"}/>
                    <Button classes={['delete']} text={"Delete"}/>

                </div>
            );
        });
    }
    else{
        contents.push(
            <div className="rest no-burger">
                <h2>You have not bought a burger before :(</h2>
            </div>
        );

    }

    return(
        <div className={`center rest ${storageBurgers?'':'flex'}`}>
            {contents};
        </div>
    );
}

export default Past;