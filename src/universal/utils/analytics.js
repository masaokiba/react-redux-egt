import funnel from './funnel';
import version from './version';
import EventEmitter from 'events';
import moment from 'moment';

const analyticsEvents = new EventEmitter();

const adwordsConversionID = 958454697;
const adwordsConversionLabel = "BXdrCNfmnwMQqbeDyQM";

// Experiment Analytics
export const VIEWED_EXPERIMENT = 'Viewed Experiment';
export const VIEWED_MULTIVARIANT_EXPERIMENT = 'Viewed Multivariant Experiment';

// Funnel Analytics
export const ENTERED_FUNNEL = 'Entered Funnel';
export const ADDED_TO_CART = 'Added To Cart';
export const LEAD_CREATED = 'Lead Created';
export const LEAD_RETURNED = 'Lead Returned';
export const LEAD_SUBMITTED = 'Lead Submitted';
export const CLICKED_CHECKOUT = 'Clicked Checkout';
export const CLICKED_SEND_WORKOUT = 'Clicked Send Workout';

// Jump Funnel Analytics
export const SELECTED_AGE = 'Selected Age';
export const SELECTED_JUMP_POSITION = 'Selected Jump Position';
export const SELECTED_BODY_TYPE = 'Selected Body Type';
export const SELECTED_JUMP_FEET = 'Selected Jump Feet';
export const SELECTED_VERTICAL_REACH = 'Selected Vertical Reach';
export const SCROLLED_TO_CALL_TO_ACTION = 'Scrolled To Call To Action';

// Video Analytics
export const VIDEO_PLAYED = 'Video Played';
export const VIDEO_PAUSED = 'Video Paused';
export const VIDEO_CROSSED_TIME = 'Video Crossed Time';
export const VIDEO_ENDED = 'Video Ended';

// Page Analytics
export const LANDER_PAGE = 'Lander';
export const OPTIONS_PAGE = 'Options';
export const SALE_PAGE = 'Sale';
export const PROMO_PAGE = 'Promo';
export const DOWNSELL_PAGE = 'Downsell';
export const PRELAUNCH_PAGE = 'Pre-Launch';

const pageString = (page) => {
  return `Viewed ${page} Page`;
};

export const setSuperProps = (superProps) => {
  if (typeof window !== 'undefined') {
    window.superProps = Object.assign({}, window.superProps, superProps);

    if (typeof mixpanel !== 'undefined') {
      mixpanel.register(superProps);
    }
  }
};

export const getSuperProps = () => {
  if (typeof window !== 'undefined') {
    return window.superProps || {};
  }
};

setSuperProps({
  funnel: funnel.name,
  version: version
});

const prepareAnalyticsData = (data) => {
  return Object.assign({}, getSuperProps(), data);
};

// =============== API =================
export const alias = (id) => {
  !__PRODUCTION__ && window.console && console.log('alias', id);
  mixpanelAlias(id);
};
export const exception = (description, fatal = false) => {
  !__PRODUCTION__ && window.console && console.log('exception', eventName, data);
  analyticsEvents.emit('exception', {description, fatal});
  gaException(description, fatal);
}
export const identify = (id, data) => {
  !__PRODUCTION__ && window.console && console.log('identify', id, data);
  maropostIdentify(data);
  mixpanelIdentify(id, data);
  gaIdentify(data.id)
};
export const page = (pageName, data) => {
  !__PRODUCTION__ && window.console && console.log('page', pageName, data);
  analyticsEvents.emit(pageName, prepareAnalyticsData(data));
  mixpanelPage(pageName, data);
  adRollTrack(prepareAnalyticsData(Object.assign({}, data, {page: pageString(pageName)})));
  maropostTrack()
};
export const timing = (timingCategory, timingVar, timingValue, timingLabel, fields) => {
  !__PRODUCTION__ && window.console && console.log('Timing: ', timingCategory, timingVar, timingValue, timingLabel, fields);
  analyticsEvents.emit('timing', {timingCategory, timingVar, timingValue, timingLabel, fields});
  gaTiming(timingCategory, timingVar, timingValue, timingLabel, fields);
};
export const track = (eventName, data) => {
  !__PRODUCTION__ && window.console && console.log('track', eventName, data);
  analyticsEvents.emit(eventName, prepareAnalyticsData(data));
  mixpanelTrack(eventName, data);
};


// ******************** AdRoll ************************
const adRollTrack = (event, data) => {
  if (__PRODUCTION__ && typeof __adroll !== 'undefined') {
    __adroll.record_user(data);
  }
};


// ******************** AdWords ************************
const adwordsConversion = (id, label, value) => {
  if (__PRODUCTION__) {
    if (typeof(value) === 'undefined') {
      value = 0;
    }
    const base_url = '//www.googleadservices.com/pagead/conversion/';
    const img = new Image(1,1);
    img.src = base_url + id +'/?label='+label+'&value='+ value +'&script=0';
  }
};


// ******************** Facebook ***********************
const fbTrack = (eventName) => {
  if (__PRODUCTION__ && typeof fbq !== 'undefined') {
    fbq('track', eventName);
  }
}


// ****************** Google Analytics ******************
const gaEvent = (eventName) => {
  if (__PRODUCTION__ && typeof ga !== 'undefined') {
    ga('send', 'event', funnel.name, eventName);
  }
}
const gaIdentify = (id) => {
  if (__PRODUCTION__ && typeof ga !== 'undefined') {
    ga('set', 'userId', id)
  }
};
const gaPage = (pageName, data) => {
  if (__PRODUCTION__ && typeof ga !== 'undefined') {
    const pageOptions = {
      hitType: 'pageview'
    };
    const analyticsData = Object.assign({}, pageOptions, data);
    ga('set', 'page', data.page);
    ga('send', analyticsData);
  }
}
// gaTiming('JS Dependencies', 'load', 3549)
const gaTiming = (timingCategory, timingVar, timingValue, timingLabel, fields) => {
  if (__PRODUCTION__ && typeof ga !== 'undefined') {
    ga('send', 'timing', timingCategory, timingVar, timingValue, timingLabel, fields);
  }
}

// ******************** Maropost ***********************
const maropostAccountId = 196;
const maropostListId = 51;
const maropostAPIKey = '2207ac283b22b20a36c325a735f337148915d520';
const maropostTrack = () => {
  if (__PRODUCTION__ && typeof maropostInitTracking !== 'undefined') {
    maropostInitTracking(maropostAccountId, maropostListId, maropostAPIKey);
  }
}

const maropostIdentify = (user) => {
  if (__PRODUCTION__ && typeof maropostInitTracking !== 'undefined') {
    window._maro_contact = {
      // Email is a required attribute.
      email: user.email // This identifies the user on your application, as a contact in Maropost.
    };
    maropostInitTracking(maropostAccountId, maropostListId, maropostAPIKey);
  }
}


// ******************** MixPanel ***********************
const mixpanelAlias = (id) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    mixpanel.alias(id);
  }
};
const mixpanelAppend = (category, eventName) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    mixpanel.people.append(category, eventName);
  }
};
const mixpanelIdentify = (id, peopleProperties) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    mixpanel.identify(id);

    // https://mixpanel.com/help/questions/articles/special-or-reserved-properties
    //     Special properties for Mixpanel People records

    // Email ($email) - The user's email address. You must set this property if you want to send users email from Mixpanel People.
    // Phone ($phone) - The user's phone number. You must set this property if you want to send users SMS from Mixpanel People.
    // $distinct_id The user's distinct_id. This property value should be identical to the distinct_id property attached to events so that you can connect events to people records.
    // $ios_devices List of user's Apple Push Notification service device tokens for iOS push. Our iOS client library has methods to manage this property for you.
    // $android_devices List of user's Google Cloud Messaging registration IDs for Android push. Our Android client library has methods to manage this property for you.
    // $first_name, $last_name, $name User's first and last names, as well as a general name. These are primarily useful because we will use them, if available, in a few spots in our reports.
    // City ($city) - The city of the event sender, parsed from IP.
    // Region ($region) - The region (state or province) of the event sender, parsed from IP.
    // Country ($country_code) - The country of the event sender, parsed from IP.
    // Timezone ($timezone) - The timezone of the event sender, parsed from IP. If set, notifications can be scheduled to be sent based on a user's timezone.
    // Unsubscribed ($unsubscribed) - If this property is set to any value, a user will be unsubscribed from Mixpanel email notifications.

    const renameProperty = function (obj, oldName, newName) {
      // Do nothing if the names are the same
      if (oldName === newName) {
         return obj;
      }
      // Check for the old property name to avoid a ReferenceError in strict mode.
      if (obj.hasOwnProperty(oldName)) {
        obj[newName] = obj[oldName];
        delete obj[oldName];
      }
      return obj;
    };

    renameProperty(peopleProperties, 'email', '$email');
    renameProperty(peopleProperties, 'phone', '$phone');
    renameProperty(peopleProperties, 'firstName', '$first_name');
    renameProperty(peopleProperties, 'lastName', '$last_name');
    renameProperty(peopleProperties, 'name', '$name');
    renameProperty(peopleProperties, 'city', '$city');
    renameProperty(peopleProperties, 'region', '$region');
    renameProperty(peopleProperties, 'country', '$country_code');
    renameProperty(peopleProperties, 'timezone', '$timezone');

    mixpanel.people.set(peopleProperties);
  }
};
const mixpanelIncrement = (eventName, incrementValue) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    mixpanel.people.increment(eventName, incrementValue)
  }
};
const mixpanelPage = (pageName, data) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    let eventName = pageString(pageName);
    mixpanelTrack(eventName, data);
    mixpanelIncrement(eventName);
    mixpanelAppend('Pages Visited', `${funnel.name} - pageName`);
  }
};
const mixpanelTrack = (eventName, data) => {
  if (__PRODUCTION__ && typeof mixpanel !== 'undefined') {
    mixpanel.track(eventName, data);
  }
};

const twitterConversion = () => {
  if (__PRODUCTION__ && typeof twttr !== 'undefined') {
    twttr.conversion.trackPid('l6207', { tw_sale_amount: 0, tw_order_quantity: 0 });
  }
}


// Lander
analyticsEvents.on(LANDER_PAGE, (data) => {
  fbTrack('PageView');

  // Google Analytics
  let pageTitle = `${funnel.name} - ${LANDER_PAGE}`;
  let pageData = {
    page: document.location.pathname,
    location: document.location.href,
    title: pageTitle
  };
  let superProps = getSuperProps();
  if (superProps.utm_source) {
    pageData.dimension4 = superProps.utm_source;
  }
  gaPage(pageTitle, pageData);

});
analyticsEvents.on(CLICKED_SEND_WORKOUT, (data) => {
  gaEvent(CLICKED_SEND_WORKOUT);
});
analyticsEvents.on(LEAD_SUBMITTED, (data) => {
  gaEvent(LEAD_SUBMITTED);
});
analyticsEvents.on(LEAD_CREATED, (data) => {
  fbTrack('Lead');
  gaEvent(LEAD_CREATED);
  twitterConversion();
});

// Sale
// Should send in "gaProduct" as data property when tracking SALE_PAGE
analyticsEvents.on(SALE_PAGE, (data) => {
  // Facebook pixel
  fbTrack('PageView');

  // adwords
  adwordsConversion(adwordsConversionID, adwordsConversionLabel);

  // Google Analytics
  let pageTitle = `${funnel.name} - ${SALE_PAGE}`;
  let pageData = {
    page: document.location.pathname,
    location: document.location.href,
    title: pageTitle
  };
  let superProps = getSuperProps();
  if (data.gaProduct) {
    pageData.dimension1 = data.gaProduct;
  }
  if (superProps.utm_source) {
    pageData.dimension4 = superProps.utm_source;
  }
  if (superProps.utm_campaign) {
    pageData.dimension8 = superProps.utm_campaign;
  }
  pageData.dimension8 = superProps.utm_content || moment().format('DDMMYY');
  gaPage(pageTitle, pageData);
});
analyticsEvents.on(ADDED_TO_CART, (data) => {
  fbTrack('AddToCart');
  gaEvent(ADDED_TO_CART);
});


// Options
analyticsEvents.on(OPTIONS_PAGE, (data) => {
  // Facebook pixel
  fbTrack('PageView');

  // Google Analytics
  let pageTitle = `${funnel.name} - ${OPTIONS_PAGE}`;
  gaPage(pageTitle, {
    page: document.location.pathname,
    location: document.location.href,
    title: pageTitle
  });

});
analyticsEvents.on(CLICKED_CHECKOUT, (data) => {
  fbTrack('InitiateCheckout');
  gaEvent(CLICKED_CHECKOUT);
});

// Google Analytics Dimensions
// ---------------------------

// Dimension 1 - should be the same as the page title and only goes on the sale page on each funnel and any future promo pages "EJT Sale Page", "USB Promo Page" and so on.  Also differentiate the "special" cases so you'd have "EJT Aff" or "EJT Sale Abandons Page" "Signature Sale Abandons Page" and so on.
// Dimension 4 - should be on the lander and on the sale page and any promo pages, it is the value of utm_source or source query parameter.
// Dimension 8 - should be on any sale pages and any promo pages.  It should set the value from the "utm_campaign" query parameter in the URL
// Dimension 3 - should be set on the sale pages of both funnels and any promo pages.  This should account for multiple sources of input, one is the "utm_content" parameter which will sometimes be in the sales page URL when they come from email links. Or in the case where they just opted in and came from the lander, it would be the date they opted in, in the format DDMMYY.
