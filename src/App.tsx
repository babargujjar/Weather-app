import Home from './pages/Home/Home';
import WeatherDetails from './pages/weatherDetails/WeatherDetails';
import { Route,Routes } from 'react-router-dom';


function App() {





  return (
    <div className=" lg:w-full w-screen h-screen ">
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/weather' element={<WeatherDetails />} />
      </Routes>
     
    </div>
  );
}

export default App;
