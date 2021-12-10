import logo from './logo.svg';
import './App.css';
import InstantHearthrate from './components/instantHearthrate';

function App() {
  const bpm = Math.floor(Math.random() * 160) + 40;
  return (
    <div className="App">
      <header className="App-header">
        <p>Monitoring de rythme cardiaque</p>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHearthrate data={bpm}/>
      </header>
    </div>
  );
}

export default App;
