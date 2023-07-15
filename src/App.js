
import Card from './components/UI/Card';
import Greeting from './components/Greeting/Greeting';
import WeatherInfo from './components/Weather-summary/WeatherInfo';
import Days from './components/Weather-summary/Days';
import AirQualityIndex from './components/Weather-summary/AirQualityIndex';
import SunIndex from './components/Weather-summary/SunIndex';
import WeatherDataProvider from './Store/WeatherDataProvider';
import './App.css';

function App() {
  
  return (
    <div className="App">
      <WeatherDataProvider>
     
      <div className='container1'>
        <Greeting/>
       
        <Days/>


        <AirQualityIndex/>

        <SunIndex/>
       
      </div>
      <div className='container2'>
       
         <WeatherInfo/>
         
       
        <Card>
          <p>Wind | 15 km/h</p>
          <p>Hum | 28 %</p>
        </Card>
        <Card>
          <p>Wind | 15 km/h</p>
          <p>Hum | 28 %</p>
        </Card>
      </div>
      </WeatherDataProvider>
    </div>
  );
}

export default App;
