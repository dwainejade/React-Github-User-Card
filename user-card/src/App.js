import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import './App.css';


class App extends React.Component {
  constructor() {
    console.log("Constructor");
    super();
    this.state = {
      user: [],
      followers: []
    }
  }

  componentDidMount() {
    console.log('componentDidMount');
    axios.get('https://api.github.com/users/dwainejade')
      .then((res) => {
        this.setState({ user: res.data })
        console.log('user:', this.state)
      })
      .catch((err) => console.log('err', err))

      axios.get('https://api.github.com/users/dwainejade/followers')
      .then((res) => {
        this.setState({ followers: res.data })
        console.log('followers:', this.state)
      })
      .catch((err) => console.log('ferr', err))
  }



  componentDidUpdate(prevState, prevProps) {
   
  }


  render() {
    console.log('Render');

    return (
      <div className="App">
        <h1>Github Profile</h1>
        <UserCard user={this.state.user} />
        <h1>Followers:</h1>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
