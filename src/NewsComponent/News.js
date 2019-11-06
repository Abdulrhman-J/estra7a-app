// import React, { Component } from 'react';
// import axios from 'axios'
// import { API_KEY } from '../api'
// import '../SoccerComponent/Soccer.css';

// class Soccer extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             all: []
//         }
//     }

//     componentWillMount() {
//         axios({
//             method: 'get',
//             url: 'https://api-football-v1.p.rapidapi.com/v2/fixtures/team/49/524',
//             headers: {
//                 "x-rapidapi-host": "api-football-v1.p.rapidapi.com",
//                 "x-rapidapi-key": API_KEY
//             }
//         })
//             .then(res => {
//                 const all = res.data.api.fixtures.map(fixture => {
//                     console.log(res.data.api.fixtures);
//                     return (

//                         <div>

//                             <div className='soccerCountainer'>
//                                 رقم الجولة
//     <p className='soccerDet'>{fixture.round}</p>
//                                 <br />
//                                 تاريخ المواجة
//     <p className='soccerDet'>{fixture.event_date}</p>
//                                 <br />
//                                 حالة المباراة
//     <p className='soccerDet'>{fixture.status}</p>
//                                 <br />
//                                 الملعب <p className='soccerDet'>{fixture.venue}</p>
//                                 <br />
//                                 المواجة  <p className='soccerDet'>{fixture.awayTeam.team_name} VS {fixture.homeTeam.team_name}</p>
//                                 <br />
//                                 <div className='soccerPic'>
//                                     <img src={fixture.awayTeam.logo} />
//                                     VS
//             <img src={fixture.homeTeam.logo} />
//                                 </div>
//                                 <br />
//                                 <br />
//                                 النتيجة
//     <p className='soccerDet'>{fixture.goalsAwayTeam} VS {fixture.goalsHomeTeam}</p>
//                             </div>
//                         </div>

//                     )

//                 })
//                 this.setState({
//                     all: all

//                 })
//             })
//             .catch(err => {
//                 console.log(err);

//             })
//     }

//     render() {
//         return (
//             <div>
//                 <h1> نشرة لاهم الاخبار </h1>
//             </div>
//         );
//     }
// }

// export default Soccer;
