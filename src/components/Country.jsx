import React, { Component } from 'react';
import Medal from './medal';
import Box from '@mui/material/Box';
import { Divider, Paper } from '@mui/material';
import Typography from "@material-ui/core/Typography";




class Country extends Component {
    render() {
        let medalNames = ['Bronze', 'Silver', 'Gold']
        let medalCounts = [this.props.country?.bronze??0, this.props.country?.silver??0, this.props.country?.gold??0,]
        let medalRows = []
        let medalColors = ["#CD7F32", "#C0C0C0", "#FFD700"]
        for (let i = 0; i < 3; i++) {
            medalRows.push(

                <Medal
                    key={(this.props.id + "-" + i)}
                    name={medalNames[i]}
                    index={this.props.country?.id}
                    type={i}
                    count={medalCounts[i]??0}
                    changeMedal={this.props.changeMedal}
                    color={medalColors[i]}
                />
            )
        }
        return (

            <Paper
                elevation={4}
                sx={{
                    width: this.props.width,
                    height: this.props.height,
                    backgroundColor: 'DarkSlateGrey',
                    color: 'white'
                }}
            >
                <Typography variant="subtitle1" align="center" elevation={3} p={2}>
                    {this.props.country?.name} {(this.props.country?.bronze??0) + (this.props.country?.silver??0) + (this.props.country?.gold??0)}
                </Typography>
                <Box
                    textAlign="center"
                    display='flex'
                    justifyContent='space-around'
                    divider={<Divider orientation="vertical" flexItem />}
                    spacing={2}
                    m={1}
                >
                    {medalRows}
                </Box>


            </Paper >
        );
    }
}

export default Country
