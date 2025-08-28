import WeatherCoord from "./WeatherCoord";
import WeatherDescription from "./WeatherDescription";
import WeatherMain from "./WeatherMain";
import WeatherSys from "./WeatherSys";
import WeatherWind from "./WeatherWind";

export default interface WeatherResponse {
    coord: WeatherCoord;
    weather: WeatherDescription[];
    base: string;
    main: WeatherMain;
    visibility: number;
    wind: WeatherWind;
    clouds: {
        all: number;
    };
    dt: number;
    sys: WeatherSys;
    timezone: number;
    id: number;
    name: string;
    cod: number;
}