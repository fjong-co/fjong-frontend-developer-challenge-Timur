import React, { Component } from 'react';
import axios from 'axios';


class App extends Component {
    state = {
        outfits: []
    }

    componentDidMount() {
        axios.get(`http://localhost:3010/outfits`)
            .then(res => {
                const outfits = res.data;
                this.setState({ outfits });
            })
    }

  render() {
    return (
      <div>
          <h1>Welcome to Fjong Frontend-developer challenge</h1>
          <p>Edit App.js to get started or find more info at <a href="https://github.com/fjong-co/fjong-frontend-developer-challenge">github.com/fjong-co/fjong-frontend-developer-challenge</a></p>
      </div>
    );
  }
}

export default App;
