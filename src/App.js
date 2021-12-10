import logo from './logo.svg';
import './App.css';
import InstantHearthrate from './components/instantHearthrate';
import { useEffect, useState } from 'react';
import Graph from './components/graph';

function randomBpm() {
  return Math.floor(Math.random() * 160) + 40;
}

function App() {
  const [bpms, setBpms] = useState([50]);

  const d = new Date();
  let h = d.getHours();
  let m = d.getMinutes();
  let s = d.getSeconds();
  let time = h + 'h' + m + 'm' + s + 's';

  useEffect(() => {
    setInterval(() => {
      setBpms((prev) => {
        const bpm = {
          timestamp: time,
          hearthrate: randomBpm(),
        };
        return [...prev, bpm];
      });
    }, 5000);
  }, []);

  const bpm = bpms[bpms.length - 1];

  console.log(bpms);
  console.log(bpm.timestamp);

  return (
    <div className="App">
      <header className="App-header">
        <p>Monitoring de rythme cardiaque</p>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHearthrate data={bpm.hearthrate} />
        <Graph data={bpms} />
      </header>
    </div>
  );
}

export default App;
