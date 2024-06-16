import './App.css';

import React, { Component,useState} from 'react'
import Navbar from './Navbar';
import News from './News';
import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  const [Mode, setMode] = useState("light");
  const [info, setInfo] = useState("Enable Dark Mode");

  const toggleMode = () => {
    if (Mode === "light") {
      setMode("dark");
      setInfo("Enable Light Mode");
      document.body.style.backgroundColor = "black";
      document.body.style.color = "white";
    } else {
      setMode("light");
      setInfo("Enable Dark Mode");
      document.body.style.backgroundColor = "white";
      document.body.style.color = "black";
    }

  }
    return (
      <BrowserRouter>
        <div>
          <Navbar mode={Mode} toggleMode={toggleMode} info={info}/>
          <Routes>
            <Route path='/' element={<News pageSize={6} category="general" />}></Route>
            <Route path='/business' element={<News pageSize={6} category="business" />}></Route>
            <Route path='/entertainment' element={<News pageSize={6} category="entertainment" />}></Route>
            <Route path='/health' element={<News pageSize={6} category="health" />}></Route>
            <Route path='/science' element={<News pageSize={6} category="science" />}></Route>
            <Route path='/sports' element={<News pageSize={6} category="sports" />}></Route>
            <Route path='/technology' element={<News pageSize={6} category="technology" />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    )
  }

  export default App;