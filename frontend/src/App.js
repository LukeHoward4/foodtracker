import React from 'react';
import './App.css';
import MyComponent from './components/MyComponent.js';

function Food(name, type, calories) {
  this.name = name;
  this.type = type;
  this.calories = calories;
  this.greet = function() {
    console.log("Hello, my name is " + this.name);
  };
}
const banana = new Food("Banana", "fruit", 50);
const apple = new Food("Apple", "fruit", 75);
const sourdough = new Food("Sourdough", "fruit", 100);
const beans = new Food("Beans", "protein", 100);
const steak = new Food("Steak", "protein", 200);
const broccoli = new Food("Broccoli", "vegetable", 50);
const foods = [banana, apple, sourdough, beans, steak, broccoli];
const foodList = foods.map((food)=>{
    return <li className="food-item"><p className="food-name">{food.name}</p>
    <p className="food-description">{food.type} <br></br>{food.calories} cal</p></li>;
});
function App() {
  return (
    <div className="App">
      <header className="App-header">
        Welcome to food tracker
        <p>
          Listed below are your foods eaten today
          <ul className = "food-list">{foodList}</ul>
        </p>
        <MyComponent/>
        
      </header>
    </div>
  );
}

export default App;