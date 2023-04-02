import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Hero from './components/Hero';

function App() {
  const [isMobile, setIsMobile] = useState(false);

  const handleResize = () => {
    if(window.innerWidth < 720) {
      console.log(window.innerWidth)
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }

  useEffect(() => {
    handleResize();
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    console.log(isMobile)
  })

  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div className='App'>
      <Hero isMobile={isMobile} />
    </div>
  );
}

export default App;
