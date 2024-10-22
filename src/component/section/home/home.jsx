import { Link } from "react-router-dom";
import Summary from "./summary";
import img1 from "../../../assets/img/undefined.png";
import img2 from "../../../assets/img/undefined (1).png";
import img3 from "../../../assets/img/undefined (2).png";
import AllCategory from "../../all-category";

function Home() {
  const summary = [
    {
      title: "QuickBite",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisi convallis sed arcu consequat vitae vestibulum justo donec quisque. .",
      img: img1,
    },
    {
      title: "Various Food",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisi convallis sed arcu consequat vitae vestibulum justo donec quisque. .",
      img: img2,
    },
    {
      title: "Delicious Receipe",
      description:
        "Lorem ipsum dolor sit amet consectetur. Nisi convallis sed arcu consequat vitae vestibulum justo donec quisque. .",
      img: img3,
    },
  ];

  return (
    <div>
      <section className="w-full h-screen md:max-h-[800px] bg-[url('src/assets/img/bg.jpg')] bg-cover bg-center px-[30px] flex justify-center items-center">
        <div className="w-full max-w-[1240px] flex justify-center lg:justify-end items-center">
          <div className="w-[500px] flex flex-col items-center lg:items-start gap-3">
            <h1 className="font-poppins font-medium text-center lg:text-justify text-4xl md:text-5xl">
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
              to="/all-categories"
              className="px-5 py-3 mt-3 bg-gray-800 w-fit rounded-md text-gray-50 hover:bg-orange-600 hover:duration-300 drop-shadow-xl"
            >
              Find Your Favorite Dish
            </Link>
          </div>
        </div>
      </section>
      <section className="w-full px-[30px] py-20 flex justify-center items-center">
        <div className="w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-center gap-10">
          {summary.map((item, index) => (
            <Summary
              key={index}
              title={item.title}
              description={item.description}
              img={item.img}
            />
          ))}
        </div>
      </section>
      <main className="w-full px-[30px] py-20 flex justify-center items-center bg-slate-100">
        <div className="w-full max-w-[1240px] flex flex-col justify-center items-center gap-[60px]">
          <h1 className="font-poppins font-semibold text-[32px] text-gray-700">
            Category List
          </h1>
          <AllCategory />
        </div>
      </main>
    </div>
  );
}

export default Home;
