import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import { Home } from './home';
import Header from './components/header';
import Footer from './components/footer';
function App() {
  return (
    <Router>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
      </Routes>
      <Footer/>
    </Router>
   
  );
}

export default App;
