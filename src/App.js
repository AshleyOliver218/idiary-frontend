import './App.css';
import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'
import NavBar from './components/NavBar'
import HomePage from './pages/HomePage';


function App() {
  return (
    <div className="App">
      <NavBar/>
    <Router>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
      </Routes>
    </Router>
    </div>
  );
}

export default App;
