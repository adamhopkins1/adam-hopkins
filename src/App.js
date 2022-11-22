import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import Carousel from './components/Carousel';
import News from './components/News';
import Preview from './components/Preview';
import Review from './components/Review';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
      <Carousel />
      <News />
      <Preview />
      <Review />
    </div>
    </>
  );
}

export default App;
