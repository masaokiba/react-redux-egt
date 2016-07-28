import {headerStack, accuBold, accuBlack} from './fonts';
import {yellow, orange, white, black} from 'universal/styles/colors';

export const button = {
  maxWidth: '85%',
  display: 'block',
  textAlign: 'center',
  textTransform: 'none',
  verticalAlign: 'middle',

  color: black,
  fontFamily: headerStack,
  fontWeight: accuBold,
  fontStyle: 'italic',
  fontSize: '1em',
  lineHeight: '1em',
  minHeight: '1.6em',

  marginTop: '0',
  marginBottom: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '.2em',
  outline: 'none',

  borderRadius: '2em',
  border: '2px solid #db4d07',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,1)',

  background: 'linear-gradient(to bottom, #FAEC23 0%,#f4e67f 50%,#f2c900 51%,#ea8c00 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#FAEC23\', endColorstr=\'#ea8c00\',GradientType=0 )',

  transitionProperty: 'all',
  transitionDuration: '.25s',
  transitionTimingFunction: 'linear',

  cursor: 'pointer',
  ':hover': {
    color: black,
    background: 'linear-gradient(to bottom, #FFF99B 0%,#f4e67f 50%,#f2c900 51%,#F76B1C 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#FFF99B\', endColorstr=\'#F76B1C\',GradientType=0 )',
    textDecoration: 'none',
    boxShadow: '0px 0px 20px 0px #e35927',
  }
};

export const activeButton = {
  maxWidth: '85%',
  display: 'block',
  textAlign: 'center',
  textTransform: 'none',
  verticalAlign: 'middle',

  color: white,
  fontFamily: headerStack,
  fontWeight: accuBold,
  fontStyle: 'italic',
  fontSize: '1em',
  lineHeight: '1em',
  minHeight: '1.6em',

  marginTop: '0',
  marginBottom: '0',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '.2em',
  outline: 'none',

  borderRadius: '2em',
  border: '2px solid #db4d07',
  boxShadow: '0px 0px 20px 0px #e35927',

  background: `linear-gradient(to bottom, #FFF99B 0%,${orange} 50%,${orange} 51%,${orange} 100%)`,
  filter: `progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#FFF99B\', endColorstr=\'${orange}\',GradientType=0 )`,

  transitionProperty: 'all',
  transitionDuration: '.25s',
  transitionTimingFunction: 'linear',
  ':hover': {
    textDecoration: 'none'
  }
};

export const landingPageButton = {
  display: 'block',
  textAlign: 'center',
  verticalAlign: 'middle',

  color: black,
  fontFamily: headerStack,
  fontWeight: accuBlack,
  fontSize: 22,
  lineHeight: '1em',
  minHeight: '2em',

  marginTop: '.25em',
  marginBottom: '.25em',
  marginLeft: 'auto',
  marginRight: 'auto',
  padding: '.5em',
  outline: 'none',

  borderRadius: '.5em',
  border: '2px solid #db4d07',
  boxShadow: '0px 0px 10px 0px rgba(0,0,0,1)',

  background: 'linear-gradient(to bottom, #FAEC23 0%,#f4e67f 50%,#f2c900 51%,#ea8c00 100%)',
  filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#FAEC23\', endColorstr=\'#ea8c00\',GradientType=0 )',

  transitionProperty: 'all',
  transitionDuration: '.25s',
  transitionTimingFunction: 'linear',

  cursor: 'pointer',
  ':hover': {
    color: black,
    background: 'linear-gradient(to bottom, #FFF99B 0%,#f4e67f 50%,#f2c900 51%,#F76B1C 100%)',
    filter: 'progid:DXImageTransform.Microsoft.gradient( startColorstr=\'#FFF99B\', endColorstr=\'#F76B1C\',GradientType=0 )',
    textDecoration: 'none',
    boxShadow: '0px 0px 20px 2px #e35927'
  },
  '@media (min-width: 768px)': {
    fontSize: '36px'
  },
  '@media (min-width: 992px)': {
    fontSize: '48px'
  },
  '@media (min-width: 1200px)': {
    fontSize: '54px'
  }
};

