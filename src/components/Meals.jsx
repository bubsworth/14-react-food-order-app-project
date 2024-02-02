import { useState, useEffect } from "react";

export default function Meals({ fallbackText, loadingText, isLoading }) {
  const [loadedMeals, setLoadedMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const response = await fetch("http://localhost:3000/meals");

      if (!response.ok) {
        // throw new Error("Failed to fetch meals.");
      }

      const meals = await response.json();
      setLoadedMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <>
      {/* {isLoading && <p className="fallback-text">{loadingText}</p>}
      {!isLoading && meals.length === 0 && (
        <p className="fallback-text">{fallbackText}</p>
      )}
      {!isLoading && meals.length > 0 && ( */}
      <ul id="meals">
        {loadedMeals.map((meal) => (
          <li key={meal.id} className="meal-item">
            <div className="meal-item article">
              <h3 className="meal-item h3">{meal.name}</h3>
              <p className="meal-item-description">{meal.description}</p>
              <p className="meal-item-price">{meal.price}</p>
            </div>
          </li>
        ))}
      </ul>
      {/* )} */}
    </>
  );
}
