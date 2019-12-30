import React from "react";
import {makeStyles} from "@material-ui/styles";
import clsx from 'clsx';
import PropTypes from 'prop-types';

const useStyles = makeStyles(theme => ({}));

const Profile = props => {
  const {className, ...rest} = props;

  const classes = useStyles();

  return (
    <div
      {...rest}
      className={clsx(classes.root, className)}
    >

    </div>
  );
};

Profile.propTypes = {
  className: PropTypes.string
};

export default Profile;
