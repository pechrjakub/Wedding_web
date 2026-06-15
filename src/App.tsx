import './App.css';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Wedding_info from './components/wedddingInfoComponents/weddingInfo';
import Form from './components/Form';
import Countdown from './components/countdownComponents/Countdown';

function App() {
  return (
    <main className="page">
      <Hero />
      <Countdown />
      <Journey />
      <Wedding_info />
      <Form />
    </main>
  );
}

export default App;