// App.jsx
import React  from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Timer from "./timer"; // Import Timer component  
import GlobalBackground from "./globalbackground"; // Import GlobalBackground component
// ScrollToTop component - must be inside Router
import Login from "./login"; // Import Login component

const HomePage = () => (
  <>
    <Login />
  </>
);

function App() {
  return (
    <Router>
      <GlobalBackground />
      <div className="App">
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/timer" element={<Timer />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;