import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Page from './routes/page/page';
import Home from './routes/home/home.jsx';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Page />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
