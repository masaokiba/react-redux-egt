import React, {PropTypes, Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import shallowCompare from 'react-addons-shallow-compare';
import Video from './Video';

@Radium
export default class IntroVideo extends Component {
  propTypes: {
    videoId: React.PropTypes.string.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    return (
      <div>
        <Grid fluid>
          <Row>
            <Col xs={12}>
              <Video {...this.props}/>
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}
