import React, { Component } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navg from './Navg';
import axios from 'axios';
// import Intro from './pages/Intro';




class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      weather: ""

    }
  }


  componentDidMount() {
    axios({
      method: 'GET',
      url: 'http://api.openweathermap.org/data/2.5/weather?q=Riyadh&APPID=84966b399911fa6f30b114d1aea8c72c'
    })
      .then(res => {
        console.log(res.data.main.temp);

        const temp = res.data.main.temp - 273.15;
        const weather = `${temp} C`
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
        <Navg weather={this.state.weather} temp={this.state.temp} />
      </div>
    );
  }
}

export default App;


