import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer'

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden">
    <Nav/>
    <Hero/>
    <About/>
    <Footer/>
      
    </div>
  );
}

export default App;
