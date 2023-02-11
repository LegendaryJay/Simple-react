import React, { Component } from 'react';
import Country from './Country';
import { FixedSizeGrid as InfGrid } from 'react-window';
import AddCountryModal from "./AddCountryModal";
import { Stack, Typography } from '@mui/material';

let cellWidth = 300
let cellHeight = 180
let cellSpace = 100


class Countries extends Component {
    state = { width: 0, height: 0 };
    render() {
        let columnCount = Math.max(Math.floor(this.state.width / (cellWidth + cellSpace)), 1)
        const cell = ({ columnIndex, rowIndex, style }) => (
            <div style={style}>
                <Country
                    key={"Country" + (rowIndex * columnCount + columnIndex)}
                    id = {rowIndex * columnCount + columnIndex}
                    country={this.props.countries?.[rowIndex * columnCount + columnIndex]}
                    changeMedal={this.props.changeMedal}
                    height={cellHeight}
                    width={cellWidth}
                />
            </div>
        );
        let totalMedals = this.props.countries.reduce((sum, country) => country?.gold + country?.silver + country?.bronze + sum, 0)
        return (
            <div>
                <Stack  direction="row" spacing={2}>
                <Typography variant="h3">Country Medals</Typography>
                    <Typography variant="subtitle1">Total Medals = {totalMedals}</Typography>
                    <AddCountryModal
                        addCountry={this.props.addCountry}
                    />
                </Stack>


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
