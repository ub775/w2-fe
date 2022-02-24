import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Basic from './page/Basic';
import Premium from './page/Premium';
import Category from './page/Category';
import MyPage from './page/MyPage';
import Login from './page/Login';
import SignUp from './page/SignUp';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Basic />} />
        <Route exact path="/premium" element={<Premium />} />
        <Route exact path="/category" element={<Category />} />
        <Route exact path="/upload" element={<Basic />} />
        <Route exact path="/mypage" element={<MyPage />} />
        <Route exact path="/support" element={<Basic />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/signup" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
