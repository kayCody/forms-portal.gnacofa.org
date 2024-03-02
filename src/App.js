import React from 'react';
import './assets/styles/index.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Register } from './pages';
import Auth from '../src/authentication/auth';


const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="web__content">
          <Routes>
            {/* <Route index element={<Register />} /> */}
            <Route index  element={<Register />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  )
}
export default App
