import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function AllCategory() {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/categories.php"
    );
    setData(response.data.categories);
    console.log(response.data.categories);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="w-full grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-6">
      {data.map((item, index) => (
        <Link
          to={`/all-categories/${item.strCategory}`}
          key={index}
          style={{
            backgroundImage: `url('${item.strCategoryThumb}')`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
          className="relative overflow-hidden h-[150px] w-full flex items-center justify-center rounded-3xl hover:shadow-md hover:shadow-gray-700/20"
        >
          <div className="bg-gray-800/30 w-full h-full absolute"></div>
          <h1 className="z-10 font-poppins font-bold text-xl text-white">
            {item.strCategory}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default AllCategory;
