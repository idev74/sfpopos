import logo from './logo.svg';
import './App.css';
import Title from './components/Title'

function App() {
  return (
    <div className="App">
      <Title />
      <img src={logo} alt=""/>
    </div>
  );
}

export default App;
