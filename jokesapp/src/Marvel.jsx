import React, { Component } from 'react';
import MD5 from 'md5';
import { Container } from 'react-bootstrap';
import Keys from './keys';
import Superhero from './Superhero';
//import { get } from 'http';

class Marvel extends Component {

    constructor(props){
        super(props);

        this.state = {
            superheros: [],
        }
    }

    componentDidMount(){
        if (!navigator.onLine) {
            if (localStorage.getItem('superheros') === null)
                this.setState({ joke: "loading..." })
            else
                this.setState({ joke: localStorage.getItem('superheros') });
        }

        const ts = encodeURIComponent("whatever");
        const hash = encodeURIComponent(MD5(ts + Keys.privateKey + Keys.publicKey));
        const apikey = encodeURIComponent(Keys.publicKey);

        fetch('https://gateway.marvel.com:443/v1/public/characters?ts='+ ts +'&hash='+ hash + '&apikey='+ apikey + '&orderBy=modified&limit=50')
        .then((response) => { return response.json() })
        .then((res) => {
            console.log(res.data.results);
            this.setState({ superheros : res.data.results})
        })
    }

    render(){
        return (
        <Container>
            <div className="row">
                <h1>Marvel heroes</h1>
            </div>
            <div>
                {this.state.superheros.map( (e,i) => <Superhero key={i} value={e}/>)}
            </div>
        </Container>
        );
    }
    
}

export default Marvel;