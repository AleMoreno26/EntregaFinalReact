import React from 'react';
import ItemListContainer from './components/itemListContainer/ItemListContainer';
import ItemDetailContainer from './components/itemDetailContainer/ItemDetailContainer';
import NavBar from './components/navbar/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter, Route, Routes } from 'react-router-dom';



function App() {

  return (
    <>
      <BrowserRouter>
        <NavBar />

        <Routes>
        <Route exact path="/" element={<ItemListContainer/>} />
        <Route exact path="/item/:id" element={<ItemDetailContainer />} />
        <Route exact path="/productos/:categoria" element= {<ItemListContainer />}/>
        </Routes>

      </BrowserRouter>
    </>
  );
}


export default App;
