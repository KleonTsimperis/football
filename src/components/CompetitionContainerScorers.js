import React, {Fragment} from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

const styles = theme => ({
  root:{
    flexGrow:1
  },
  playerContainer:{
    paddingTop:theme.spacing.unit,
    paddingBottom:theme.spacing.unit
  },
  player:{
    paddingTop:theme.spacing.unit/2,
    paddingBottom:theme.spacing.unit/2,
    paddingLeft:'7px',
    textAlign:'left'
  },
  goals:{
    paddingTop:theme.spacing.unit/2,
    paddingBottom:theme.spacing.unit/2,
  },
  team:{
    textAlign:'left',
    paddingTop:theme.spacing.unit/2,
    paddingBottom:theme.spacing.unit/2,
  }
});


const CompetitionContainerScorers = props => {
  const { classes } = props;
  if(!props.competitionContainerMainBodyState.scorers.scorers){
    return <p>Loading</p>
  }
  return(
    <Grid container justify='center' alignItems='center' className={classes.playerContainer}>
      <Grid item md={5} className={classes.player}>Player</Grid>
      <Grid item md={3} className={classes.goals}>Goals</Grid>
      <Grid item md={4} className={classes.team}>Team</Grid>
        {props.competitionContainerMainBodyState.scorers.scorers.map(item =>
          <Fragment key={item.player.id}>
            <Grid item md={5} className={classes.player}>{item.player.name}</Grid>
            <Grid item md={3} className={classes.goals}>{item.numberOfGoals}</Grid>
            <Grid item md={4} className={classes.team}>{item.team.name.substring(0,23)}</Grid>
          </Fragment>
        )}
    </Grid>
  )
}



const mapStateToProps = state => ({
  competitionContainerMainBodyState: state.mainReducer
})

export default connect(mapStateToProps)(withStyles(styles)(CompetitionContainerScorers));
