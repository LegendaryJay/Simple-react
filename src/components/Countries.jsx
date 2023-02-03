import React, { Component } from 'react';
import Country from './Country';
//import Grid2 from '@mui/material/Unstable_Grid2';
import { FixedSizeGrid as InfGrid } from 'react-window';

let cellWidth = 300
let cellHeight = 170
let cellSpace = 100


class Countries extends Component {
    state = { width: 0, height: 0 };

    render() {
        let columnCount = Math.max( Math.floor(this.state.width / (cellWidth + cellSpace)), 1)
        const cell = ({ columnIndex, rowIndex, style }) => (
            <div style={style}>
                <Country
                    key={this.props.countries[columnIndex * columnCount + rowIndex].id + this.props.countries[columnIndex * columnCount + rowIndex].name}
                    country={this.props.countries[columnIndex * columnCount + rowIndex]}
                    changeMedal={this.props.changeMedal}
                    height={cellHeight}
                    width={cellWidth}
                />
            </div>
        );
        let totalMedals = this.props.countries.reduce((sum, country) => country.gold + country.silver + country.bronze + sum, 0)
        return (
            <div>

                <h4>Total Medals = {totalMedals}</h4>
                <InfGrid
                    columnCount={columnCount}
                    columnWidth={cellWidth + cellSpace}
                    height={this.state.height - 100}
                    rowCount={Math.ceil(this.props.countries.length / columnCount)}
                    rowHeight={cellHeight + cellSpace}
                    width={this.state.width - 20}
                >
                    {cell}
                </InfGrid>
            </div>
        );
    }
    updateDimensions = () => {
        this.setState({ width: window.innerWidth, height: window.innerHeight });
    };
    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions()
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }
}

export default Countries
