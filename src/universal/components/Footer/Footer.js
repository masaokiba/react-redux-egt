import React, {PropTypes, Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import {Link} from 'react-router';
import FAQModal from 'universal/components/FAQModal/FAQModal';
import PrivacyPolicyModal from 'universal/components/PrivacyPolicyModal/PrivacyPolicyModal';
import DisclaimerModal from 'universal/components/DisclaimerModal/DisclaimerModal';
import Radium from 'radium';
import {bodyStack} from 'universal/styles/fonts';
import {white, black} from 'universal/styles/colors';
import shallowCompare from 'react-addons-shallow-compare';


const styles = {
  footer: {
    backgroundColor: black,
    fontSize: '16px',
    paddingTop: '3em',
    paddingBottom: '4em',
    color: white,
    fontFamily: bodyStack,
    lineHeight: '1.75em',
    fontWeight: 400,
    textAlign: 'center',
    '@media (min-width: 768px)': {
      textAlign: 'left'
    }
  },
  disclaimer: {
    marginTop: '2em'
  },
  footerLink: {
    color: white,
    textDecoration: 'underline'
  }
};

@Radium
export default class Footer extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const theme = this.props.theme || 'dark';
    let footerStyle, footerLinkStyle;

    switch (theme) {
      case 'dark':
        footerStyle = styles.footer;
        footerLinkStyle = styles.footerLink;
        break;
      case 'light':
        footerStyle = Object.assign({}, styles.footer, {
          backgroundColor: white,
          color: black
        });
        footerLinkStyle = Object.assign({}, styles.footerLink, {
          color: black
        });
        break;
      default:
        footerStyle = styles.footer;
        break;
    }
    const linkColor = footerStyle.color;

    return (
      <footer style={footerStyle}>
        <Grid>
          <Row>
            <Col xs={12}>
              <span style={styles.copyright}>Copyright © 2016 EliteGuardTraining.com</span> &nbsp;&nbsp;|&nbsp;&nbsp; <a style={footerLinkStyle} href="https://eliteguardtraining.com">Home</a>
            </Col>
          </Row>
          <Row>
            <Col xs={12}>
              <p style={styles.disclaimer}>
                Disclaimer: Consult a physician and follow all safety
                instructions. Every effort has been made to accurately
                represent the potential of this training. Results are not
                typical, and only represent players who worked very hard.
                Of course, no guarantee can be made for every single player.
                You can view our <a style={footerLinkStyle} href="/faqs" target="_blank">newsletter FAQ here</a>.
                See our <a style={footerLinkStyle}  href="/privacy-policy" target="_blank">privacy policy here</a>.
                Read our <a style={footerLinkStyle}  href="/disclaimer" target="_blank">full disclaimer here</a>.
              </p>
            </Col>
          </Row>
        </Grid>

      </footer>
    );
  }
}
