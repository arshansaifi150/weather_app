const Your_Api = '88ba46bddacc78241d296f686d698336&units=metric';

const form = document.querySelector('form')



form.addEventListener('submit',(e)=>{
    e.preventDefault();
    let searchInput = document.querySelector('#search').value
    // console.log(searchInput)
    let weatherInfo;
    async function weatherData(){
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(searchInput)}&appid=${Your_Api}`)
            weatherInfo = await response.json()
            // console.log(weatherInfo.name);
            
            let cityName = document.querySelector('.city')
            
            let temp = document.querySelector('#temp')
            cityName.innerHTML = weatherInfo.
            name   
            
            let weatherIcon = document.querySelector('.weather-icon')
            
            // console.log(weatherInfo.weather[0].icon)
            let iconCode = weatherInfo.weather[0].icon
            const iconUrl = `http://openweathermap.org/img/wn/${iconCode}@2x.png`;
            console.log(iconCode)
            weatherIcon.src = iconUrl;


            temp.outerHTML = `<h1 id ='temp'>${Math.floor(weatherInfo.main.temp)}&deg;C</h1>`

            let humidity = document.querySelector('#percentage')
            humidity.innerHTML = `${weatherInfo.main.humidity}%`

            let windSpeed = document.querySelector('.speed')
            windSpeed.innerHTML = `${(weatherInfo.wind.speed).toFixed(1)} Km/hr`
        } catch (error) {
            alert(`Invalid info error`)
        }
    }

    weatherData()
    form.reset()

    
    

    
})
