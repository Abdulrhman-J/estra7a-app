import React from 'react';
import Home from './pages/Home';
import Contribution from './pages/Contribution';
import Location from './pages/Location';
import NeedsList from './pages/NeedsList';
import Weather from './WetherComponent/Weather';
import Soccer from './SoccerComponent/Soccer';
// import Wether from './WetherComponent/Wether';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

class Navg extends React.Component {
    render() {

        return (
            <>
                <Router>
                    <nav className="navbar navbar-expand-sm navbar-light bg-light">

                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active">
                                    <Link className="navbar-brand bg-light" to="/wether">{this.props.weather}</Link>
                                </li>
                                <li className="nav-item active">
                                    <Link className="nav-link" to="/">الرئيسية</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/contribution">القطة</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/needslist">لستة الاغراض</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/location">الموقع</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link" to="/soccer">مباريات اليوم</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link disabled" to="/soccer"> الاخبار </Link>
                                </li>
                                {/* <li className="nav-item">
                                    <Link className="nav-link disabled" to="/" tabIndex="-1" aria-disabled="true">Disabled</Link>
                                </li> */}
                            </ul>

                        </div>
                    </nav>
                    <div className="App">
                        <Route exact path='/' component={Home} />
                        <Route path='/wether' render={() => <Weather w={this.props.weather} t={this.props.temp} />} />
                        <Route path='/contribution' component={Contribution} />
                        <Route path='/needslist' component={NeedsList} />
                        <Route path='/location' component={Location} />
                        <Route path='/soccer' component={Soccer} />
                    </div>
                </Router>
            </>
        );
    }
}

export default Navg;