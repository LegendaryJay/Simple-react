import { useState } from 'react';
import { Divider, Paper, Box } from '@mui/material';
import Typography from "@material-ui/core/Typography";
import Medal from './Medal.jsx';
function Country(props) {
  const [medals] = useState([
    { name: 'Bronze', count: props.country?.bronze, color: 'brown' },
    { name: 'Silver', count: props.country?.silver, color: 'silver' },
    { name: 'Gold', count: props.country?.gold, color: 'gold' },
  ]);

  const medalRows = medals.map((medal, index) => (
    <Medal
      key={(props.id + "-" + index)}
      name={medal.name}
      count={medal?.count ?? 0}
      color={medal.color}
      index={props.country?.id}
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
        backgroundColor: 'DarkSlateGrey',
        color: 'white'
      }}
    >
      <Typography variant="subtitle1" align="center" elevation={3} p={2}>
        {props.country?.name} {(props.country?.bronze ?? 0) + (props.country?.silver ?? 0) + (props.country?.gold ?? 0)}
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
    </Paper>
  );
}

export default Country;