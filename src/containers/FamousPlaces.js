import React, { Component } from 'react';

class FamousPlaces extends Component {
    render() {
        return (
            <div>
                <h1>Famous Places Component</h1>
                <h2>{this.props.cname === 'india' ? 'Taj Mahel' : 'ABC'}</h2>
            </div>
        );
    }
}

export default FamousPlaces;