import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home';
import Navbar from './Navbar';
import Contact from './Contact';
import Create from './Create';

const App = () => {
  return (
    <BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="content"> 
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/contact" element={<Contact />} />
         <Route path="/create"  element={<Create />} />

        </Routes>
        
      </div>
    </div>
    </BrowserRouter>
  );
}
export default App;