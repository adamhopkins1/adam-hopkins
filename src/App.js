import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import News from './components/News';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Carousel />
      <News />
    </div>
    </>
  );
}

export default App;
