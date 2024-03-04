import React from 'react';
// Import BrowserRouter, Routes, and Route components from react-router-dom
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';
import Chat from './pages/Chat';
import Login from './pages/Login';
export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Ensure the element prop receives a React element (component instance) */}
        <Route path="/register" element={<Register />} />
        <Route path='/chat' element={<Chat/>}></Route>
        <Route path='/login' element={<Login/>}></Route>
      </Routes>
    </BrowserRouter>
  );
}
