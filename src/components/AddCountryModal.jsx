import { useState } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

function AddCountryModal(props) {
  const [open, setOpen] = useState(false);
  const [countryName, setCountryName] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    addNewCountry(countryName);
    setOpen(false);
  };

  const addNewCountry = (countryName) => {
    props.addCountry(countryName);
  };

  return (
    <>
      <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Add Country
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Add a new country</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please enter the name of the country:
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Country Name"
            type="text"
            fullWidth
            value={countryName}
            onChange={(e) => setCountryName(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancel
          </Button>
          <Button onClick={handleSave} color="primary">
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}

export default AddCountryModal;
