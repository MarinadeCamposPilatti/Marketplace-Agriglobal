//components
import Header from './components/Header';
import Corpo from './components/Corpo';
import { BrowserRouter } from 'react-router-dom';


// styles / CSS
import './reset.css';
import './App.css';


function App() {
  return (
    <div className="App">
      <BrowserRouter >
      <Header />
      <Corpo />
      </BrowserRouter>
    </div>
  );
}

export default App;
