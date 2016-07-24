import {setExperiment} from '../ducks/experiments';

export const experimentName = 'SalePageLength';
export const CONTROL = 'Control';
export const SHORT_V1 = 'Short V1';
export const SHORT_V2 = 'Short V2';
export const SHORT_V3 = 'Short V3';
export const SHORT_V4 = 'Short V4';
export const SHORT_V5 = 'Short V5';

const experimentCookieKey = 'egt.4wfs.0.sale_page_length';

const variations = {
  CONTROL: (store) => {
    store.dispatch(setExperiment(experimentName, CONTROL));
  },
  SHORT_V1: (store) => {
    store.dispatch(setExperiment(experimentName, SHORT_V1));
  },
  SHORT_V2: (store) => {
    store.dispatch(setExperiment(experimentName, SHORT_V2));
  },
  SHORT_V3: (store) => {
    store.dispatch(setExperiment(experimentName, SHORT_V3));
  },
  SHORT_V4: (store) => {
    store.dispatch(setExperiment(experimentName, SHORT_V4));
  },
  SHORT_V5: (store) => {
    store.dispatch(setExperiment(experimentName, SHORT_V5));
  }
};

const variationsList = Object.keys(variations);

const getVariation = (value = 0) => {
  return variationsList[value];
};

const shouldActivate = () => {
  return true;
};

const config = {
  activate: (req, res, store) => {
    console.log('info', 'checking to see if experiment should be activated');
    if (shouldActivate()) {
      console.log('info', 'matched activation criteria')

      let splitValue = req.cookies && req.cookies[experimentCookieKey];
      if (splitValue) {
        console.log('info', `cookie exists`, {cookie: {name: experimentCookieKey, value: splitValue}});
      } else {
        splitValue = getVariation(Math.floor(Math.random() * variationsList.length));
        res.cookie(experimentCookieKey, splitValue, { maxAge: 900000 });
        console.log('info', 'cookie created successfully', {cookie: {name: experimentCookieKey, value: splitValue}});
      }

      console.log('info', 'split test', {splitValue});
      return variations[splitValue](store);
    } else {
      throw new Error('Experiment did not meet activation requirements.');
    }
  },
  name: experimentName
};

export default config;
