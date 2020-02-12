import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import headersStyle from "../../../assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Header from "../../../components/Header/Header";
import Button from "../../../components/CustomButtons/Button";

const useStyles = makeStyles(headersStyle);

const NavBar = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <Header
        absolute
        brand="Southwestern Vacations"
        color="transparent"
        links={
          <div className={classes.collapse}>
            <List className={classes.list + " " + classes.mlAuto}>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://twitter.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  className={classes.navLink + " " + classes.navLinkJustIcon}
                >
                  <i className={"fab fa-twitter"} />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://www.facebook.com/CreativeTim?ref=creativetim"
                  target="_blank"
                  className={classes.navLink + " " + classes.navLinkJustIcon}
                >
                  <i className={"fab fa-facebook"} />
                </Button>
              </ListItem>
              <ListItem className={classes.listItem}>
                <Button
                  color="transparent"
                  href="https://www.instagram.com/CreativeTimOfficial?ref=creativetim"
                  target="_blank"
                  className={classes.navLink + " " + classes.navLinkJustIcon}
                >
                  <i className={"fab fa-instagram"} />
                </Button>
              </ListItem>
            </List>
          </div>
        }
      />
    </div>
  );
};

export default NavBar;
