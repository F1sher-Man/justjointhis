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

export interface LoginProps {
  isOpen: boolean;
  changeIsOpen(): void;
  switchDialogs(): void;
}

const Login = ({
  isOpen,
  changeIsOpen,
  switchDialogs,
}: LoginProps): ReactElement => {
  const [rememberLogin, setRememberLogin] = useState(false);
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
        className="myButton"
        onClick={handleClickOpen}
      >
        <b>Log in</b>
      </Button>
      <Dialog
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Login</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Please fill in e-mail address and Password to log in the website!
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
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberLogin}
                onChange={() => {
                  setRememberLogin(!rememberLogin);
                }}
                inputProps={{ "aria-label": "primary checkbox" }}
              />
            }
            label="Stay logged in?"
          />
          <p>
            You don't have an account?
            <span className="click-link" onClick={switchDialogs}>
              Click here!
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

export default Login;
