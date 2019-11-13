import React, { Component } from 'react';
import { Col, Card } from 'react-bootstrap';
class Superhero extends Component {

    constructor(props){
        super(props);
        console.log(this.props.value.thumbnail.path);
        this.state = {
            "name": this.props.value.name,
            "description": this.props.value.description,
            "detail": this.props.value.urls[0].url,
            "wiki": this.props.value.urls[1].url
        }
    }

    render(){
        return(
            <div className="row white">
                <h3>{this.state.name}</h3>
                <br></br>
                <p>{this.state.description}</p>
                <br></br>
                <a href={this.state.detail}> Perfil completo</a> 
                <a href={this.state.wiki}> Wiki </a> 
            </div>
        );
    }
}

export default Superhero;