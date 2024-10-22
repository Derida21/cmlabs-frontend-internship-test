import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./component/navbar/Navbar";
import Home from "./component/section/home/home.jsx";
import Category from "./component/section/all-categories/category.jsx";
import FilterCategory from "./component/section/all-categories/filter-category.jsx";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/all-categories" element={<Category />} />
          <Route
            path="/all-categories/:strCategory"
            element={<FilterCategory />}
          />
          <Route />
        </Routes>
      </Router>
    </>
  );
}

export default App;
