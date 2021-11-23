import './App.css';
import Router from './components/Routes/Routes';
import { BrowserRouter } from 'react-router-dom';
import NavComponent from './components/Navbar/NavComponent';

function App() {
  return (
    <>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </>
  );
}

export default App;
