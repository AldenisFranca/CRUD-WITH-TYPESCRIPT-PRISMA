import React from "react";
import Rotas from "./Route/Route";
import { BrowserRouter } from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <Rotas />
    </BrowserRouter>
  );
}
