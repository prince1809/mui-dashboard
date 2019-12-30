import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";


const useStyles = makeStyles(theme => ({
  root: {
    paddingTop: 56
  }
}));

const Main = props => {
  const {children} = props;

  const classes = useStyles();
  //const theme = useTheme();

  return (
    <div>

    </div>
  );
};

Main.propTypes = {
  children: PropTypes.node
};

export default Main;
