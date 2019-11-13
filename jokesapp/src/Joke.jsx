import React, { Component } from 'react';
class Joke extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
          joke: "",
        };
    
    }

    componentDidMount(){
        if (!navigator.onLine) {
            if (localStorage.getItem('joke') === null)
                this.setState({ joke: "loading..." })
            else
                this.setState({ joke: localStorage.getItem('joke') });
        }

        fetch('https://api.chucknorris.io/jokes/random')
        .then((response) => {return response.json()})
        .then(data => {
            this.setState({ joke: data.value })
            localStorage.setItem('joke', data.value);
        })
    }

    render(){
        return( <div>
                    <h1>{this.state.joke}</h1>
                </div>
              );
    }
    
}

export default Joke;