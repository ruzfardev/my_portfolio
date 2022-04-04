import './App.css';
import 'weather-icons/css/weather-icons.min.css';
import 'weather-icons/css/weather-icons.css';
import Card from '../components/UI/Card';
import Header from '../components/Header';
import Weather from './Weather/Weather';
function App() {
  return (
    <div className='App'>
      <Card>
        <main>
          <Header />
          <Weather />
        </main>
      </Card>
    </div>
  );
}

export default App;
