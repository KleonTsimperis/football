import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';

const styles = {
  root: {
    flexGrow: 1,
  },
};

function Header(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Toolbar>
          <Grid container spacing={16}>
            <Grid item style={{marginRight:'auto'}}>
              <Typography variant="h6" color="inherit">
                Football Data
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="inherit">
                Link 1
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="h6" color="inherit">
                Link 2
              </Typography>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Header);
