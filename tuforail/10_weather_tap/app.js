// api_key = 14171fc2b4c78a3080d5fa59454d608c
// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}



class WeatherApp{
    constructor(){
        this.API_KEY = `14171fc2b4c78a3080d5fa59454d608c`
        this.city = document.querySelector('.city')
        this.des = document.querySelector('.des')
        this.degree = document.querySelector('.degree span')
        this.icon = document.querySelector('.icon')
        this.init()
    }

    paintWeater(data){
        this.city.innerText = data.name
        this.des.innerText = date.weather [0].description
        this.degree.innerText = date.main.temp
    }

    async fetchDate(baseURL){
        const res = await fetch(baseURL)
        const data = await res.json()
        this.paintWeater(data)
    }

    init(){
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(Position => {
                // console.log(Position);

                const lat = Position.coords.latitude
                const lon = Position.coords.longitude

                
                const baseURL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${this.API_KEY}`

                this.fetchDate(baseURL)
            })
        }
    }
}

const weather = new WeatherApp()



