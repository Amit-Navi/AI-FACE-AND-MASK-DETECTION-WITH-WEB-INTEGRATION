import Login from "./Components/Login"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Home from "./Components/Home";
import Upload from "./Components/Upload"
import Output from "./Components/Output";
import Mask from "./Components/Mask";

function App() {
   return (
      <div className="App">
         <Router>
            <Routes>
               <Route path="/" element={<Login />} />
               <Route path="Home" element={<Home />} />
               <Route path="Upload" element={<Upload />} />
               <Route path="Output" element={<Output />} />
               <Route path="Mask" element={<Mask />} />
            </Routes>
         </Router>
      </div>
   );
};
export default App; 