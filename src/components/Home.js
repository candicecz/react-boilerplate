import React from 'react';
import {Link} from 'react-router-dom';
import demoImg from '../images/codingpenguins.png';

class Home extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello World</h1>
        <img src={demoImg} alt="Coding Penguins" />
      </div>
    );
  }
}

export default Home;
