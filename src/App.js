// import logo from './logo.svg';
import "./App.css";
import About from "./Components/About";
import Alert from "./Components/Alert";
import Navbar from "./Components/Navbar";
import TextForm from "./Components/TextForm";
import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [darkMode, setdarkMode] = useState(false);
  let appstyle = {};
  if (darkMode === true) {
    appstyle = {
      color: "white",
      backgroundColor: "#292929",
      minHeight: "100vh",
    };
  } else {
    appstyle = {
      color: "black",
      backgroundColor: "white",
    };
  }
  const [alert, setAlert] = useState(null);

  return (
    <Router>
      <div style={appstyle}>
        <Navbar title="TextUtils" darkMode={darkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route
              exact
              path="/"
              element={
                <TextForm
                  darkMode={darkMode}
                  setdarkMode={setdarkMode}
                  setAlert={setAlert}
                />
              }
            />
            <Route  exact path="/about" element={<About darkMode={darkMode} />} />
           
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
