import React, { Component } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material/';
import Grid2 from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';

class Medal extends Component {
    render() {
        return (
            <Grid2 sm={4} container spacing={0}>
                <Grid2 sm={12} style={{color:this.props.color}}>{this.props.name}</Grid2>
                <Grid2 sm={12}>
                    <IconButton style={{color: "white"}}  size="small"  variant="outlined" onClick={() => this.props.changeMedal(this.props.index, 1, this.props.type)}>
                        <ExpandLess />
                    </IconButton >
                </Grid2>
                <Grid2 sm={12}>{this.props.count}</Grid2>
                <Grid2 sm={12}>
                    <IconButton style={{color: "white"}} size="small"  variant="outlined" onClick={() => this.props.changeMedal(this.props.index, -1, this.props.type)}>
                        <ExpandMore />
                    </IconButton >
                </Grid2>
            </Grid2>
        );
    }
}

export default Medal
