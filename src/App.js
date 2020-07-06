import React from 'react';
import Cards from './components/cards'; 
import Chart from './components/chart'; 
import CountryPicker from './components/countryPicker'; 
import { fetchData } from './api/index';
import image from './images/image.png';

import './app.css';

class App extends React.Component{
    
    state={
        data:{},
        country: '',
    }

    async componentDidMount(){
        const fetch_data = await fetchData();
        this.setState({ data: fetch_data })
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);
    
        this.setState({ data: fetchedData, country: country });
    }
    
    render(){
        const { data, country } = this.state;
        return(
            <div className="continer">
                <img className="image" src={image} alt="COVID-19" />
                <Cards data={data} />
                <CountryPicker  handleCountryChange={this.handleCountryChange} />
                <Chart data={data} country={country} />
            </div>
        )
    }
}

export default App;