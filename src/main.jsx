import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import WalletContextProvider from "./components/Premium/WalletContextProvider.jsx";
// import './index.css'

ReactDOM.createRoot(document.getElementById("root")).render(
  <WalletContextProvider>
    <App />
  </WalletContextProvider>
);

// :root {
//   font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
//   line-height: 1.5;
//   font-weight: 400;

//   color-scheme: light dark;
//   color: rgba(255, 255, 255, 0.87);
//   background-color: #242424;

//   font-synthesis: none;
//   text-rendering: optimizeLegibility;
//   -webkit-font-smoothing: antialiased;
//   -moz-osx-font-smoothing: grayscale;
//   -webkit-text-size-adjust: 100%;
// }
