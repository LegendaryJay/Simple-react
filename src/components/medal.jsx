import React from 'react';
import {ExpandLess, ExpandMore} from '@mui/icons-material/';
import { Typography } from '@mui/material';

function Medal(props) {

  const handleDecrement = () => {
    props.changeMedal(props.medal.name, props.medal.value - 1);
  }

  const handleIncrement = () => {
    props.changeMedal(props.medal.name, props.medal.value + 1);
  }

  return (
    //set the div class to the color of the medal
    <div style={styles.container} className={props.medal.name}>
      <Typography variant="subtitle1">
        {props.medal.display}
      </Typography>
      <ExpandLess
        onClick={handleIncrement}
      />
      <Typography variant="subtitle1">
        {props.medal.value}
      </Typography>
      <ExpandMore
        onClick={handleDecrement}
      />
    </div>
  );
}
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
};

export default Medal;