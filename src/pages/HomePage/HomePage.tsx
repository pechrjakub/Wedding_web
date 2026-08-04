import './HomePage.css';
import Hero from '../../components/Hero';
import Journey from '../../components/journeyComponents/Journey';
import Form from '../../components/formComponents/Form';
import Countdown from '../../components/countdownComponents/Countdown';
import Dresscode from '../../components/dresscodeComponents/Dresscode';
import Schedule from '../../components/scheduleComponents/Schedule';
import Place from '../../components/Place';
import Map from '../../components/Map';
import FAQ from '../../components/FAQComponents/FAQ';


function App() {
  return (
    <main>
      <Hero />
      <Countdown />
      <Journey />
      <Place />
      <Map />
      <Dresscode />
      <Schedule />
      <FAQ />
      <Form />
    </main>
  );
}

export default App;