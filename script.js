const searchForm = document.querySelector('.input-div')
const cityInput = document.getElementById('country_input')
const county = document.getElementById('country')
const image = document.getElementById('image')
const stateName = document.getElementById('city-text')
const temp = document.getElementById('temp-text')
const description = document.getElementById('description')
const minTemp = document.getElementById('tempmin')
const maxTemp = document.getElementById('tempmax')
const humidity = document.getElementById('humid')
const seaLevel= document.getElementById('sl')
const windSpeed = document.getElementById('wind')

const getWeatherData = async(cityName) => {
    try {
    const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=c291bf989fabf5f87cd5f045a3ff5ab4&units=metric`)
    const data = await res.json() 
    console.log(data);

    stateName.textContent = data.name
    county.textContent = data.sys.country
    description.textContent = data.weather[0].description
    temp.textContent = data.main.temp + "℃"
    minTemp.textContent = " " + data.main.temp_min + "℃"
    maxTemp.textContent = " " + data.main.temp_max + "℃"
    pressure.textContent = " " + data.main.pressure + "Pa"
    humidity.textContent = " " + data.main.humidity 
    seaLevel.textContent = " " + data.main.sea_level
    windSpeed.textContent = " " + data.wind.speed + "mph"
   const icon = data.weather[0].icon
    image.setAttribute("src",  `http://openweathermap.org/img/wn/${icon}@2x.png`)
    // weatherImages.forEach((img) => {
    //     img.setAttribute(
    //      'src',
         
    //      `http://openweathermap.org/img/wn/${icon}@2x.png`
    //     ) 
    //    });
    } catch (error) {
        console.log(error)
    }
   
}
searchForm.addEventListener('submit', function(e){
    e.preventDefault()
    getWeatherData(cityInput.value)
})