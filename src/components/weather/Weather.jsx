import "./weather.css";
import { useState, useEffect } from "react";

export default function Weather(props) {
    const [temperature, setTemperature] = useState(0);
    const [icon, setIcon] = useState("");

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '8e1a3c4200msh52f32f42215513fp1f5ed9jsn0cd5ca071458',
            'X-RapidAPI-Host': 'weatherbit-v1-mashape.p.rapidapi.com'
        }
    };

    useEffect(() => {
        fetch('https://weatherbit-v1-mashape.p.rapidapi.com/current?lon=26.096306&lat=44.439663', options)
            .then(response => response.json())
            .then(response => {
                setTemperature(response.data[0].app_temp);
                console.log(response.data);
                setIcon(`https://www.weatherbit.io/static/img/icons/${response.data[0].weather.icon}.png`);
            })
            .catch(err => console.error(err));
    }, []);

    return (<div className="weatherContainer">
            {props.children}
            <img alt="abc" src={icon} className="weatherIcon"></img>
            <div>Weather Bucharest: {temperature}°C</div>
        </div>
    )
};
