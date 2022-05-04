import logo from './logo.svg';
import './App.css';
import navbar from './Components/NavBar/NavBar';

function App() {
  return (
    <div className="App">
      <header>

        <navbar/>
        
      </header>

      <itemList greeting='contenedor'/>
    </div>
  );
}

export default App;
