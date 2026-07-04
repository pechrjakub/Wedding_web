import './HomePage.css';
import Hero from '../../components/Hero';
import Journey from '../../components/Journey';
import Wedding_info from '../../components/wedddingInfoComponents/weddingInfo';
import Form from '../../components/Form';
import Countdown from '../../components/countdownComponents/Countdown';

function App() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Journey />
      <Wedding_info />
      <Form />
    </main>
  );
}

export default App;