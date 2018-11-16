import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import CompetitionContainerBottomNav from './CompetitionContainerBottomNav';
import CompetitionContainerMainBody from './CompetitionContainerMainBody';
import { withStyles } from '@material-ui/core/styles';
import {connect} from 'react-redux';
import {  Route } from 'react-router-dom';


const styles = theme => ({
  root: {
    flexGrow:1,
  },
  header:{
    marginLeft:'auto',
    marginRight:'auto',
    backgroundColor:'#382e8f',
    borderTopLeftRadius:'4px',
    borderTopRightRadius:'4px',
    color:'white'
  },
  paper:{
    padding:0,
    textAlign: 'center',
    width:'98%',
    height:'90%',
    margin:'auto',
    marginBottom: '1rem',
  },
  media:{
    width:'20%',
    height:'20%',
    padding:theme.spacing.unit*2,
  },
  bottom:{
    paddingBottom:0,
    backgroundColor:'#382e8f',
    borderBottomLeftRadius:'4px',
    borderBottomRightRadius:'4px'
  }
})

const CompetitionContainer = (props) => {

  const { classes } = props;
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container justify='center' alignItems='flex-start'>
          <Grid item xs={12} className={classes.header}>
            <Typography variant='h5' color='inherit'>
              {props.competitionContainerState.results.name? props.competitionContainerState.results.name : 'Choose a competition'}
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <CompetitionContainerMainBody />
          </Grid>
          <Grid item xs={12} className={classes.bottom}>
            <CompetitionContainerBottomNav />
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

const mapStateToProps = state => ({
  competitionContainerState: state.mainReducer
});

export default connect(mapStateToProps)(withStyles(styles)(CompetitionContainer));
