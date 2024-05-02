import React from "react";
import KoboskyBlog from "./KobosProj/KoboskyBlog";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ChowAddress from "./ChowAddress";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<KoboskyBlog />} />
        <Route path="/address" element={<ChowAddress />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
