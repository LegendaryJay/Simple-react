import { ExpandLess, ExpandMore } from '@mui/icons-material/';
import Typography from "@material-ui/core/Typography";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import RemoveCircleOutlineIcon from "@material-ui/icons/RemoveCircleOutline";

function Medal(props) {
  return (
    <div>
      <Typography variant="subtitle1" sm={12} style={{ color: props.color }}>{props.name}</Typography>
      <ExpandLess style={{ color: 'white' }} onClick={() => props.changeMedal(props.index, 1, props.type)}>
        <RemoveCircleOutlineIcon />
      </ExpandLess>
      <Typography variant="subtitle1">{props.count}</Typography>
      <ExpandMore style={{ color: 'white' }} onClick={() => props.changeMedal(props.index, -1, props.type)}>
        <AddCircleOutlineIcon />
      </ExpandMore>
    </div>
  );
}

export default Medal;