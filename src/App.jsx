import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import './App.css'
import Page1 from './Components/Pages/Page1';
import Page2 from './Components/Pages/Page2';
import Page3 from './Components/Pages/page3';
import Page4 from './Components/Pages/page4';
import Page5 from './Components/Pages/page5';
import Page6 from './Components/Pages/page6';
import Login from './Components/User/Login';
import { Quiz } from './Components/Quiz/Quiz';
import Instruction from './Components/Quiz/Instruction';
import Feedback from './Components/Quiz/Feedback';



function App() {


  return (
    <Router>
    <Routes>
      <Route path="/" element={<Page1 />}>

      </Route>
       
      <Route path="/page2" element={<Page2/>}></Route>
      <Route path="/page3" element={<Page3/>}></Route>
      <Route path="/page4" element={<Page4/>}></Route>
      <Route path="/page5" element={<Page5/>}></Route>
      <Route path="/page6" element={<Page6/>}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/quiz" element={<Quiz/>}></Route>
      <Route path="/instruction" element={<Instruction/>}></Route>
      <Route path="/feedback" element={<Feedback/>}></Route>




      {/* Add more routes as needed */}
    </Routes>
   
  </Router>

  )
}

export default App
