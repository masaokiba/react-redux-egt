import {setExperiment} from '../ducks/experiments';
import url from 'url';

export const experimentName = 'PresaleVideo';
export const ALAN_JUMP_ROPE = 'alan-jump-rope';
export const ALAN_STRETCHES = 'alan-stretches';
export const OLD_MAN_ALAN = 'old-man-alan';

const experimentCookieKey = 'egt.4wfs.presale_video';

const variations = {
  ALAN_JUMP_ROPE: (store) => {
    store.dispatch(setExperiment(experimentName, ALAN_JUMP_ROPE));
  },
  ALAN_STRETCHES: (store) => {
    store.dispatch(setExperiment(experimentName, ALAN_STRETCHES));
  },
  OLD_MAN_ALAN: (store) => {
    store.dispatch(setExperiment(experimentName, OLD_MAN_ALAN));
  }
};

const variationsList = Object.keys(variations);

const getVariation = (value = 0) => {
  return variationsList[value];
};

const shouldActivate = () => {
  return true;
};

const shouldUrlActivate = (presale) => {
  switch(presale) {
    case ALAN_JUMP_ROPE:
      return 'ALAN_JUMP_ROPE';
    case ALAN_STRETCHES:
      return 'ALAN_STRETCHES';
    case OLD_MAN_ALAN:
      return 'OLD_MAN_ALAN';
    default:
      return false;
  }
}


const config = {
  activate: (req, res, store) => {
    console.log('info', 'checking to see if experiment should be activated');
    if (shouldActivate(req)) {
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
  urlActivate: (req, res, store) => {
    console.log('info', 'checking to see if url experiment should be activated');
    const urlParts = url.parse(req.url, true);
    const presale = urlParts.query.presale;
    console.log(urlParts);
    console.log('********************** PRESALE', presale)
    const activationKey = shouldUrlActivate(presale);
    if (activationKey) {
      console.log('info', 'matched url activation criteria')
      let splitValue = presale;
      console.log('info', 'split test', {splitValue});
      return variations[activationKey](store);
    } else {
      throw new Error('URL Experiment did not meet activation requirements.');
    }
  },
  name: experimentName
};

export default config;
