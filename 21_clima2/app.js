const verClima= async()=>{
    let apikey="47265cf81eeccf30779e2d35719350ed"
    let divRes=document.querySelector("#res"); 
if(navigator.geolocation){
    var success = async function (position){
    var latitud = position.coords.latitude,
        longitud = position.coords.longitude;
        console.log("Latitud: " + latitud + ", Longitud:" + longitud);
        let url= `http://api.openweathermap.org/data/2.5/weather?lat=${latitud}&lon=${longitud}&appid=${apikey}&units=metric&lang=es`;
        console.log(url);
        const api= await fetch(url);
        const data= await api.json();
        console.log(data);
        const urlIcon = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`
        divRes.innerHTML=`            
            <h1>${data.name.toUpperCase()}, MX</h1>
            <p>Temperatura: ${data.main.temp} °C</p>
            <img src="${urlIcon}">
            <h2>${data.weather[0].description.toUpperCase()}</h2>
            <p>MIN:${data.main.temp_min} °C</p>
            <p>MAX:${data.main.temp_max} °C</p>
            <p>PRESION: ${data.main.pressure} </p>
            <p>HUMEDAD: ${data.main.humidity} </p>
            <p>VELOCIDAD DEL VIENTO: ${data.wind.speed} m/s</p>
            
            `;
    }
    navigator.geolocation.getCurrentPosition(success, function(msg){
    console.error( msg );
    });
    }

}    