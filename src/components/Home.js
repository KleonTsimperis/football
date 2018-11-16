import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

const styles = theme => ({
  root: {
    flexGrow:1
  },
  paper: {
    marginBottom: theme.spacing.unit*5,
    marginTop: theme.spacing.unit*5,
    paddingTop: theme.spacing.unit*6,
    height: theme.spacing.unit*10,
    width: '50%',
    margin:'0 auto',
    textAlign: 'center',
    cursor:'pointer',
    backgroundColor:'#6299ff',
  },
  type: {
    color:'white',
    textDecoration:'none'

  }
})


const Home = props => {
  const {classes} = props;
  return(
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Typography className={classes.type} variant="h5" gutterBottom>
            <Link to='/Competition'> Choose your competition </Link>
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography className={classes.type} variant="h5" gutterBottom>
          <Link to='/Teams'>Teams</Link>
        </Typography>
      </Paper>

      <Paper className={classes.paper}>
        <Typography className={classes.type} variant="h5" gutterBottom>
          <Link to='/Matchdays'>Matchdays</Link>
        </Typography>
      </Paper>
    </div>

  )
}


export default withStyles(styles)(Home);
