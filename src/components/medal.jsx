import React, { Component } from 'react';
import { ExpandLess, ExpandMore } from '@mui/icons-material/';
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

class Medal extends Component {
    render() {
        return (
            <div>
                <Typography variant="subtitle1" sm={12} style={{ color: this.props.color }}>{this.props.name}</Typography>
                <ExpandLess style={{ color: 'white' }} onClick={() => this.props.changeMedal(this.props.index, 1, this.props.type)}>
                    <RemoveCircleOutlineIcon />
                </ExpandLess>
                <Typography variant="subtitle1">{this.props.count}</Typography>
                <ExpandMore style={{ color: 'white' }} onClick={() => this.props.changeMedal(this.props.index, -1, this.props.type)}>
                    <AddCircleOutlineIcon />
                </ExpandMore>
            </div>
        );
    }
}

export default Medal
