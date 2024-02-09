import bear from './love-bear.gif';
import helga from './helga.jpeg';
import './App.scss';
import { useState } from 'react';


function App() {
  const [helgaVisible, setHelgaVisible] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });

  const handleHover = () => {
    const newX = Math.random() * (window.innerWidth - 100); // Adjust 100 to your button's width
    const newY = Math.random() * (window.innerHeight - 100); // Adjust 100 to your button's height
    setPosition({ x: newX, y: newY });
  };
  return (
    <div className="App">
      <header className="App-header">
        <span style={{ display: !helgaVisible ? 'block' : 'none' }}>
          <h2>will u be my валентинка?</h2>
          <img src={bear} />
          <div className="buttonsContainer">
            <button onClick={() => setHelgaVisible(true)}>Yes</button>
            <button style={position.x !== null ? {
              position: 'absolute',
              top: position.y + 'px',
              left: position.x + 'px',
            } : {}}
              onMouseEnter={handleHover} >No</button>
          </div>
        </span>
        <img style={{ display: helgaVisible ? 'block' : 'none' }} className='helgaImg' src={helga} />
      </header>
    </div>
  );
}

export default App;
