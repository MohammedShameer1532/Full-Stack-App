import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Create from './component/Create';
import Update from './component/Update';
import Read from './component/Read';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Create />}></Route>
          <Route path='/read' element={<Read />}></Route>
          <Route path='/update/:id' element={<Update />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
