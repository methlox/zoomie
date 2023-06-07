import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages";
import Login from "./pages/login";
import wallet from "./pages/wallet";
import Checkout from "./pages/checkout";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/login" element={<Login />} exact />
          <Route path="/wallet" element={<wallet />} exact
           />
          <Route path="/checkout" element={<Checkout />} exact />
        </Routes>
      </Router>
    </ChakraProvider>
  );
}

export default App;
