import "../index.css";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import React, { useState } from "react";
function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false);
  const appClass = darkMode ? "App dark" : "App light"
function handleMode () {
  setDarkMode((darkMode) => !darkMode);
  }
  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleMode} >Dark Mode</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
