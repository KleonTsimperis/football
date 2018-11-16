import React, {Fragment} from 'react';
import Grid from '@material-ui/core/Grid';
import {withStyles} from '@material-ui/core/styles';
import {connect} from 'react-redux';
import { Link, Route} from 'react-router-dom';

const styles = {
  root:{
    flexGrow:1
  },
  container:{
    paddingLeft:'14px'
  },
  teamName: {
    textAlign:'left'
  },
  group: {
    paddingTop:'10px'
  }
}

const CompetitionContainerStandings = props => {
  if(!props.standingsState.standings){
    return <div>Loading...</div>
  }
  const { classes } = props;
  return(
    <div className={classes.root}>
      <Grid container className={classes.container}>
        {props.standingsState.standings.filter(item => item.type === "TOTAL").map(item => {
            return(
              <Grid item container md={12} key={item.group} className={classes.group}>
                {item.group && <Grid item>{item.group.replace(/_/g, " ")}</Grid>}
                {item.table.map(team=> {
                  return(
                  <Grid container key={team.team.id}>
                    <Grid item md={6} className={classes.teamName}> {team.team.name.substring(0,24)} </Grid>
                    <Grid item md={6}> {team.points} </Grid>
                  </Grid>
                  )
                })}
              </Grid>
            )
          })}
      </Grid>
    </div>
  );
}

const mapStateToProps = state => ({
  standingsState: state.mainReducer.standings
})

export default connect(mapStateToProps)(withStyles(styles)(CompetitionContainerStandings));
