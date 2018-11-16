import React from 'react';
import Grid from '@material-ui/core/Grid';
import {connect} from 'react-redux';

const CompetitionContainerBottomNav = (props) => {

    return(
      <Grid container justify='space-around'>
        <Grid item sm={6} style={{color:'white', padding:'5px'}}>
          Current Matchday {props.date.currentSeason ? props.date.currentSeason.currentMatchday : null}
        </Grid>

        <Grid item sm={6} style={{color:'white', padding:'5px'}}>
          Last updated {props.date.lastUpdated ? props.date.lastUpdated.substring(0,10):null}
        </Grid>
      </Grid>
    )
}

const mapStateToProps = state => ({
  date:state.mainReducer.results
})



export default connect(mapStateToProps)(CompetitionContainerBottomNav);
