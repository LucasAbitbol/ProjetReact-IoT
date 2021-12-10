import logo from './logo.svg';
import './App.css';
import InstantHearthrate from './components/instantHearthrate';

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <p>
        Monitoring de rythme cardiaque 
        </p>
        <img src={logo} className="App-logo" alt="logo" />
        <InstantHearthrate />
      </header>
    </div>
  );
}

export default App;
