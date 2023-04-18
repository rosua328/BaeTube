import logo from "./logo.svg";
import "./App.css";
import { Outlet } from "react-router-dom";
import SearchBar from "./component/searchbar/SearchBar";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <SearchBar />
      <QueryClientProvider client={queryClient}>
        <Outlet />
      </QueryClientProvider>
    </>
  );
}

export default App;
