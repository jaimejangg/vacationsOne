import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slide from "@material-ui/core/Slide";
import Dialog from "@material-ui/core/Dialog";
import DialogTitle from "@material-ui/core/DialogTitle";
import DialogContent from "@material-ui/core/DialogContent";
import DialogActions from "@material-ui/core/DialogActions";
import InputAdornment from "@material-ui/core/InputAdornment";
import Close from "@material-ui/icons/Close";
import Mail from "@material-ui/icons/Mail";
import Face from "@material-ui/icons/Face";
import Button from "components/CustomButtons/Button.js";
import Card from "components/Card/Card.js";
import CardHeader from "components/Card/CardHeader.js";
import CardBody from "components/Card/CardBody.js";
import CustomInput from "components/CustomInput/CustomInput.js";

import style from "assets/jss/material-kit-pro-react/views/componentsSections/javascriptStyles.js";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="down" ref={ref} {...props} />;
});

const useStyles = makeStyles(style);

export default function Modal() {
  const [loginModal, setLoginModal] = React.useState(false);
  const classes = useStyles();
  return (
    <div>
      <Button color="danger" onClick={() => setLoginModal(true)}>
        Contact Us
      </Button>
      <Dialog
        classes={{
          root: classes.modalRoot,
          paper: classes.modal + " " + classes.modalLogin
        }}
        open={loginModal}
        TransitionComponent={Transition}
        keepMounted
        onClose={() => setLoginModal(false)}
        aria-labelledby="login-modal-slide-title"
        aria-describedby="login-modal-slide-description"
      >
        <Card plain className={classes.modalLoginCard}>
          <DialogTitle
            id="login-modal-slide-title"
            disableTypography
            className={classes.modalHeader}
          >
            <CardHeader
              plain
              color="danger"
              className={`${classes.textCenter} ${classes.cardLoginHeader}`}
            >
              <Button
                simple
                className={classes.modalCloseButton}
                key="close"
                aria-label="Close"
                onClick={() => setLoginModal(false)}
              >
                {" "}
                <Close className={classes.modalClose} />
              </Button>
              <h5 className={classes.cardTitleWhite}>Contact Us</h5>
              <div className={classes.socialLine}>
                <Button justIcon link className={classes.socialLineButton}>
                  <i className="fab fa-facebook-square" />
                </Button>
                <Button justIcon link className={classes.socialLineButton}>
                  <i className="fab fa-twitter" />
                </Button>
                <Button justIcon link className={classes.socialLineButton}>
                  <i className="fab fa-google-plus-g" />
                </Button>
              </div>
            </CardHeader>
          </DialogTitle>
          <DialogContent
            id="login-modal-slide-description"
            className={classes.modalBody}
          >
            <form>
              <CardBody className={classes.cardLoginBody}>
                <CustomInput
                  id="login-modal-first"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Face className={classes.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "Your name..."
                  }}
                />
                <CustomInput
                  id="login-modal-email"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: (
                      <InputAdornment position="start">
                        <Mail className={classes.icon} />
                      </InputAdornment>
                    ),
                    placeholder: "Email..."
                  }}
                />
                <CustomInput
                  id="login-modal-pass"
                  formControlProps={{
                    fullWidth: true
                  }}
                  inputProps={{
                    startAdornment: <InputAdornment position="start" />,
                    placeholder: "Comments..."
                  }}
                />
              </CardBody>
            </form>
          </DialogContent>
          <DialogActions
            className={`${classes.modalFooter} ${classes.justifyContentCenter}`}
          >
            <Button color="primary" simple size="lg">
              Send
            </Button>
          </DialogActions>
        </Card>
      </Dialog>
    </div>
  );
}
