import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { Context } from "./Context/Context";
import { AuthProvider } from "./Context/AuthProvider";


// Call make Server
makeServer();

ReactDOM.render(
  <AuthProvider>
     <Context>
    <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
  </Context>
  </AuthProvider>
 
  
  ,
  document.getElementById("root")
);
