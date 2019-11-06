import React, { Component } from 'react';
import './App.css';
// call the bootstrab library
import 'bootstrap/dist/css/bootstrap.min.css';
import Navg from './Navg';
// call the library to use it
import axios from 'axios';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: ""

    }
  }

  // this will run the code once after the render in ignore it
  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=84966b399911fa6f30b114d1aea8c72c'
    })
      .then(res => {
        console.log(res.data.main.temp);
        //  translate the degree to celecuse
        const temp = res.data.main.temp - 273.15;
        const weather = `${temp} C`
        //  to make it useable
        this.setState({
          weather: weather,
          temp: temp
        })
      })
      .catch(err => {
        console.log(err);

      })
  }

  render() {
    return (
      <div >
        {/* pass the function to the navbar */}
        <Navg weather={this.state.weather} temp={this.state.temp} />
      </div>
    );
  }
}

export default App;


