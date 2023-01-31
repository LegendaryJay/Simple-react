import React, { Component } from 'react';
import { Button } from '@mui/material';

class Country extends Component {
    render() {
        return (
            <div>
                <hr />
                <h5>{this.props.country.name}</h5>
                
                <span> Gold: {this.props.country.goldMedalCount} </span>
                <div>
                <Button variant="contained" onClick={() => this.props.changeGold(this.props.country.id, -1)}>-</Button>
                <Button variant="contained" onClick={() => this.props.changeGold(this.props.country.id, 1)}>+</Button>
                </div>

                <hr />
            </div>
        );
    }
}

export default Country
