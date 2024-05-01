import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import api from '../api/contacts';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import contactDetail from './ContactDetail';

import './App.css';
import EditContact from './EditContact';
import { ContactsCrudContextProvider } from '../context/ContactsCrudContext';

function App() {

  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className='ui container'>
    
        <Header></Header>
      <ContactsCrudContextProvider>
        <Routes>
          <Route 
          path="/" 
          element= {<ContactList/>}
          ></Route>

          <Route 
          path="/add" 
          element= {<AddContact/>}
          ></Route>

          <Route 
          path="/edit" 
          element={<EditContact/>}
          ></Route>

          <Route 
          path='/contact/:id' 
          element={<contactDetail />}>
          </Route>

        </Routes>
        </ContactsCrudContextProvider>
      
    </div>
  );
};

export default App;