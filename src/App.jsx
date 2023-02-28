import React from "react";
import { Routes, Route } from "react-router-dom";
import { GamePage, HomePage, OrderPage } from "./pages";
import { Header } from "./components";

const App = () => {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/app/:title" element={<GamePage />} />
        <Route path="/order" element={<OrderPage />} />
      </Routes>
    </div>
  );
};

export default App;
