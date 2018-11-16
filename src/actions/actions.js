import * as ACTION from './action-types';

export const isLoading = () => ({
  type: ACTION.IS_LOADING
});

export const fetchResData = (value, identifier) => {
  if ( identifier === 'COMPETITION'){
    return {
      type: ACTION.FETCH_COMPETITION,
      payload: value
    }
  }
  if ( identifier === 'SCORERS'){
    return {
      type: ACTION.SCORERS,
      payload: value
    }
  }
  if ( identifier === 'FINISHED'){
    return {
      type: ACTION.FINISHED,
      payload: value
    }
  }
  if ( identifier === 'STANDINGS'){
    return{
      type: ACTION.STANDINGS,
      payload: value
    }
  }
}



export const fetchResDataScorers = value => ({
  type: ACTION.SCORERS,
  payload: value
})


export const isError = value => ({
  type: ACTION.IS_ERROR,
  payload: value
})
