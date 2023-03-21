import React, {Component} from 'react';
import './App.css';
import ViewMode from '../components/ViewMode/ViewMode';
import Subscribe from '../components/Subscribe/Subscribe';
import Profile from '../components/Profile/Profile';
import HomePage from '../components/HomePage/HomePage';

class App extends Component {
  constructor(){
    super();
    this.state = {
      route: "home",
      profile: {}
    }
  }

  onRouteChange = route => {
    this.setState({route: route});
    window.scrollTo(0,0);
  }

  onProfile = round => this.setState({profile: round})

  render(){
    const { route, profile } = this.state;
    return (
      <div className='app'>
        <ViewMode />
        {
          route === 'home'?(
              <HomePage 
                onRouteChange = {this.onRouteChange}
                onProfile={this.onProfile} />
            ):(
              route === 'profile'?(
                <Profile
                  onRouteChange = {this.onRouteChange}
                  onProfile={this.onProfile}
                  profile={profile} />
              ):(
                <Subscribe
                  onRouteChange = {this.onRouteChange}
                  onProfile={this.onProfile}
                  profile={profile} />
              )
            )
        }
      </div>
    );
  }
}

export default App;

