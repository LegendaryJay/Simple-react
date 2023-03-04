import PropTypes from 'prop-types';
import { useState, React } from "react";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from "@mui/material";


function AddCountryModal(props) {
  const [open, setOpen] = useState(false);
  const [countryName, setCountryName] = useState("");
  const [error, setError] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    if (countryName.length < 3) {
      setError("The country name must be at least 3 characters long");
      return;
    }
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
          {error && <div style={{ color: "red" }}>{error}</div>}
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

AddCountryModal.propTypes = {
  addCountry: PropTypes.func.isRequired,
};

export default AddCountryModal;
