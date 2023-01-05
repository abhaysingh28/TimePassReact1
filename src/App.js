import React from "react";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";
import SingleMain from "./Components/SingleMain";
import Main from "./Components/Main";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/SingleMain/:id" element={<SingleMain />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
