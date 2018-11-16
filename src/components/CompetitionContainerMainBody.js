import React from 'react';
import {withStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';
import CompetitionContainerScorers from './CompetitionContainerScorers';
import CompetitionContainerMatchResults from './CompetitionContainerMatchResults';
import CompetitionContainerStandings from './CompetitionContainerStandings';
import {Route} from 'react-router-dom';

const styles = theme => ({
  root:{
    flexGrow:1
  },
  playerContainer:{

  },
  player:{
    paddingTop:theme.spacing.unit,
    paddingBottom:theme.spacing.unit,
    paddingLeft:'7px',
    textAlign:'left'
  },
  team:{
    textAlign:'left'
  }
});



const CompetitionContainerMainBody = props => {
  const {classes} = props;
  if(!props.competitionContainerMainBodyState.scorers.scorers){
    return <p>Loading</p>
  }
  return(
    <div className={classes.root}>
      <Grid container spacing={8} justify='flex-start' alignItems='flex-start'>
        <Grid item sm={4}>
          <CompetitionContainerStandings/>
        </Grid>

        <Grid item sm={4}>
          <CompetitionContainerMatchResults/>
        </Grid>

        <Grid item sm={4}>
          <CompetitionContainerScorers/>
        </Grid>

      </Grid>
    </div>
  )
}

const mapStateToProps = state => ({
  competitionContainerMainBodyState: state.mainReducer
});


export default connect(mapStateToProps)(withStyles(styles)(CompetitionContainerMainBody));
