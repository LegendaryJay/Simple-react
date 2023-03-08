import { React, useState, useEffect } from 'react';
import Country from './Country';
import { FixedSizeGrid as InfGrid } from 'react-window';
import AddCountryModal from "./AddCountryModal";
import {  Typography } from '@mui/material';

const cellWidth = 300;
const cellHeight = 180;
const cellSpace = 100;

function Countries(props) {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateDimensions);
    updateDimensions();
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const columnCount = Math.max(Math.floor(width / (cellWidth + cellSpace)), 1);

  const cell = ({ columnIndex, rowIndex, style }) => {
    if (rowIndex * columnCount + columnIndex >= props.countries.length) return null;
    return (
    <div style={style}>
      <Country
        key={"Country" + (rowIndex * columnCount + columnIndex)}
        index={rowIndex * columnCount + columnIndex}
        country={props.countries?.[rowIndex * columnCount + columnIndex]}
        height={cellHeight}
        width={cellWidth}
        removeCountry={props.removeCountry}
        updateCountry={props.updateCountry}
      />
    </div>
    );
  };

  const totalMedals = props.countries?.reduce((total, country) => total + (country?.goldMedalCount + country?.silverMedalCount + country?.bronzeMedalCount
    ), 0);
  
  return (
    <div>
      <Typography variant="h3">Olympic Medal Tracker</Typography>
      <Typography variant="subtitle1">Total Countries = {props.countries.length}</Typography>
      <Typography variant="subtitle1">Total Medals = {totalMedals}</Typography>
      <AddCountryModal addCountry={props.addCountry} />

      <InfGrid
        columnCount={columnCount}
        columnWidth={cellWidth + cellSpace}
        height={height - 100}
        rowCount={Math.ceil(props.countries.length / columnCount)}
        rowHeight={cellHeight + cellSpace}
        width={width - 20}
      >
        {cell}
      </InfGrid>
    </div>
  );
}

export default Countries;