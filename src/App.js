import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import SearchBar from "./component/searchbar/SearchBar";

function App() {
  return (
    <>
      <SearchBar />
      <Outlet />
    </>
  );
}

export default App;
