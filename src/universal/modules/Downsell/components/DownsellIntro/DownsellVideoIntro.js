import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import IntroVideo from 'universal/components/IntroVideo/IntroVideo';
import PhoneNumber from 'universal/components/PhoneNumber/PhoneNumber';
import Radium from 'radium';
import shallowCompare from 'react-addons-shallow-compare';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import {black} from 'universal/styles/colors';
import {track, VIDEO_PLAYED, VIDEO_PAUSED, VIDEO_CROSSED_TIME, VIDEO_ENDED} from 'universal/utils/analytics';
// import introBG from 'universal/images/intro-bg.png';
import introBGSmall from 'universal/images/intro-bg-sm.png';
import logo from './images/egtLogo.png';

import introBG from './images/intro-image-4wfs.jpg';

const styles = {
  'Intro': {
    backgroundColor: black,
    backgroundImage: `url(${introBG})`,
    backgroundSize: 'cover',
    textAlign: 'center',
    position: 'relative',
    '@media (max-width: 767px)': {
      backgroundImage: `url(${introBGSmall})`,
    }
  },
  'header': {
    position: 'relative',
    zIndex: 5
  },
  'brand': Object.assign({}, imgResponsive, {
    paddingTop: '7px',
    paddingBottom: '14px',
    float: 'right',
    '@media (min-width: 768px)': {
      float: 'right'
    }
  }),
  'imagesLayer': {
    position: 'absolute',
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    overflow: 'hidden'
  },
  'rightIntroImg': {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%'
  },
  'issac-img': {
    position: 'absolute',
    right: 0,
    top: 0,
    height: '100%'
  },
  'bigDude': {
    height: '100%'
  },

};

@Radium
export default class ProductIntro extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  componentDidMount() {
    const that = this;
    window._wq = window._wq || [];
    _wq.push({"_all": function (video) {

      const analyticsData = {
        videoId: video._hashedId,
        jumpType: that.props.jumpType
      };

      // play
      video.bind("play", () => {
        track(VIDEO_PLAYED, analyticsData);
      });

      // pause
      video.bind("pause", () => {
        track(VIDEO_PAUSED, analyticsData);
      });

      // crosstime on:
      // 70 seconds
      // 230 seconds
      // 430 seconds
      const times = [70, 230, 430];
      times.map((time) => {
        video.bind("crosstime", time, function () {
          track(VIDEO_CROSSED_TIME, Object.assign({}, analyticsData, {time}));
        });
      });

      // ended
      video.bind("end", function () {
        track(VIDEO_ENDED, analyticsData);
      });

    }});
  }

  render() {
    const {
      videoId
    } = this.props;

    return (
      <section style={styles.Intro}>
        <header style={styles.header}>
          <Grid fluid>
            <Row>
              <Col xs={6}>
                <img style={styles.brand} src={logo} alt="logo"/>
              </Col>
              <Col xs={6}>
                <PhoneNumber/>
              </Col>
            </Row>

          </Grid>

          <div className="clearfix"></div>
        </header>

        <IntroVideo videoId={videoId}/>
      </section>
    );
  }
}
