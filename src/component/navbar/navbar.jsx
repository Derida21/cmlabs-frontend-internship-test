import { IconMenuDeep, IconToolsKitchen2 } from "@tabler/icons-react";
import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [toggle, setToggle] = useState(false);

  const handleToggle = () => {
    setToggle(!toggle);
  };

  return (
    <nav className="w-full px-[30px] md:px-[60px] lg:px-[100px] py-6 flex justify-center items-center bg-neutral-50 fixed left-0 top-0 right-0 z-[99999] shadow-md">
      <div className="w-full max-w-[1240px] flex justify-between items-center">
        <div className="flex gap-2 items-center">
          <IconToolsKitchen2 />
          <h1 className="font-poppins font-semibold text-xl ">mealapp</h1>
        </div>
        <div className="flex items-center justify-center">
          <IconMenuDeep className="md:hidden" onClick={handleToggle} />
          <div
            className={`${
              toggle ? "right-0" : "-right-[100%]"
            } absolute h-screen md:h-fit top-[100%] w-1/2 md:w-full md:static flex flex-col md:flex-row p-5 md:p-0 gap-[30px] lg:gap-12 bg-neutral-50 transition-all duration-1000`}
          >
            <Link to="/home" className="nav-style">
              Home
            </Link>
            <Link to="/all-categories" className="nav-style">
              All Categories
            </Link>
            <Link to="/" className="nav-style">
              Ingredients
            </Link>
            <Link to="/" className="nav-style">
              About Us
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
