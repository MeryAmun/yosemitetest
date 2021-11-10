import Loader from 'react-loader-spinner';
import React from 'react';

export default class Loading extends React.Component {
  //other logic
  render() {
    return (
      <Loader
        type="Puff"
        color="#00BFFF"
        height={60}
        width={60}
        timeout={3000} //3 secs
      />
    );
  }
}
