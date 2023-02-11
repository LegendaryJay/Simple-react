import React, {Component, useState, useRef } from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";

class AddCountryModal extends Component {
  state = {
    open: false,
    countryName: ""
  };

  handleClickOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSave = () => {
    this.addNewCountry(this.state.countryName);
    this.setState({ open: false });
  };

  addNewCountry = (countryName) => {
    this.props.addCountry(countryName)
  };

  render() {
    return (
      <>
        <Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
          Add Country
        </Button>
        <Dialog
          open={this.state.open}
          onClose={this.handleClose}
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
              value={this.state.countryName}
              onChange={(e) => this.setState({ countryName: e.target.value })}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={this.handleClose} color="primary">
              Cancel
            </Button>
            <Button onClick={this.handleSave} color="primary">
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
export default AddCountryModal