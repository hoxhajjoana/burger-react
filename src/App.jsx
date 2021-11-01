import React from "react";
import Header from './Header';
import Canvas from "./Canvas";

function App(){

  return(
    <div>

      <Header/>

      <Canvas classes={['flex', 'center', 'add-bur']} />

    </div>

  );
}

export default App;