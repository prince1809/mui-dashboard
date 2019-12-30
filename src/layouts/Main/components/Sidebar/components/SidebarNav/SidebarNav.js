import React from "react";
import PropTypes from 'prop-types';
import {makeStyles} from "@material-ui/styles";
import {Button, List, ListItem} from "@material-ui/core";


const useStyles = makeStyles(theme => ({}));


const SidebarNav = props => {
  const {pages, className, ...rest} = props;

  const classes = useStyles();

  return (
    <List>
      {pages.map(page => (
        <ListItem>
          <Button
            to={page.href}
          >
            <div>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  )
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

export default SidebarNav;
