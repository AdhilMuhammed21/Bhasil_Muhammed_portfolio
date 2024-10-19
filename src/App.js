import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav';
import Hero from './Components/Hero';
import About from './Components/About';
import Footer from './Components/Footer';
import Roadmap from './Components/Roadmap';

function App() {
  return (
    <div className="flex flex-col overflow-x-hidden bg-[#faf9ec]">
      <Nav />
      <Hero />
      <About />
      <Roadmap />
      <Footer />
    </div>
  );
}

export default App;
