import React, {PropTypes, Component} from 'react';
import Product from 'universal/modules/Product/components/Product/Product';
import {connect} from 'react-redux';
import {ensureState} from 'redux-optimistic-ui';
import shallowCompare from 'react-addons-shallow-compare';
import {jumpTypes} from 'universal/types/jumpTypes';
import {_getOfferState} from 'universal/utils/calculateOfferState';
import moment from 'moment';

@connect(mapStateToProps)
export default class ProductContainer extends Component {
  static propTypes = {
    children: PropTypes.element.isRequired,
    jumpType: PropTypes.string,
    email: PropTypes.string,
    split: PropTypes.number,
    affiliate: PropTypes.bool,
    abandon: PropTypes.bool
  };

  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    let originalPrice = 197,
      salePrice = 197,
      discount = 0,
      productId = 'EJTSTEIN',
      abandonListId = 36518,
      videoId = 'h50hndvn64',
      countdownText;

    let {
      jumpType,
      createdAt,
    } = this.props;

    let promo = {};

    if (createdAt) {
      const initialOfferStartDate = createdAt;
      const initialOfferEndDate = moment(initialOfferStartDate).add(11, 'hours').add(46, 'minutes').toDate();
      const reopenOfferStartDate = moment(initialOfferStartDate).add(3, 'days').startOf('day').toDate();
      const reopenOfferEndDate = moment(reopenOfferStartDate).add(2, 'days').endOf('day').toDate();

      // TEST VALUES
      // const initialOfferEndDate = moment(initialOfferStartDate).add(600, 'seconds').toDate();

      // const reopenOfferStartDate = moment(initialOfferEndDate).add(1000, 'seconds').toDate();
      // const reopenOfferEndDate = moment(reopenOfferStartDate).add(440, 'seconds').toDate();

      promo = {
        promoOffer: true,
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate
      };

      // TODO: this needs to be refactored. This is a hacky way to get state.
      if (this.props.duringInitialOffer === false &&
          this.props.duringReopenOffer === false &&
          this.props.betweenOffers === false &&
          this.props.afterOffers === false) {
        let offerState = _getOfferState(promo);
        this.props = Object.assign({}, this.props, offerState);
      }
    }

    let {
      split,
      email,
      duringInitialOffer,
      duringReopenOffer,
      betweenOffers,
      afterOffers,
      abandoned,
      affiliate
    } = this.props;

    if (afterOffers) {
      salePrice = 197;
      discount = 0;
      productId = 'EJTSTEIN';
    }

    if (duringInitialOffer || duringReopenOffer || abandoned || affiliate || betweenOffers) {
      switch (split) {
        case 1:
          salePrice = abandoned ? 35.25 : 47;
          productId = abandoned ? 'EJTALAN47AB' : 'EJTALAN47';
          break;

        case 2:
          salePrice = abandoned ? 50.25 : 67;
          productId = abandoned ? 'EJTALAN67AB' : 'EJTALAN67';
          break;

        case 3:
          salePrice = abandoned ? 72.75 : 97;
          productId = abandoned ? 'EJTALANAB' : 'EJTALAN';
          break;

        default:
          salePrice = abandoned ? 147.75 : 197;
          productId = abandoned ? 'EJTSTEINAB' : 'EJTSTEIN';
          break;
      }

      if (affiliate) {
        salePrice = 97;
        productId = 'EJTALAN';
      }

      discount = 100 - Math.ceil(salePrice / originalPrice * 100);
      let dollarOff = originalPrice - salePrice;
      countdownText = abandoned ? 'Extra 25% <br class="hidden-sm hidden-xs"/> Discount' :
        `$${dollarOff} Discount <br class="hidden-sm hidden-xs"/> Expires In...`;

      if (betweenOffers) {
        countdownText = `Offer has <br class="hidden-sm hidden-xs"/> Expired...`;
      }
    }

    switch (jumpType) {
      case jumpTypes.STRENGTH:
        videoId = 'wopouoeh9r';
        break;

      case jumpTypes.SPRING:
        videoId = 'mcss5c5k6y';
        break;

      case jumpTypes.SPEED:
        videoId = 'wji1fgsz3w';
        break;

      default:
        videoId = 'h50hndvn64';
        break;
    }

    if (affiliate) {
      videoId = 'h50hndvn64';
    }

    const product = {
      originalPrice,
      salePrice,
      discount,
      productId,
      abandonListId,
      videoId,
      countdownText
    };

    return <Product {...this.props} {...product} {...promo}/>;
  }
}

function mapStateToProps(state, props) {
  state = ensureState(state);
  const promo = state.get('promo');
  const leads = state.get('leads');
  const lead = leads.get('lead');
  const location = props.location;
  const experiments = state.get('experiments');

  let mappedProps = {
    jumpType: lead.get('jumpType'),
    createdAt: lead.get('createdAt') ? new Date(lead.get('createdAt')) : null,
    createdAsAbandon: lead.get('createdAsAbandon') || false,
    split: lead.get('split') || 0,
    email: lead.get('email') || location.query.contact || location.query['contact_fields[email]'] || undefined,
    leadId: lead.get('id'),
    offerTimeRemaining: promo.get('offerTimeRemaining'),
    duringInitialOffer: promo.get('duringInitialOffer'),
    duringReopenOffer: promo.get('duringReopenOffer'),
    betweenOffers: promo.get('betweenOffers'),
    afterOffers: promo.get('afterOffers'),
    abandoned: (location.query.special === 'ab') ? true : location.query.abandon || false,
    affiliate: (location.query.special === 'aff') ? true : false,
    experiments: experiments.get('experiments') || null
  };

  return mappedProps;
}
