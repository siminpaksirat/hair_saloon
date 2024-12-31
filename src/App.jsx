import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./AppRoutes";

const App = () => {
  return (
    <>
        <React.StrictMode>
    <Router>
      <AppRoutes/>
    </Router>
    </React.StrictMode>
    </>
  )
}

export default App
