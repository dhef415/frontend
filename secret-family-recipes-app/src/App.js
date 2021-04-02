import './App.css';
import React from 'react';
import NewRecipe from './NewRecipeForm';
// import {Route} from 'react-router-dom';

function App() {



  return (
    <div className="App">
      <header className="App-header">
      </header>
      <div>
        <NewRecipe
        values={{}} />
      </div>
    </div>
  );
}

export default App;
