import React, {Component, PropTypes} from 'react';

import OptionsBigTextIntro from '../OptionsIntro/OptionsBigTextIntro';
import Guarantee from 'universal/components/Guarantee/Guarantee';
import PackageTable from '../PackageTable/PackageTable';
import SamePrice from '../SamePrice/SamePrice';
import CallToAction from '../CallToAction/CallToAction';
import Testimonial from '../Testimonial/Testimonial';
import Attention from 'universal/components/Attention/Attention';
import Section from 'universal/components/Section/Section';
import Divider from 'universal/components/Divider/Divider';
import {track, CLICKED_CHECKOUT} from 'universal/utils/analytics';
import {orange, white, black, bgGrey, lightGrey} from 'universal/styles/colors';

import LogoPhoneHeader from 'universal/components/LogoHeader/LogoPhoneHeader';
import LogoGrey from 'universal/components/LogoGrey/LogoGrey';

import {Grid, Row, Col} from 'react-bootstrap';
import Video from 'universal/components/IntroVideo/Video';
import ChooseYourPackageHeader from '../ChooseYourPackageHeader/ChooseYourPackageHeader';

import shallowCompare from 'react-addons-shallow-compare';
import ValidatorPropTypes from 'react-validator-prop-types';
import {addToAbandonList} from '../../../../ducks/abandon';
import {push} from 'react-router-redux';
import egtLogoGrey from 'universal/images/logo-grey.png';
import {experimentName as optionsExperiment,
  NO_OPTIONS, OPTIONS_LONG, OPTIONS_SHORT} from 'universal/experiments/optionsPageExperiment';

const styles = {
  oldTheme: {
    backgroundColor: lightGrey
  },
  contentContainer: {
    background: white,
    marginTop: 40,
    position: 'relative',
    zIndex: 1
  },
  limited: {
    textDecoration: 'underline'
  },
  largeText: {
    fontSize: '1.5em'
  },
  videoContainer: {
    width: '75%',
    marginTop: '1em',
    marginBottom: '0em',
    marginLeft: 'auto',
    marginRight: 'auto'
  }
};

export default class Main extends Component {
  static propTypes = {
    initialOfferStartDate: ValidatorPropTypes.date,
    initialOfferEndDate: ValidatorPropTypes.date,
    reopenOfferStartDate: ValidatorPropTypes.date,
    reopenOfferEndDate: ValidatorPropTypes.date,
    originalPrice: PropTypes.number,
    salePrice: PropTypes.number,
    discount: PropTypes.number,
    offerTimeRemaining: PropTypes.number,
    duringInitialOffer: PropTypes.bool,
    duringReopenOffer: PropTypes.bool,
    betweenOffers: PropTypes.bool,
    afterOffers: PropTypes.bool,
    dispatch: PropTypes.func,
    productId: PropTypes.string,
    productIdVip: PropTypes.string,
    abandonListId: PropTypes.number,
    email: PropTypes.string
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  addToCart = () => {
    const {
      email,
      abandonListId,
      originalPrice,
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      dispatch,
      productId
    } = this.props;

    track(CLICKED_CHECKOUT, {
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
      productId,
      userId: leadId,
      vip: false
    });

    let checkoutUrl = `/checkout/?id=${productId}`;

    if (email) {
      const data = {
        email,
        abandonListId,
        productId
      };

      const contactQuery = `&contact=${this.props.email}`;
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`;
      }

      addToAbandonList(this.props.dispatch, data);
    }

    return document.location = checkoutUrl;
  };

  addToCartVip = () => {
    const {
      email,
      abandonListId,
      originalPrice,
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringReopenOffer,
      duringInitialOffer,
      leadId,
      dispatch,
      productId,
      productIdVip
    } = this.props;

    track(CLICKED_CHECKOUT, {
      salePrice,
      abandoned,
      affiliate,
      betweenOffers,
      afterOffers,
      offerTimeRemaining,
      duringInitialOffer,
      duringReopenOffer,
      productId: productId,
      userId: leadId,
      vip: true
    });

    let checkoutUrl = `https://eliteguardtraining.com/checkout/?id=${productId},${productIdVip}`;

    if (email) {
      const data = {
        email,
        abandonListId,
        productIdVip
      };

      const contactQuery = `&contact=${this.props.email}`;
      if (contactQuery) {
        checkoutUrl = `${checkoutUrl}${contactQuery}`;
      }

      addToAbandonList(this.props.dispatch, data);
    }

    return document.location = checkoutUrl;
  };

  render() {
    const {
      originalPrice,
      salePrice,
      discount,
      videoId,
      experiments
    } = this.props;

    const experimentVariation = experiments.get(optionsExperiment);
    const showButtons = (experimentVariation === OPTIONS_SHORT) ? false : true;
    const showExtraSections = showButtons;

    return (
      <div>

        <OptionsBigTextIntro videoId={videoId}/>

        <Section arrowDown={black} theme="grey">
          <Grid>
            <Row>
              <Col xs={12}>
                <PackageTable originalPrice={originalPrice}
                  salePrice={salePrice}
                  discount={discount}
                  addToCart={this.addToCart}
                  addToCartVip={this.addToCartVip}
                  showButtons={showButtons}/>
              </Col>
            </Row>
          </Grid>
        </Section>

        {showExtraSections &&
          <div>
            <Section>
              <Grid>
                <Row>
                  <Col xs={12}>
                    <SamePrice/>
                  </Col>
                </Row>
              </Grid>
            </Section>
            <Section theme="black">
              <Grid>
                <Row>
                  <Col xs={12}>
                    <Testimonial/>
                  </Col>
                </Row>
              </Grid>
            </Section>
            <Guarantee/>
          </div>
        }

        <Section>
          <Grid>
            <Row>
              <Col xs={12}>
                <CallToAction originalPrice={originalPrice}
                  salePrice={salePrice}
                  discount={discount}
                  addToCart={this.addToCart}
                  addToCartVip={this.addToCartVip}/>
              </Col>
            </Row>
          </Grid>
        </Section>

      </div>
    );
  }
}
