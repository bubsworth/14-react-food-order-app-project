import { useState, useEffect } from "react";
import MealItem from "./MealItem";

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
          <MealItem key={meal.id} meal={meal} />
        ))}
      </ul>
      {/* )} */}
    </>
  );
}
