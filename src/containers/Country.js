import React, { Component } from 'react';
import FamousPlaces from './FamousPlaces';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            country_name: 'india'
        }
    }
    
    render() {
        return (
            <div>
                <h1>Country Component</h1>
                <FamousPlaces cname={this.state.country_name} />
            </div>
        );
    }
}

export default Country;