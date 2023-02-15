import { useState, useEffect } from 'react';
import Country from './Country';
import { FixedSizeGrid as InfGrid } from 'react-window';
import AddCountryModal from "./AddCountryModal";
import { Stack, Typography } from '@mui/material';

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

  const cell = ({ columnIndex, rowIndex, style }) => (
    <div style={style}>
      <Country
        key={"Country" + (rowIndex * columnCount + columnIndex)}
        id={rowIndex * columnCount + columnIndex}
        country={props.countries?.[rowIndex * columnCount + columnIndex]}
        changeMedal={props.changeMedal}
        height={cellHeight}
        width={cellWidth}
      />
    </div>
  );

  const totalMedals = props.countries.reduce((sum, country) => country?.gold + country?.silver + country?.bronze + sum, 0);

  return (
    <div>
      <Stack direction="row" spacing={2}>
        <Typography variant="h3">Country Medals</Typography>
        <Typography variant="subtitle1">Total Medals = {totalMedals}</Typography>
        <AddCountryModal addCountry={props.addCountry} />
      </Stack>

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