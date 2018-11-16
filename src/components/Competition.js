import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import PL from '../assets/PL.png';
import CL from '../assets/CL.png';
import SA from '../assets/SA.png';
import BL from '../assets/BL.png';
import {Route, NavLink, Redirect, Switch} from 'react-router-dom';
import CompetitionContainer from './CompetitionContainer';
import {connect} from 'react-redux';
import axios from 'axios';
import {API_KEY} from '../API/key';
import {isLoading, fetchResData, isError} from '../actions/actions';
import Spinner from '../assets/spinner/spinner';



const PATH = 'https://api.football-data.org/v2/competitions/';

const styles = theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    textAlign: 'center',
    cursor:'pointer',
    width:'80%',
    height:'auto',
    margin:'auto',
    [theme.breakpoints.up('960')]:{
      width:'85%'
    }
  },
  media: {
    padding:theme.spacing.unit,
    width:'80%',
  },
  container: {
    width:'90%',
    maxWidth:'90%',
    margin: 'auto',
  },
  item: {
    color: 'white',
    margin:theme.spacing.unit*2,
    '&:hover':{
      transform: 'scale(1.05)',
      transition: '.5s',
      transform: 'translateY(.5vh)'
    }
  },
  title:{
    borderTopLeftRadius:'4px',
    borderTopRightRadius:'4px',
    paddingTop:theme.spacing.unit,
    paddingBottom:theme.spacing.unit,
    marginTop:'0',
    [theme.breakpoints.up('960')]: {
      fontSize: '13px',
    },
    [theme.breakpoints.up('1180')]:{
      fontSize:'1rem'
    },
    backgroundColor:'#382e8f'
  }
});

const Competition = (props) =>{

  const { classes } = props;
  if (props.competitionState.isLoading){
    return <Spinner/>
  }

  return (
    <div className={classes.root}>
      <Grid container spacing={8} justify="center" alignItems="center" alignContent="center" wrap="wrap" className={classes.container}>
        <Grid item xs={10} sm={5} md={2} className={classes.item}>
          <Paper className={classes.paper} onClick={()=>props.fetchResults('PL')}> <h3 className={classes.title}>Premier League</h3>
            <NavLink style={{opacity:'.1'}} activeStyle={{opacity:'1'}} to={`${props.match.url}/PL`}>
              <img src={PL} className={classes.media} alt="Premier League"/>
            </NavLink>
          </Paper>
        </Grid>

        <Grid item xs={10} sm={5} md={2} className={classes.item}>
          <Paper className={classes.paper} onClick={()=>props.fetchResults('BL1')}> <h3 className={classes.title}>BundesLiga</h3>
            <NavLink style={{opacity:'.1'}} activeStyle={{opacity:'1'}} to={`${props.match.url}/BL1`}>
              <img src={BL} className={classes.media} alt="BundesLiga"/>
            </NavLink>
          </Paper>
        </Grid>

        <Grid item xs={10} sm={5} md={2} className={classes.item}>
          <Paper className={classes.paper} onClick={()=>props.fetchResults('CL')}><h3 className={classes.title}>Champion's League</h3>
            <NavLink style={{opacity:'.1'}} activeStyle={{opacity:'1'}} to={`${props.match.url}/CL`}>
              <img src={CL} className={classes.media} alt="Champions League"/>
            </NavLink>
          </Paper>
        </Grid>

        <Grid item xs={10} sm={5} md={2} className={classes.item}>
          <Paper className={classes.paper} onClick={()=>props.fetchResults('SA')}><h3 className={classes.title}>Serie A</h3>
            <NavLink style={{opacity:'.1'}} activeStyle={{opacity:'1'}} to={`${props.match.url}/SA`}>
              <img src={SA} className={classes.media} alt="Champions League"/>
            </NavLink>
          </Paper>
        </Grid>
      </Grid>

        <Route exact path={props.match.path}    render={ props => <Redirect {...props} to={`${props.match.path}/PL`}/>} />
        <Route path={`${props.match.path}/PL`}  render={ props => <CompetitionContainer {...props} />} />
        <Route path={`${props.match.path}/BL1`} render={ props => <CompetitionContainer {...props} />} />
        <Route path={`${props.match.path}/SA`}  render={ props => <CompetitionContainer {...props} />} />
        <Route path={`${props.match.path}/CL`}  render={ props => <CompetitionContainer {...props} />} />
    </div>
  );
}

Competition.propTypes = {
  classes: PropTypes.object.isRequired,
};

const mapStateToProps = state =>({
  competitionState:state.mainReducer
})


const mapDispatchToProps = dispatch => {
  return {
    fetchResults: value => {
      dispatch(isLoading());
      axios.get( `${PATH}${value}`, {headers:{'Content-Type': 'application/json','X-Auth-Token':`${API_KEY}`}})
           .then(res => dispatch(fetchResData(res.data, 'COMPETITION')))
           .catch(error => dispatch(isError(error)))
      axios.get( `${PATH}${value}/scorers`, {headers:{'Content-Type': 'application/json','X-Auth-Token':`${API_KEY}`}})
           .then(res => dispatch(fetchResData(res.data, 'SCORERS')))
           .catch(error => dispatch(isError(error)))
      axios.get( `${PATH}${value}/matches?status=FINISHED`, {headers:{'Content-Type': 'application/json','X-Auth-Token':`${API_KEY}`}})
           .then(res => dispatch(fetchResData(res.data, 'FINISHED')))
           .catch(error => dispatch(isError(error)))
      axios.get( `${PATH}${value}/standings`, {headers:{'Content-Type': 'application/json','X-Auth-Token':`${API_KEY}`}})
           .then(res => dispatch(fetchResData(res.data, 'STANDINGS')))
           .catch(error => dispatch(isError(error)))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(withStyles(styles)(Competition));
