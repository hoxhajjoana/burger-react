import Item from "./Item";

function createModal(string){

    let body = document.getElementsByTagName("body")[0];

    let modal = document.createElement("div");

    modal.classList.add("modal");

    let modalContent = document.createElement("div");

    modalContent.classList.add("modal-content");
    
    modal.appendChild(modalContent);

    let closeButton = document.createElement("span");

    closeButton.classList.add("close");
    closeButton.innerHTML = '&times';

    closeButton.onclick = function(){
        this.parentElement.parentElement.remove();
    }

    modalContent.appendChild(closeButton);

    let textContent = document.createElement("p");

    modalContent.appendChild(textContent);

    textContent.innerText = string;

    body.appendChild(modal);
}

class BurgerClass{

    static maxIngredient = {'patty':2, 'veggie':5, 'sauce':2, 'bun':1};

    constructor(){
        this.ingredients = [];
        this.price = 0;
        this.patty = 0;
        this.veggie = 0;
        this.sauce = 0;
        this.bun = 0;////wanted to implement a 
        this.favorite = false;
        this.addIngredient(new Item('White Bun', 'bun', 5.0));
        
    }

    addIngredient(item){

        console.log(item);

        debugger;

        console.log('Trying to add '+ item.name);

        if(this[item.type] < BurgerClass.maxIngredient[item.type]){

            this.ingredients.push(item);
            this.price += item.price;
            this.adjustIngredients(item.type, true);
            console.log("succeeded");
            return true;
        }
        createModal(`You cannot add more of the ${item.type} type of ingredients. If you have changed your mind about any of the ingredients, click on it on the illustration to remove it.`);
        
        //make a popup instead
        console.log("failed");
        return false;
    }

    removeIngredient(item){

        console.log('Trying to remove '+ item.name);
        
        //a = this.ingredients.find((_,i) => i.name === item.name)
        
        for(let i = 0; i < this.ingredients.length; i++) {
            
            if(this.ingredients[i].name === item.name) {
                this.ingredients.splice(i, 1);
                break;
            }
        }

        this.price -= item.price;
        this.adjustIngredients(item.type, false);
    }

    adjustIngredients(type, action){

        if(action){
            
            this[type]+=1;
        }
        else{
            this[type]-=1;
        }
    }

}

export default BurgerClass;