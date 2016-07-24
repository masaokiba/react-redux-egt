import React, {Component, PropTypes} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';

import Header from './Header';
import IntroVideo from 'universal/components/IntroVideo/IntroVideo';
import SendWorkoutModal from '../SendWorkoutModal/SendWorkoutModal';
import Testimonials from '../Testimonials/Testimonials';

import bg from './images/jump-bg.jpg';
import Radium from 'radium';

const styles = {
  'ubw': {
    backgroundColor: '#000',
    backgroundImage: `url(${bg})`,
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top center',
    backgroundSize: '100%',
    color: '#fff'
  }
};

@Radium
export default class Main extends Component {
  render() {
    const {
      experiments
    } = this.props;

    let headerExperiment = experiments.get('header');

    return (
      <div style={styles.ubw}>
        <Grid>
          <Header experiment={headerExperiment}/>
          <Row>
            <IntroVideo videoId="h50hndvn64"/>
          </Row>

          <SendWorkoutModal {...this.props}/>

          <Testimonials/>

        </Grid>
      </div>
    );
  }
}
