import React, { Component } from 'react';
import axios from 'axios'
import { API_KEY } from '../api'
import '../SoccerComponent/Soccer.css';

class Soccer extends Component {
    constructor(props) {
        super(props);

        this.state = {
            all: [],
            team: 0

        }
    }



    // to make the user change the request team from the api
    changeTeam = (e) => {
        this.setState({
            team: e.target.value
        });

        this.getFixture(e.target.value)
    }

    getFixture = (team) => {
        axios({
            method: 'get',
            // nased on the value on team vairable will print a spesific team as the id showen in the select tag below
            url: `https://api-football-v1.p.rapidapi.com/v2/fixtures/team/${team}/524`,
            headers: {
                "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
                "x-rapidapi-key": API_KEY
            }
        })
            .then(res => {
                const all = res.data.api.fixtures.map(fixture => {
                    return (

                        <div>
                            {/* only call the information from the api */}
                            <div className='soccerCountainer'>
                                رقم الجولة
                                <p className='soccerDet'>{fixture.round}</p>
                                <br />
                                تاريخ المواجة
                                <p className='soccerDet'>{fixture.event_date}</p>
                                <br />
                                حالة المباراة
                                 <p className='soccerDet'>{fixture.status}</p>
                                <br />
                                الملعب <p className='soccerDet'>{fixture.venue}</p>
                                <br />
                                المواجة  <p className='soccerDet'>{fixture.awayTeam.team_name} VS {fixture.homeTeam.team_name}</p>
                                <br />
                                <div className='soccerPic'>
                                    <img src={fixture.awayTeam.logo} />
                                    VS
                                    <img src={fixture.homeTeam.logo} />
                                </div>
                                <br />
                                <br />
                                النتيجة
                                 <p className='soccerDet'>{fixture.goalsAwayTeam} VS {fixture.goalsHomeTeam}</p>
                            </div>
                        </div>

                    )

                })
                this.setState({
                    all: all

                })
            })
            .catch(err => {
                console.log(err);

            })
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h1>مباريات الدوري الانجليزي الممتاز</h1>
                {/* <h3> أختر فريقك </h3> */}
                <select onChange={this.changeTeam} value={this.state.team}>
                    <option value="" selected > اختر فريقك</option>
                    {/* based on the value number will print the team details */}
                    <option value="49">تشلسي</option>
                    <option value="33">مانشستر يونايتد</option>
                    <option value="40">ليفربول</option>
                    <option value="50">مانشستر ستي</option>
                </select>

                {this.state.all}
            </div>
        );
    }
}

export default Soccer;
