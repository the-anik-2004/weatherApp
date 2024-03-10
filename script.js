const apiKey="b86b0eb0676f3631b5a67ee4c798e32a";
const apiUrl="https://api.openweathermap.org/data/2.5/weather?appid=";

const search_box=document.querySelector(".search input");
const search_btn =document.querySelector(".search button");
const weather_icon=document.querySelector(".weather_icon");


function fahrenheitToCelsius(fahrenheit) {
    const celsius = Math.round(fahrenheit-273);
    return celsius;
  }

checkWeather=async (city)=>{
    const response=await fetch(`${apiUrl}${apiKey}&q=${city}`);
    console.log(response);

    if(response.status==404)
    {
        document.querySelector(".error").style.display="block";
    }else{

        const data =await response.json();
        const tem=data.main.temp;
        const wDes=data.weather[0].main;
        console.log(data);
        document.querySelector(".city").innerHTML=data.name;
        document.querySelector(".temp").innerHTML=fahrenheitToCelsius(tem)+"°C";
        document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
        document.querySelector(".wind").innerHTML=data.wind.speed+"km/h";
        document.querySelector(".weather").style.display="block";
        document.querySelector(".weather-description").innerHTML=wDes;

        ;
        console.log(wDes)
        switch (wDes) {
            case "Clouds":
                document.getElementById("wi").src='./images/clouds.png';
                break;
            case "Clear":
                document.getElementById("wi").src='./images/clear.png';
                break;

            case "Drizzle":
                document.getElementById("wi").src='./images/drizzle.png';
                break;
            case "Rain":
                document.getElementById("wi").src='./images/rain.png';
                break;
            case "Mist":
                document.getElementById("wi").src='./images/mist.png';
                break;
            case "Snow":
                document.getElementById("wi").src='./images/snow.png';
                break;
            default:
                break;
        }
      
    }
}

search_btn.addEventListener("click",()=>checkWeather(search_box.value));