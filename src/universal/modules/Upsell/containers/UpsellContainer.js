import React, {PropTypes, Component} from 'react';
import {Row, Col, Grid} from 'react-bootstrap';
import Upsell from '../components/Upsell/Upsell';
import {connect} from 'react-redux';
import {ensureState} from 'redux-optimistic-ui';
import shallowCompare from 'react-addons-shallow-compare';
import {jumpTypes} from 'universal/types/jumpTypes';
import {_getOfferState} from 'universal/utils/calculateOfferState';
import moment from 'moment';
import ejtImage from 'universal/images/ejt-collection-upsell.png';
import sigImage from 'universal/images/signature-collection-upsell.png';
import proCoachImage from 'universal/images/pro-coach-collection-upsell.png';

@connect(mapStateToProps)
export default class UpsellContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    jumpType: PropTypes.string,
    email: PropTypes.string,
    affiliate: PropTypes.bool,
    abandon: PropTypes.bool
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    let startDate,
      endDate,
      originalPrice = 0,
      salePrice = 0,
      discount = 0,
      upsellProducts = [
        {
          subtitle: '92% OFF',
          title: 'The EJT Collection',
          lead: 'With Coach Alan Stein',
          img: ejtImage,
          subheadline: 'Your Package Includes:',
          includes: [
            'Elite Jump Training (normally $197)',
            'Elite Speed Training (normally $97)',
            'Elite Upper Body Training (normally $97)',
            'JETS (normally $97)'
          ],
          normalPrice: 588,
          salePrice: 47,
          productId: 'EJTPKG5'
        },
        {
          subtitle: '83% OFF',
          title: 'The Signature Collection',
          lead: 'With Coach Taylor Allan',
          img: sigImage,
          subheadline: 'Your Package Includes:',
          includes: [
            'Elite Guard Training (normally $197)',
            'Elite Shooting (normally $97)',
            'Elite Scoring (normally $97)',
            'Elite Dribbling & Driving (normally $97)',
            'Elite Defense (normally $97)'
          ],
          normalPrice: 585,
          salePrice: 97,
          productId: 'EGTSIGNATURE97'
        },
        {
          subtitle: '90% OFF',
          title: 'The Pro Coach Collection',
          lead: 'With Damin Altizer, Bradley Beal and KP Potts',
          img: proCoachImage,
          subheadline: 'Your Package Includes:',
          includes: [
            'Advanced PG Training (normally $197)',
            'PG 21 (normally $97)',
            'PG Strength (normally $97)',
            'Beat Anybody Off The Dribble (normally $67)',
            'The Sniper Series (normally $197)'
          ],
          normalPrice: 655,
          salePrice: 47,
          productId: 'EGTPROPKG'
        }
      ]

    let promo = {};

    // if (startDate) {
    //   const initialOfferStartDate = startDate;
    //   const initialOfferEndDate = endDate;
    //   const reopenOfferStartDate = moment('2016 07 10', 'YYYY MM DD').startOf('day').toDate();
    //   const reopenOfferEndDate = moment(reopenOfferStartDate).endOf('day').toDate();

      // promo = {
      //   promoOffer: true,
        // initialOfferStartDate,
        // initialOfferEndDate,
        // reopenOfferStartDate,
        // reopenOfferEndDate
      // };

    //   // TODO: this needs to be refactored. This is a hacky way to get state.
    //   // reselect and calculating in mapStateToProps seems promising
    //   if (this.props.duringInitialOffer === false &&
    //       this.props.duringReopenOffer === false &&
    //       this.props.betweenOffers === false &&
    //       this.props.afterOffers === false) {
    //     let offerState = _getOfferState(promo);
    //     this.props = Object.assign({}, this.props, offerState);
    //   }
    // }

    let {
      email,
      beforeOffer,
      duringInitialOffer,
      duringReopenOffer,
      betweenOffers,
      afterOffers,
      abandoned,
      affiliate,
      reopen,
      reopenTwo
    } = this.props;

    // if (afterOffers) {
    //   salePrice = 197;
    //   discount = 0;
    //   productId = 'EGT4WFS';
    // }

    // if (duringInitialOffer || duringReopenOffer || abandoned || affiliate || betweenOffers || reopen || reopenTwo) {

    //  // salePrice = abandoned ? 35.25 : salePrice;
    //  // productId = abandoned ? 'EGT4WFSAB' : 'EGT4WFS';

    //   if (affiliate) {
    //     salePrice = 97;
    //     productId = 'EGT4WFS';
    //   }

    //   discount = 100 - Math.ceil(salePrice / originalPrice * 100);
    //   let dollarOff = originalPrice - salePrice;
    //   countdownText = abandoned ? 'Extra 25% <br class="hidden-sm hidden-xs"/> Discount' :
    //     `$${dollarOff} Off Sale <br class="hidden-sm hidden-xs"/> Ends In...`;

    //   if (betweenOffers) {
    //     countdownText = `Sale has <br class="hidden-sm hidden-xs"/> Ended...`;
    //   }
    // }

    // if (beforeOffer) {
    //   countdownText = `Sale Begins <br class="hidden-sm hidden-xs"/> In...`;
    // }

    const product = {
      originalPrice,
      salePrice,
      discount,
      upsellProducts
    };

    return <Upsell {...this.props} {...product} {...promo}/>;
  }
}

function mapStateToProps(state, props) {
  state = ensureState(state);
  const promo = state.get('promo');
  const leads = state.get('leads');
  const lead = leads.get('lead');
  const location = props.location;
  const experiments = state.get('experiments');
  const cart = state.get('cart');

  let mappedProps = {
    jumpType: lead.get('jumpType'),
    createdAt: lead.get('createdAt') ? new Date(lead.get('createdAt')) : null,
    createdAsAbandon: lead.get('createdAsAbandon') || false,
    split: lead.get('split') || 0,
    email: lead.get('email') || location.query.contact || location.query['contact_fields[email]'] || undefined,
    leadId: lead.get('id'),
    offerTimeRemaining: promo.get('offerTimeRemaining'),
    beforeOffer: promo.get('beforeOffer'),
    duringInitialOffer: promo.get('duringInitialOffer'),
    duringReopenOffer: promo.get('duringReopenOffer'),
    betweenOffers: promo.get('betweenOffers'),
    afterOffers: promo.get('afterOffers'),
    abandoned: (location.query.special === 'ab') ? true : location.query.abandon || false,
    affiliate: (location.query.special === 'aff') ? true : false,
    reopen: (location.query.special === 'ro') ? true : false,
    reopenTwo: (location.query.special === 'ro2') ? true : false,
    cart: cart.toJS()
  };

  return mappedProps;
}


// If timer should be based on lead creation date:
// const {createdAt} = this.props;

// if (this.props.reopen) {
//   startDate = moment('2016-6-6').startOf('day').toDate();
//   endDate = moment('2016-6-23').endOf('day').toDate();
// }

// if (this.props.reopenTwo) {
//   startDate = moment('2016-6-6').startOf('day').toDate();
//   endDate = moment('2016-6-12').endOf('day').toDate();
// }

// TEST VALUES
// const initialOfferEndDate = moment(initialOfferStartDate).add(600, 'seconds').toDate();
// const reopenOfferStartDate = moment(initialOfferEndDate).add(1000, 'seconds').toDate();
// const reopenOfferEndDate = moment(reopenOfferStartDate).add(440, 'seconds').toDate();

