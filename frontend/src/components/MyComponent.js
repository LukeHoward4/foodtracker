import React, { useEffect, useState } from 'react';
import Axios from 'axios';

function FoodList() {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    Axios.get('http://localhost:3001/api/foods')
      .then((response) => setFoods(response.data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <ul>
      {foods.map((food) => (
        <li key={food.id}>
          {food.name} ({food.type}) - {food.calories} cal
        </li>
      ))}
    </ul>
  );
}

export default FoodList;
