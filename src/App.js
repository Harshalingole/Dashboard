import "./App.css";
import Home from "./Pages/Home/Home";
import { Routes, Route } from "react-router-dom";
import CategoryPage from "./Pages/Category/CategoryPage";
import Reports from "./Pages/Reports/Reports";
import Employee from "./Pages/Employee/Employee";

function App() {
  return (
    <>
    <Routes>
      <Route path='/' element={<Home />}>
        <Route index element={<CategoryPage />} />
        <Route path='/category' element={<CategoryPage />} />
        <Route path='/report' element={<Reports />} />
        <Route path='/employee' element={<Employee /> } />
      </Route>
    </Routes>
    </>
  );
}
export default App;
