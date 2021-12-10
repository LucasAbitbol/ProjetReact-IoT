import logo from './logo.svg';
import './App.css';
import InstantHearthrate from './components/instantHearthrate';
import { useEffect, useState } from 'react';

function randomBpm() {
  return Math.floor(Math.random() * 160) + 40;
}

function App() {
  const [bpm, setBpm] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setBpm(randomBpm);
    }, 1000);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>Monitoring de rythme cardiaque</p>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHearthrate data={bpm} />
      </header>
    </div>
  );
}

export default App;
