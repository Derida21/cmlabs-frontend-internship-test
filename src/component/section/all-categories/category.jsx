import { Link } from "react-router-dom";
import AllCategory from "../../all-category";

function Category() {
  return (
    <section className="w-full px-[30px] py-[100px] flex justify-center items-center">
      <div className="w-full max-w-[1240px] flex flex-col">
        <nav className="flex items-center border-2 px-5 py-4 rounded-md text-gray-500 mb-4">
          <Link to={`/all-categories`}>All Categories</Link>
        </nav>
        <AllCategory />
      </div>
    </section>
  );
}

export default Category;
