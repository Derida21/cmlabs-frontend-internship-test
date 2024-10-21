import { IconToolsKitchen2 } from "@tabler/icons-react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full md:px-[60px] lg:px-[100px] py-6 flex justify-center items-center bg-neutral-50 fixed left-0 top-0 right-0 z-[99999]">
      <div className="w-full max-w-[1240px] flex justify-between items-center">
        <div className="flex gap-3 items-center">
          <IconToolsKitchen2 className="" />
          <h1 className="font-poppins font-semibold text-xl">mealpp</h1>
        </div>
        <div className="hidden md:flex gap-[30px] lg:gap-12">
          <Link to="/" className="nav-style">
            Home
          </Link>
          <Link to="/" className="nav-style">
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
    </nav>
  );
}

export default Navbar;
