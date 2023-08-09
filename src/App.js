import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navigation from "./Navigation";
import TextForm from "./TextForm";
import { useState } from "react";
import AlertMess from "./AlertMess";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./About";

function App() {

  const [mode, setMode] = useState("light");
  
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      document.body.style.color = "white";
      message("Dark mode enabled", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
      message("Light mode enabled", "success");
    }
  };

  const [alert, setalert] = useState(null);

  const message = (mesg, type) => {
    setalert({
      mesg: mesg,
      type: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const handleBlue = () => {
    document.body.style.backgroundColor = "#090979";
    document.body.style.color = "white";
    message("Blue mode enabled", "success");
    setMode("#02021e");
  };

  return (
    <div>
      <Router>
        <Navigation
          appName="Text Utils"
          about="About Us"
          mode={mode}
          handletoggleMode={toggleMode}
          handleBlue={handleBlue}
        />
        <AlertMess alert={alert} />
        <Routes>
          <Route
            path="/"
            element={
              <TextForm
                heading="Enter the text to Analyze below"
                mode={mode}
                message={message}
              />
            }
          />

          <Route path="/About" element={<About mode={mode} />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
