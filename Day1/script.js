
const APIKEY = "bf60b3261adddcd1bbd6637c66ac6e47"
const APIurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q="

const searchBox = document.querySelector('.search input') ;


const searchbtn = document.querySelector('.search button') ;
const weatherIcon = document.querySelector('.weather-icon');

async function checkWeather(city) {
    const response  = await fetch(APIurl+city+`&appid=${APIKEY} `);
   
      if(response.status == 404){
        //if there is any error it shows the error details 
        document.querySelector('.error').style.display = "block";
        document.querySelector('.weather').style.display = "none" ;
      }else{
        const data = await response.json() ;
        document.querySelector('.temp').innerHTML = Math.round(data.main.temp) + "°C" ;
    document.querySelector('.city').innerHTML = data.name;
    document.querySelector('.humidity').innerHTML = data.main.humidity +"%";
    document.querySelector('.wind-speed').innerHTML = data.wind.speed+" KM/H" ;

  // Changing the image according to the weather
    if(data.weather[0].main == "Cloud"){
        weatherIcon.src = "./assets/clouds.png"
    }else if(data.weather[0].main == "Clear"){
        weatherIcon.src = "./assets/clear.png"
    }else if(data.weather[0].main == "Mist"){
                  weatherIcon.src = "./assets/mist.png"
    }else if(data.weather[0].main == "Rain"){
                weatherIcon.src = "./assets/rain.png"
    }else if(data.weather[0].main == "Snow"){
            weatherIcon.src = "./assets/snow.png"
    }else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./assets/drizzle.png"
    }
    
    document.querySelector('.weather').style.display = "block" ;
     document.querySelector('.error').style.display = "none"
      }
   

}

searchbtn.addEventListener("click", ()=>{
        checkWeather(searchBox.value) 
    
    })

