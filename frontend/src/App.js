
import './App.css';
import {BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Home from './components/Home';
import Signup from './components/Signup';

function App() {
  return (
  <>
      <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login/>}  />
          <Route path="/signup" element={<Signup/>}  />
          <Route path="/" element={<Home/>}  />
        </Routes>
      </BrowserRouter>


      </div>

  </>
  );
}

export default App;
