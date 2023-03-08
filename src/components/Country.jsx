import {  React } from 'react';
import { Paper, Box, Button } from '@mui/material';
import Typography from '@mui/material/Typography';
import Medal from './Medal.jsx';


function Country(props) {
  const removeCountry = () => {
    props.removeCountry(props.country.id);
  }

  const changeMedal = (name, value) => {
    props.country[name] = value;
    props.updateCountry(props.country);
  }
  const medals = [
    { name: "goldMedalCount", display: "Gold", value: props.country?.goldMedalCount },
    { name: "silverMedalCount", display: "Silver", value: props.country?.silverMedalCount },
    { name: "bronzeMedalCount", display: "Bronze", value: props.country?.bronzeMedalCount },
  ];

  const medalRows = medals
  .map((medal, index) => (
    <Medal
      key={(props.index + "-" + index)}
      index = {index}
      medal = { medal }
      changeMedal = {changeMedal}
    />
  )
  );

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
        {props.country?.name} {props.country?.medals?.total}
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
      <Button variant="contained" color="secondary" onClick={removeCountry}>Remove</Button>
    </Paper>
  );
}

export default Country;