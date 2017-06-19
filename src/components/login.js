import React, { Component } from 'react';

let CLIENT_ID = 'dc192dafed7149819ae38d006e45102a';
let REDIREC_URI = 'https://sokal21.github.io/callback/';
let scopes= ['user-read-private','user-read-email','playlist-modify-private','playlist-modify-public', 'playlist-read-private'];

function getURL() {
  return (
    'https://accounts.spotify.com/authorize?client_id=' +
    CLIENT_ID + '&response_type=token&redirect_uri=' +  encodeURIComponent(REDIREC_URI) +
    '&scope=' +  encodeURIComponent(scopes.join(' '))
  );
}

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
  }

  login() {
    let url = getURL();
    window.location = url;
  }

  render() {
    return (
      <div className="Login">
        <h1 className = "WelcomeTitle">Welcome to Spotify-assistant!</h1>
        <p>Log in with your Spotify account to start the app.</p>
        <button onClick={this.login} className="LoginButton">LOGIN</button>
      </div>
    );
  }
}

export default Login
