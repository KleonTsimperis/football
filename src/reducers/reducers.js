import * as ACTION from '../actions/action-types';

const initialState = {
  searchTerm: '',
  results:{},
  scorers:{},
  finishedGames:{},
  standings:{},
  isLoading:false,
  error:null
}


const mainReducer = (state = initialState, action) => {
    switch (action.type){
      case ACTION.IS_LOADING:
        return state = {
          ...state,
          isLoading:true
        }
      case ACTION.FETCH_COMPETITION:
        return state = {
          ...state,
          results: action.payload,
        }
      case ACTION.SCORERS:
        return state = {
          ...state,
          scorers: action.payload
        }
      case ACTION.FINISHED:
        return state = {
          ...state,
          finishedGames: action.payload,
        }
      case ACTION.STANDINGS:
        return state = {
          ...state,
          standings: action.payload,
          isLoading:false,
        }
       case ACTION.IS_ERROR:
         return state = {
           ...state,
           error: action.payload
         }
      default:
        return state
    }
}

export default mainReducer;
