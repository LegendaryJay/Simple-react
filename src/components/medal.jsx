import PropTypes from 'prop-types';
import React from 'react';
import {ExpandLess, ExpandMore} from '@mui/icons-material/';
import { Typography } from '@mui/material';

function Medal(props) {
  //rewrite return statement
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Typography variant="subtitle1" style={{ color: props.color }}>
        {props.name}
      </Typography>
      <ExpandLess
        onClick={() => props.changeMedal(props.index, 1, props.type)}
        style={{ color: props.color }}
      />
      <Typography variant="subtitle1">
        {props.count}
      </Typography>
      <ExpandMore
        onClick={() => props.changeMedal(props.index, -1, props.type)}
        style={{ color: props.color }}
      />
    </div>
  );
}

Medal.propTypes = {
  name: PropTypes.string,
  color: PropTypes.string,
  count: PropTypes.number,
  index: PropTypes.number,
  type: PropTypes.number,
  changeMedal: PropTypes.func
};

export default Medal;