let p=fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m, relativehumidity_2m, windspeed_10m")
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    console.log(response.headers)
    return response.json()
}).then((val2)=>{
    console.log(val2) 
})
// only we  get in json or text in response.json response.text:in string form
// Request Headers 
// let res=fetch("https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&current_weather=true&hourly=temperature_2m, relativehumidity_2m, windspeed_10m",{headers:{Authentication:'secret'}})