import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Search from "./pages/Search/Search";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/search/:keyword" element={<Search />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
