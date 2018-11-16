import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
}
from 'react-router-dom';
import {Provider} from 'react-redux';
import Header from './components/Header';
import Competition from './components/Competition';
import Matchdays from './components/Matchdays';
import Teams from './components/Teams';
import CssBaseline from '@material-ui/core/CssBaseline';
import Home from './components/Home';
import NotFound from './components/NotFound';


const App = (props) => (
  <Provider store={props.store}>
    <BrowserRouter>
      <div className="App">
        <CssBaseline/>
        <Header/>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/Competition' component={Competition}/>
          <Route path='/Teams' component={Teams}/>
          <Route path='/Matchdays' component={Matchdays}/>
          <Route component={NotFound}/>
        </Switch>
       </div>
    </BrowserRouter>
  </Provider>
);


export default App;
