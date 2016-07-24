import React, {Component} from 'react';
import {Link} from 'react-router';
import Radium from 'radium';
import Footer from 'universal/components/Footer/Footer';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  'text': {
    margin: '5em auto .5em',
    textAlign: 'center'
  },
  'goHome': {
    display: 'block',
    marginBottom: '10em',
    textAlign: 'center'
  }
};

@Radium
export default class NotFound extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <div>
          <h1 style={styles.text}>404: Page Not Found</h1>
          <Link to={{pathname: "/"}} style={styles.goHome}>
            Take me home!
          </Link>
        </div>
        <Footer/>
      </div>
    );
  }
}
