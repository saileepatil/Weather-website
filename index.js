const api_key = "285ac28e74c11d74e4bf7511127af1d6";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchEle = document.querySelector(".search input")
const btnEle = document.querySelector(".search button")
const weatherIcon = document.querySelector(".weather-icon")


async function checkWhether(city){
    const res = await fetch(apiUrl + city + `&appid=${api_key}`)

    console.log(data);

    if(res.status == 404){
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
   

    }else{
    var data = await res.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°c";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "Km/h";
        
        if(data.weather[0].main == "Clouds"){
            weatherIcon.src="./c2-Photoroom.png"
        
        }else if(data.weather[0].main == "Rain"){
            weatherIcon.src="./r1-Photoroom.png"
        
        }else if(data.weather[0].main == "Drizzle"){
            weatherIcon.src="./c3-Photoroom.png"
        
        }else if(data.weather[0].main == "Clear"){
            weatherIcon.src="./c1-Photoroom.png"
        
        }else if(data.weather[0].main == "Mist"){
            weatherIcon.src="./depoc4-Photoroom.png"
        }
      document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";

    }
    

}



btnEle.addEventListener("click" , () => {
      checkWhether(searchEle.value);

})
