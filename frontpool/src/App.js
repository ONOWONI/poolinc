import './App.css';
import Header from './components/header';
import Greeting from './components/greeting';
import Services from './components/whatwedo';
import Shop from './components/shop';

function App() {
  return (
    <div className="App">
      <Header />
      <Greeting  />
      <Services />
      <Shop />
    </div>
  );
}

export default App;
