import Navbar from '../src/Components/Navbar/Navbar'
import './App.css'
import Experience from './Components/Experience/Experience';
import Intro from './Components/Intro/Intro';
import Portfolio from './Components/Portfolio/Portfolio';
import Services from './Components/Services/Services';
import Works from './Components/Works/Works';
import Testonomials from './Components/Testonomial/Testonomial'
import Contact from './Components/Contact/Contacts'
import Footer from './Components/Footer/Footer'
import { themeContext } from './Context';
import { useContext } from 'react';


function App() {
  const theme = useContext(themeContext)
  const darkMode = theme.state.darkMode
  return (
    <div className="App"
    style={{
      background:darkMode ? 'black':'',
      color:darkMode ? 'white': ''
    }}
    >
      <Navbar />
      <Intro />
      <Services />
      <Experience />
      <Works />
      <Portfolio />
      <Testonomials />
      <Contact />
      <Footer />
      </div>
  );
}

export default App;
