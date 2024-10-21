import { Link } from "react-router-dom";
import background from "../../../assets/img/bg.jpg";

function Home() {
  return (
    <div>
      <section className="w-full h-[800px] bg-[url('src/assets/img/bg.jpg')] bg-cover bg-center lg:p-[100px] flex justify-center items-center">
        <div className="w-full max-w-[1240px] flex justify-center lg:justify-end items-center">
          <div className="w-[500px] flex flex-col sm:max-lg:items-center gap-3">
            <h1 className="font-poppins font-medium text-5xl">
              Explore the Delicious World of Recipes
            </h1>
            <p className="font-poppins text-gray-700 text-justify">
              Discover a wide variety of food inspirations across different
              categories, complete with easy-to-follow recipes and step-by-step
              instructions. From traditional dishes to international cuisines,
              we’ve got everything you need to serve up delicious meals every
              day!
            </p>
            <Link
              to="#"
              className="px-5 py-3 mt-3 bg-gray-800 w-fit rounded-md text-gray-50"
            >
              Find Your Favorite Dish
            </Link>
          </div>
        </div>
      </section>
      <section>
        <div></div>
        <div></div>
        <div></div>
      </section>
    </div>
  );
}

export default Home;
