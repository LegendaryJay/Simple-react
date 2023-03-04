import PropTypes from 'prop-types';
import { useState, React } from 'react';
import { Paper, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Medal from './Medal.jsx';
import { deleteCountry } from '../connection.js';


function Country(props) {
  const [medals] = useState([
    { name: 'Bronze', count: props.country?.bronzeMedalCount, color: 'brown' },
    { name: 'Silver', count: props.country?.silverMedalCount, color: 'silver' },
    { name: 'Gold', count: props.country?.goldMedalCount, color: 'gold' },
  ]);

  const medalRows = medals.map((medal, index) => (
    <Medal
      key={(props.id + "-" + index)}
      name={medal.name}
      count={medal?.count ?? 0}
      color={medal.color}
      index={props.id}
      type={index}
      changeMedal={props.changeMedal}
    />
  ));

  return (
    <Paper
      elevation={4}
      sx={{
        width: props.width,
        height: props.height,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-around'  ,
        alignItems: 'center',
        p: 2,
        m: 2,
      }}
    >
      <Typography variant="subtitle1" align="center" elevation={3} p={2}>
        {props.country?.name} {(props.country?.bronzeMedalCount ?? 0) + (props.country?.silverMedalCount ?? 0) + (props.country?.goldMedalCount ?? 0)}
      </Typography>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-around',
          alignItems: 'center',
          p: 2,
          m: 2,
          width: '100%',
        }}
      >
        {medalRows}
      </Box>
      <Button variant="contained" color="secondary" onClick={() => deleteCountry(props.country.id)}>Remove</Button>
    </Paper>
  );
}

Country.propTypes = {
  country: PropTypes.object,
  id: PropTypes.number,
  width: PropTypes.number,
  height: PropTypes.number,
  changeMedal: PropTypes.func
};

export default Country;