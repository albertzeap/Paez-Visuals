import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation} from "react-router-dom";
import { About } from "./components/About";
import { Background } from "./components/Background";
import { Contact } from "./components/Contact";
import { Gear } from "./components/Gear";
import { Home } from "./components/Home";
import { Services } from "./components/Services";
import { Work } from "./components/Work";
import { BottomNav } from "./components/BottomNav";

import { AnimatePresence } from 'framer-motion';

const Animated = () => {
  const location = useLocation();
  return (
      <AnimatePresence exitBeforeEnter >

          <Routes location={location} key={location.pathname}>
              <Route path="/" exact element={<Home/>}/>
              <Route path="/about" element={<About/>}/>
              <Route path="/work" element={<Work/>}/>
              <Route path="/services" element={<Services/>}/>
              {/* <Route path="/gear" element={<Gear/>}/> */}
              <Route path="/contact" element={<Contact/>}/>
          </Routes>
      </AnimatePresence>
  )
}



const App = () => {
  return (
    <Router>
      <div className="app">
        <Background/>
        <Animated/>
        <BottomNav/>
      </div>
    </Router>
    
  );
}

export default App;
