import React from 'react';
import {connect} from 'react-redux';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  root:{
    flexGrow:1
  },
  resultsContainer: {
    paddingTop: theme.spacing.unit/2,
    paddingBottom: theme.spacing.unit/2,
    textTransform: 'capitalize'
  },
  games:{
    paddingTop: '8px',
    paddingBottom:'8px'
  }
});



const CompetitionContainerMatchResults = props => {
  console.log(props.competitionContainerMainBodyState.finishedGames.matches)
  const {classes} = props;
  if(!props.competitionContainerMainBodyState.finishedGames.matches){
    return <p>Loading</p>
  }
  return(
  <div className={classes.root}>
    <Grid container justify='center' alignItems='center' className={classes.resultsContainer}>
      <Grid item md={12} className={classes.resultsContainer}>
        {props.competitionContainerMainBodyState.finishedGames.matches[0].stage.toLowerCase().replace(/_/g, " ")}
      </Grid>
      <Grid item md={12}>
        {props.competitionContainerMainBodyState
              .finishedGames
              .matches
              .sort((b,a) => a.matchday - b.matchday)
              .filter(item => item.matchday === props.competitionContainerMainBodyState.finishedGames.matches[0].matchday)
              .map(item =>
                <Grid key={item.id} className={classes.games} container justify='center' alignItems='center'>
                  <Grid item xs={4}>{item.homeTeam.name}</Grid> <Grid item xs={1}>{item.score.fullTime.homeTeam}</Grid> - <Grid item xs={1}>{item.score.fullTime.awayTeam}</Grid> <Grid item xs={4}>{item.awayTeam.name}</Grid>
                </Grid>

          )}
      </Grid>
    </Grid>
  </div>
)}

const mapStateToProps = state => ({
  competitionContainerMainBodyState:state.mainReducer
});

export default connect(mapStateToProps)(withStyles(styles)(CompetitionContainerMatchResults));
