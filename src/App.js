import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Features from './components/Features';
import Section from './components/Section';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Features/>
      <Section/>
      <Testimonials/>
      <Footer/>
    </div>
  );
}

export default App;
