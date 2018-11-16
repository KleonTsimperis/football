import React, { Component } from 'react';


const LoaderHOC = (WrappedComponent) => {
  return class LoaderHOC extends Component {
    render(){
      return <WrappedComponent {...this.props} name='random' />
    }
  }
}

export default LoaderHOC;
