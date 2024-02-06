import MealItem from "./MealItem";
import useHttp from "../hooks/useHttp";

const requestConfig = {};

export default function Meals() {
  const {
    data: loadedMeals,
    isLoading,
    error,
  } = useHttp("http://localhost:3000/meals", requestConfig, []);

  if (isLoading) {
    return <p>Fetching meals...</p>;
  }

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
