import React from "react";
import {makeStyles} from "@material-ui/styles";
import {Card} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
  }
}));

const Budget = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <Card>
      BUDGET
    </Card>
  );
};

export default Budget;
