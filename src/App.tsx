import React from 'react';
import '@fontsource/roboto/400.css';
import './App.sass';
import CssBaseline from '@mui/material/CssBaseline';
import {Container} from '@mui/material';
import { Routes, Route } from "react-router-dom";
import Main from './Pages/Main';
import BookInfo from './Pages/BookInfo';

function App() {
  return (
    <>
      <CssBaseline />
      <Container maxWidth="md">
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/book/:id" element={<BookInfo />} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
