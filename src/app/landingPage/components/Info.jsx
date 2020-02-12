import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import FiberManualRecord from "@material-ui/icons/WatchLater";
import GridContainer from "components/Grid/GridContainer.js";
import GridItem from "components/Grid/GridItem.js";
import InfoArea from "components/InfoArea/InfoArea.js";

import featuresStyle from "assets/jss/material-kit-pro-react/views/sectionsSections/featuresStyle.js";

const useStyles = makeStyles(featuresStyle);

const Info = ({ ...rest }) => {
  const classes = useStyles();
  return (
    <div className="cd-section" {...rest}>
      <div className={classes.container}>
        <div className={classes.features3}>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>To the Contrary</h2>
              <InfoArea
                className={classes.infoArea}
                icon={FiberManualRecord}
                title="Lorem ipsum dolor "
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt nibh placerat sem ullamco"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={FiberManualRecord}
                title="Lorem ipsum dolor "
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt nibh placerat sem ullamco"
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
          <GridContainer>
            <GridItem xs={12} sm={6} md={6}>
              <h2 className={classes.title}>Treatise</h2>
              <InfoArea
                className={classes.infoArea}
                icon={FiberManualRecord}
                title="Lorem ipsum dolor "
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt nibh placerat sem ullamco"
                iconColor="primary"
              />
              <InfoArea
                className={classes.infoArea}
                icon={FiberManualRecord}
                title="Lorem ipsum dolor "
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras tincidunt nibh placerat sem ullamco"
                iconColor="primary"
              />
            </GridItem>
          </GridContainer>
        </div>
      </div>
    </div>
  );
};

export default Info;
