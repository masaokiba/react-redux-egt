import React, {PropTypes, Component} from 'react';
import Promo from 'universal/modules/Product/components/Product/Promo';
import {connect} from 'react-redux';
import {ensureState} from 'redux-optimistic-ui';
import shallowCompare from 'react-addons-shallow-compare';
import {jumpTypes} from 'universal/types/jumpTypes';
import {_getOfferState} from 'universal/utils/calculateOfferState';
import moment from 'moment';

@connect(mapStateToProps)
export default class PromoContainer extends Component {
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
    let startDate = moment('2016 07 03', 'YYYY MM DD').startOf('day').toDate(),
      endDate = moment('2016 07 07', 'YYYY MM DD').endOf('day').toDate(),
      originalPrice = 97,
      salePrice = 47,
      discount = 100 - Math.ceil(salePrice / originalPrice * 100),
      productId = 'EGT4WFS',
      productIdVip = 'VIPFREETRIAL',
      abandonListId = 51543,
      videoId = 'yzahn8djgt',
      optionsVideoId,
      countdownText;

    if (this.props.pureSweat) {
      startDate = moment().startOf('day').toDate();
      endDate = moment('2016 07 18', 'YYYY MM DD').endOf('day').toDate();
    }

    let promo = {};

    if (startDate) {
      const initialOfferStartDate = startDate;
      const initialOfferEndDate = endDate;
      const reopenOfferStartDate = moment('2016 07 10', 'YYYY MM DD').startOf('day').toDate();
      const reopenOfferEndDate = moment(reopenOfferStartDate).endOf('day').toDate();

      promo = {
        promoOffer: true,
        initialOfferStartDate,
        initialOfferEndDate,
        reopenOfferStartDate,
        reopenOfferEndDate
      };

      // TODO: this needs to be refactored. This is a hacky way to get state.
      // reselect and calculating in mapStateToProps seems promising
      if (this.props.duringInitialOffer === false &&
          this.props.duringReopenOffer === false &&
          this.props.betweenOffers === false &&
          this.props.afterOffers === false) {
        let offerState = _getOfferState(promo);
        this.props = Object.assign({}, this.props, offerState);
      }
    }

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

    if (afterOffers) {
      salePrice = 197;
      discount = 0;
      productId = 'EGT4WFS';
    }

    if (duringInitialOffer || duringReopenOffer || abandoned || affiliate || betweenOffers || reopen || reopenTwo) {

     salePrice = abandoned ? 35.25 : salePrice;
     productId = abandoned ? 'EGT4WFSAB' : 'EGT4WFS';

      if (affiliate) {
        salePrice = 97;
        productId = 'EGT4WFS';
      }

      discount = 100 - Math.ceil(salePrice / originalPrice * 100);
      let dollarOff = originalPrice - salePrice;
      countdownText = abandoned ? 'Extra 25% <br class="hidden-sm hidden-xs"/> Discount' :
        `$${dollarOff} Off Sale <br class="hidden-sm hidden-xs"/> Ends In...`;

      if (betweenOffers) {
        countdownText = `Sale has <br class="hidden-sm hidden-xs"/> Ended...`;
      }
    }

    if (beforeOffer) {
      countdownText = `Sale Begins <br class="hidden-sm hidden-xs"/> In...`;
    }

    const product = {
      originalPrice,
      salePrice,
      discount,
      productId,
      productIdVip,
      abandonListId,
      videoId,
      countdownText,
      optionsVideoId
    };

    return <Promo {...this.props} {...product} {...promo}/>;
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
    beforeOffer: promo.get('beforeOffer'),
    duringInitialOffer: promo.get('duringInitialOffer'),
    duringReopenOffer: promo.get('duringReopenOffer'),
    betweenOffers: promo.get('betweenOffers'),
    afterOffers: promo.get('afterOffers'),
    abandoned: (location.query.special === 'ab') ? true : location.query.abandon || false,
    affiliate: (location.query.special === 'aff') ? true : false,
    pureSweat: (location.query.special === 'PS') ? true : false,
    experiments: experiments.get('experiments') || null
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

