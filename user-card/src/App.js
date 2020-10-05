import React from 'react';
import axios from 'axios';
import UserCard from './components/UserCard';
import Followers from './components/Followers';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      user: [],
      followers: [],
      formInput: null,
      searchResult: null
    }

  }

  componentDidMount() {
    console.log("component did mount")
    axios.get(`https://api.github.com/users/dwainejade`)
      .then((res) => {
        this.setState({ user: res.data })
      })
      .catch((err) => console.log('err', err))

    axios.get(`https://api.github.com/users/dwainejade/followers`)
      .then((res) => {
        this.setState({ followers: res.data })
      })
      .catch((err) => console.log('mount', err))
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.formInput !== this.state.formInput) {
      axios.get(`https://api.github.com/users/${this.state.formInput}`)
        .then((res) => {
          this.setState({
            ...this.state,
            searchResult: res.data
          });
        }).catch(err => {
          console.log(err)
        })
    }

  }

  mySubmitHandler = (e) => {
    e.preDefault();
    console.log("search submitted")
    axios.get(`https://api.github.com/users/${this.state.formInput}`)
      .then((res) => {
        this.setState({ user: res.data })
      })
      .catch((err) => {
        console.log("search", err)
      })
  }
  myChangeHandler = (e) => {
    this.setState({ formInput: e.target.value });
  }

  render() {
    return (
      <div className="App">
        <h1>Github Profile</h1>
        <form onSubmit={this.mySubmitHandler}>
          <input
            type='text'
            className="p-1"
            placeholder="Search user"
            onChange={this.myChangeHandler}
          />
          <input
            className="btn btn-primary btn-sm m-2"
            type='submit'
          />
        </form>
        <UserCard user={this.state.user} />
        <h1>Followers:</h1>
        <Followers followers={this.state.followers} />
      </div>
    );
  }
}

export default App;