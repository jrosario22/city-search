import React from 'react';
import axios from 'axios';

class City extends React.Component {
    constructor(props) {
        super(props);
        this.state = { value: this.props }; //Tag for city
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //For when input is being placed
    handleChange(event) {
        this.setState({ value: event.target.value.toUpperCase() });
    }

    //For when search field is empty 
    handleSubmit(event) {
        event.preventDefault();
    }

    search = () => {
        console.log(this.state)
        axios.get('http://ctp-zip-api.herokuapp.com/city/' + this.state.value)
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                //Error Text
            })
    }

    render() {
        return (
            <div>
                <h2>Enter the name of a city below:</h2>
                <input type="search" placeholder="City" value={this.state.value} onChange={this.handleChange}></input>
                <input type="submit" onClick={this.search}></input>
            </div>
        )
    }
}

export default City;