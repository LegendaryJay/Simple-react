import React, { Component } from 'react';
import Medal from './medal';
import { Paper } from '@mui/material';
import Grid2 from '@mui/material/Unstable_Grid2';

class Country extends Component {
    render() {
        let medalNames = ['Bronze', 'Silver', 'Gold']
        let medalCounts = [this.props.country.bronze, this.props.country.silver, this.props.country.gold,]
        let medalRows = []
        let medalColors = ["#CD7F32","#C0C0C0", "#FFD700"]
        for (let i = 0; i < 3; i++) {
            medalRows.push(
                <Medal
                    key={this.props.country.name + i}
                    name={medalNames[i]}
                    index={this.props.country.id}
                    type={i}
                    count={medalCounts[i]}
                    changeMedal={this.props.changeMedal}
                    color = {medalColors[i]}
                />
            )
        }
        return (

            <Paper
                elevation={3}
                sx={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: 'DarkSlateGrey',
                    color: 'white'
                }}
            >
                <Grid2 container rowSpacing={2} columnSpacing={0}>
                    <Grid2 xs={12}>
                            <span>{this.props.country.name} [{this.props.country.bronze + this.props.country.silver + this.props.country.gold}]</span>
                            <hr/>
                    </Grid2>
                    <Grid2 xs={12}>

                            <Grid2 container>
                                {medalRows}
                            </Grid2>

                    </Grid2>
                </Grid2>
            </Paper >
        );
    }
}

export default Country
