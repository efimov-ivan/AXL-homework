import { Routes, Route, BrowserRouter } from "react-router-dom";
import Main from './Pages/Main';
import BookInfo from './Pages/BookInfo';
import {Container, Typography} from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import '@fontsource/roboto/400.css';
import './App.sass';


function App() {
  return (
    <BrowserRouter>
      <CssBaseline />
      <Container maxWidth="md">
        <Typography variant='h3' align='center'>AXL Homework</Typography>
        <Routes>
          <Route index path="/" element={<Main />} />
          <Route path="/book/:id" element={<BookInfo />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}

export default App;
