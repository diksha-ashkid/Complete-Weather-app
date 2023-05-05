import React, {useState,useEffect} from 'react';
import axios from 'axios';


function App() {
  const [data, setData] = useState({})
  const [location, setLocation] = useState('')

  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=2bbe8e0344507f77753e3e2f4d8421b1`


  useEffect(() => {
    async function getAllWeather() {
      try{
        const location = await axios.get("http://127.0.0.1:8000/api/weather/")
        console.log(location.data);
        setLocation(location.data);
      } catch (error) {
        console.log(error);
      }
  
  }
  getAllWeather();
  },[])
  
  const searchLocation = (event) => {
    if (event.key === 'Enter') {
      axios.get(url).then((response) => {
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
  }





  return (
    <div className="app">
       
      <div className="searchbar">
      
        <input
          onChange={event => setLocation(event.target.value)}
          onKeyDown ={searchLocation}
          placeholder='Search for a city...'
          type="text" />
      </div>
      <div className = "container">

        <div className = "top"></div>
            <div className = "location">
              <p>{data.name}</p>
            </div>
            <div classname="temp">
            {data.main ? <h1>{data.main.temp.toFixed()}°C</h1> : null}
            </div>
            <div className = "description">
            {data.weather ? <p>{data.weather[0].main}</p> : null}
            </div>
            <div className = "icon">
            {data.weather ? <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`} alt="weather icon"/> : null}
            </div>
        </div>
        
        {data.name !== undefined &&
          <div className = "bottom">
              <div className= "feels-like">
              {data.main ? <p className='bold'>{data.main.feels_like.toFixed()}°C</p> : null}
              <p>Feels Like</p>
              </div>
              <div className= "humidity">
                {data.main ? <p className='bold'>{data.main.humidity}%</p> : null}
                <p>Humidity</p>
              </div>
              <div className= "wind">
              {data.wind ? <p className='bold'>{data.wind.speed.toFixed()} MPH</p> : null}
                <p>Wind Speed</p>
          </div>
         
      </div>  
       }     
    </div>
  );
}

export default App;
