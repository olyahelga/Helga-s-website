import bear from './love-bear.gif';
import './App.scss';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>will u be my валентинка?</h2>
        <img src={bear} />
        <div className="buttonsContainer">
          <button>Yes</button>
          <button>No</button>
        </div>
      </header>
    </div>
  );
}

export default App;
