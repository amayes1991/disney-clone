import React from 'react';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Detail from './components/Detail';
import Login from './components/Login';
import Detail2 from './components/Detail2';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <Router>
    <Header />
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/detail/:id"  element={<Detail />} />
    <Route path="/detail2/:id"  element={<Detail2 />} />
    <Route path="/home"  element={<Home />} />
    <Route path="/detail"  element={<Detail />} />

    </Routes>
    </Router>

{/* 
    <Home /> */}
    </div>
  );
}

export default App;
