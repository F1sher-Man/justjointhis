import React, { ReactElement, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";

import "../navigation.component.scss";

export interface RegisterProps {
  isOpen: boolean;
  changeIsOpen(): void;
  switchDialogs(): void;
}

const Register = ({
  isOpen,
  changeIsOpen,
  switchDialogs,
}: RegisterProps): ReactElement => {
  const [termsAccept, setTermsAccept] = useState(false);
  const handleClickOpen = (): void => {
    changeIsOpen();
  };

  const handleClose = (): void => {
    changeIsOpen();
  };
  return (
    <React.Fragment>
      <Button
        variant="contained"
        className="myButton-second"
        onClick={handleClickOpen}
      >
        <b>Sign in</b>
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Fill the form to create an account.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="email"
            label="Email Address"
            type="email"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password"
            label="Password"
            type="Password"
            fullWidth
          />
          <TextField
            margin="dense"
            id="password-repeat"
            label="Repeat password"
            type="Password"
            fullWidth
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccept}
                onChange={() => {
                  setTermsAccept(!termsAccept);
                }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Accept the terms&conditions"
          />
          <p>
            Already have an account?
            <span className="click-link" onClick={switchDialogs}>
              Click here to log in!
            </span>
          </p>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Login
          </Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
};

export default Register;
