import React, {PropTypes, Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import videoFrame from './images/VIDEO-FRAME.png';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  'videoFrame': {
    maxWidth: 720,
    marginTop: 0,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#232323',
    backgroundImage: `url(${videoFrame})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
  },
  'wistia_responsive_padding': {
    padding: '56.25% 0 0 0',
    position: 'relative'
  },
  'wistia_responsive_wrapper': {
    height: '100%',
    left: 0,
    position: 'absolute',
    top: 0,
    width: '100%'
  },
  'wistia_embed': {
    height: '100%',
    width: '100%'
  }
};

@Radium
export default class VideoFill extends Component {
  propTypes: {
    videoId: React.PropTypes.string.isRequired
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    let wistiaVideoClassForId = `wistia_async_${this.props.videoId}`;
    const videoFrameStyle = this.props.fill ? Object.assign({}, styles.videoFrame, {
      width: '100%',
      maxWidth: '100%',
      marginBottom: 0
    }) : styles.videoFrame;
    return (
      <div style={videoFrameStyle}>
        <div style={styles.wistia_responsive_padding} className="wistia_responsive_wrapper">
          <div style={styles.wistia_responsive_wrapper} className="wistia_responsive_wrapper">
            <div style={styles.wistia_embed} className={`${wistiaVideoClassForId} wistia_embed videoFoam=true`} >
              &nbsp;
            </div>
          </div>
        </div>
      </div>
    );
  }
}
