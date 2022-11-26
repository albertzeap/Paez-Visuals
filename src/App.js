import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Gear } from "./components/Gear";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Work } from "./components/Work";



const App = () => {
  return (
    <Router>
      <div className="app">
        <Background/>
      </div>

      <Routes>
        <Route path="/" exact element={<Home/>}/>
        <Route path="/about" exact element={<About/>}/>
        <Route path="/work" element={<Work/>}/>
        <Route path="/services" element={<Services/>}/>
        <Route path="/gear" element={<Gear/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>

    </Router>
    
  );
}

export default App;
