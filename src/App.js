import logo from './logo.svg';
import './App.css';
import InstantHearthrate from './components/instantHearthrate';
import { useEffect, useState } from 'react';

function randomBpm() {
  return Math.floor(Math.random() * 160) + 40;
}

function App() {
  const [bpms, setBpms] = useState([50]);

  useEffect(() => {
    setInterval(() => {
      setBpms((prev) => {
        return [...prev, randomBpm()]
    });
   }, 5000);
  }, []);

  const bpm = bpms[bpms.length - 1 ];

  console.log(bpms);

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
