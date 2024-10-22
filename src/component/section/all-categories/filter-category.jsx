import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

function FilterCategory() {
  const { strCategory } = useParams();
  const [categoryData, setCategoryData] = useState([]);

  useEffect(() => {
    const fetchCategoryData = async () => {
      try {
        const response = await axios.get(
          `https://www.themealdb.com/api/json/v1/1/filter.php?c=${strCategory}`
        );
        setCategoryData(response.data.meals);
      } catch (error) {
        console.error("Error fetching category data:", error);
      }
    };

    fetchCategoryData();
  }, [strCategory]);

  return (
    <section className="w-full px-[30px] py-[100px] flex justify-center items-center">
      <div className="w-full max-w-[1240px] flex flex-col">
        <nav className="flex items-center border-2 px-5 py-4 rounded-md text-gray-500 mb-4">
          <Link to={`/all-categories`}>All Categories</Link>
          <span className="mx-2">/</span>
          <span className="font-bold">{strCategory}</span>
        </nav>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
          {categoryData.length > 0 ? (
            categoryData.map((meal) => (
              <Link
                to={`/meal/${meal.idMeal}`}
                key={meal.idMeal}
                style={{
                  backgroundImage: `url('${meal.strMealThumb}')`,
                  backgroundPosition: "center",
                  backgroundSize: "cover",
                }}
                className="relative overflow-hidden h-[150px] w-full flex items-center justify-center rounded-3xl hover:shadow-md hover:shadow-gray-700/20"
              >
                <div className="bg-gray-800/30 w-full h-full absolute"></div>
                <h1 className="z-10 font-poppins font-bold text-xl text-white">
                  {meal.strMeal}
                </h1>
              </Link>
            ))
          ) : (
            <p>No meals found in this category.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default FilterCategory;
