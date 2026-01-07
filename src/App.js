
import './App.css';
import { useContext } from 'react';
import { ThemeContext } from './context/ThemeContext';
import Home from './components/Home';
import NavBar from './components/NavBar';

function App() {
  const {theme} = useContext(ThemeContext);
  return (
    <div className={theme}>
    <NavBar/>
    <Home/>
    </div>
  );
}

export default App;
