import axios from 'axios';


const url = "https://covid19.mathdro.id/api";

export const fetchData = async () =>{
    try {
        
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(url)
        const modifiedData = { confirmed, recovered, deaths, lastUpdate }
        
        return modifiedData;
        
    } catch (err) {
        console.log("err data", err);
    }
}


export const fetchDataDaily = async () =>{
    try {

        const { data } = await axios.get(`${url}/daily`);
        return data.map(({ confirmed, deaths, reportDate: date }) => ({ confirmed: confirmed.total, deaths: deaths.total, date }));

    } catch (err) {
        console.log("err daily data", err);
    }
}

export const fetchCountries = async () => {
    try {
        
      const { data: { countries } } = await axios.get(`${url}/countries`);
      return countries.map((country) => country.name);

    } catch (error) {
      return error;
    }
  };