import React from "react";
import classNames from "classnames";
import Carousel from "react-slick";
import { makeStyles } from "@material-ui/core/styles";
import Button from "components/CustomButtons/Button.js";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";

import headersStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/headersStyle.js";

import arizona1 from "assets/backgrounds/arizona.jpg";
import arizona2 from "assets/backgrounds/arizona2.jpg";
import arizona3 from "assets/backgrounds/arizona3.jpg";

import Modal from "./Modal";

const useStyles = makeStyles(headersStyle);

export default function SectionHeaders({ ...rest }) {
  const classes = useStyles();
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false
  };
  return (
    <div className="cd-section" {...rest}>
      <Carousel {...settings}>
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${arizona1}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={7}
                  md={7}
                  className={classNames(classes.mlAuto, classes.textRight)}
                >
                  <h1 className={classes.title}>Arizona Package</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt nibh placeratsem ullamcorper faucibus. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquet ante ligula, at suscipit nisi gravida at
                  </h4>
                  <br />
                  <div>
                    <Modal />
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${arizona2}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem
                  xs={12}
                  sm={8}
                  md={8}
                  className={classNames(
                    classes.mlAuto,
                    classes.mrAuto,
                    classes.textCenter
                  )}
                >
                  <h1 className={classes.title}>Beautiful Arizona</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt nibh placeratsem ullamcorper faucibus. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquet ante ligula, at suscipit nisi gravida at
                  </h4>
                  <br />
                  <h6>Connect with us on:</h6>
                  <div>
                    <Button color="white" simple size="lg" justIcon>
                      <i className="fab fa-twitter" />
                    </Button>
                    <Button color="white" simple size="lg" justIcon>
                      <i className="fab fa-facebook-square" />
                    </Button>
                    <Button color="white" simple size="lg" justIcon>
                      <i className="fab fa-google-plus-g" />
                    </Button>
                    <Button color="white" simple size="lg" justIcon>
                      <i className="fab fa-instagram" />
                    </Button>
                  </div>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
        <div>
          <div
            className={classes.pageHeader}
            style={{ backgroundImage: `url("${arizona3}")` }}
          >
            <div className={classes.container}>
              <GridContainer>
                <GridItem xs={12} sm={6} md={6}>
                  <h1 className={classes.title}>Looking for adventures ?</h1>
                  <h4>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Cras tincidunt nibh placeratsem ullamcorper faucibus. Lorem
                    ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
                    aliquet ante ligula, at suscipit nisi gravida at
                  </h4>
                  <br />
                  <Button color="danger" size="lg">
                    Tell me more
                  </Button>
                </GridItem>
              </GridContainer>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
