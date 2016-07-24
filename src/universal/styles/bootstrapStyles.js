import {bodyStack, headerStack} from './fonts';

export const styles = {
  '*': {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box'
  },
  '*:before, *:after': {
    WebkitBoxSizing: 'border-box',
    MozBoxSizing: 'border-box',
    boxSizing: 'border-box'
  },
  html: {
    WebkitTapHighlightColor: 'rgba(0, 0, 0, 0)'
  },
  'h1, h2, h3, h4, h5, h6': {
    margin: '0 0 0 0',
    marginTop: 0,
    marginBottom: '.5rem',
  },
  'input, button, select, textarea': {
    fontFamily: 'inherit',
    fontSize: 'inherit',
    lineHeight: 'inherit'
  },
  a: {
    color: '#337ab7',
    textDecoration: 'none'
  },
  'a:hover, a:focus': {
    color: '#23527c',
    textDecoration: 'underline'
  },
  'a:focus': {
    outline: '5px auto -webkit-focus-ring-color',
    outlineOffset: -2
  },
  figure: {
    margin: 0
  },
  img: {
    verticalAlign: 'middle'
  },
  hr: {
    marginTop: 20,
    marginBottom: 20,
    border: 0,
    borderTop: '1px solid #eeeeee'
  },
  '[role="button"]': {
    cursor: 'pointer'
  },
  'small': {
    fontSize: '85%'
  },
  'mark': {
    backgroundColor: '#fcf8e3',
    padding: '.2em'
  },
  'ul, ol': {
    marginTop: 0,
    marginBottom: 10
  },
  'ul ul, ol ul, ul ol, ol ol': {
    marginBottom: 0
  },
  '.list-unstyled': {
    paddingLeft: 0,
    listStyle: 'none'
  },
  '.list-inline': {
    paddingLeft: 0,
    listStyle: 'none',
    marginLeft: -5
  },
  '.list-inline > li': {
    display: 'inline-block',
    paddingLeft: 5,
    paddingRight: 5
  },
  dl: {
    marginTop: 0,
    marginBottom: 20
  },
  'dt, dd': {
    lineHeight: 1.42857143
  },
  dt: {
    fontWeight: 'bold'
  },
  dd: {
    marginLeft: 0
  },
  'abbr[title], abbr[data-original-title]': {
    cursor: 'help',
    borderBottom: '1px dotted #777777'
  },
  blockquote: {
    padding: '10px 20px',
    margin: '0 0 20px',
    fontSize: 17,
    borderLeft: '5px solid #eeeeee'
  },
  'blockquote p:last-child, blockquote ul:last-child, blockquote ol:last-child': {
    marginBottom: 0
  },
  'blockquote footer, blockquote small, blockquote .small': {
    display: 'block',
    fontSize: '80%',
    lineHeight: 1.42857143,
    color: '#777777'
  },
  'blockquote footer:before, blockquote small:before, blockquote .small:before': {
    content: '0o2014 0o0A0'
  },
  '.blockquote-reverse, blockquote.pull-right': {
    paddingRight: 15,
    paddingLeft: 0,
    borderRight: '5px solid #eeeeee',
    borderLeft: 0,
    textAlign: 'right'
  },
  '.blockquote-reverse footer:before, blockquote.pull-right footer:before, .blockquote-reverse small:before, blockquote.pull-right small:before, .blockquote-reverse .small:before, blockquote.pull-right .small:before': {
    content: '\'\''
  },
  '.blockquote-reverse footer:after, blockquote.pull-right footer:after, .blockquote-reverse small:after, blockquote.pull-right small:after, .blockquote-reverse .small:after, blockquote.pull-right .small:after': {
    content: '0o00A0 0o2014'
  },
  address: {
    marginBottom: 20,
    fontStyle: 'normal',
    lineHeight: 1.42857143
  },
  '.container': {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 15,
    paddingRight: 15
  },
  '.container-fluid': {
    marginRight: 'auto',
    marginLeft: 'auto',
    paddingLeft: 15,
    paddingRight: 15
  },
  '.row': {
    marginLeft: -15,
    marginRight: -15
  },
  '.col-xs-1, .col-sm-1, .col-md-1, .col-lg-1, .col-xs-2, .col-sm-2, .col-md-2, .col-lg-2, .col-xs-3, .col-sm-3, .col-md-3, .col-lg-3, .col-xs-4, .col-sm-4, .col-md-4, .col-lg-4, .col-xs-5, .col-sm-5, .col-md-5, .col-lg-5, .col-xs-6, .col-sm-6, .col-md-6, .col-lg-6, .col-xs-7, .col-sm-7, .col-md-7, .col-lg-7, .col-xs-8, .col-sm-8, .col-md-8, .col-lg-8, .col-xs-9, .col-sm-9, .col-md-9, .col-lg-9, .col-xs-10, .col-sm-10, .col-md-10, .col-lg-10, .col-xs-11, .col-sm-11, .col-md-11, .col-lg-11, .col-xs-12, .col-sm-12, .col-md-12, .col-lg-12': {
    position: 'relative',
    minHeight: 1,
    paddingLeft: 15,
    paddingRight: 15
  },
  '.col-xs-1, .col-xs-2, .col-xs-3, .col-xs-4, .col-xs-5, .col-xs-6, .col-xs-7, .col-xs-8, .col-xs-9, .col-xs-10, .col-xs-11, .col-xs-12': {
    float: 'left'
  },
  '.col-xs-12': {
    width: '100%'
  },
  '.col-xs-11': {
    width: '91.66666667%'
  },
  '.col-xs-10': {
    width: '83.33333333%'
  },
  '.col-xs-9': {
    width: '75%'
  },
  '.col-xs-8': {
    width: '66.66666667%'
  },
  '.col-xs-7': {
    width: '58.33333333%'
  },
  '.col-xs-6': {
    width: '50%'
  },
  '.col-xs-5': {
    width: '41.66666667%'
  },
  '.col-xs-4': {
    width: '33.33333333%'
  },
  '.col-xs-3': {
    width: '25%'
  },
  '.col-xs-2': {
    width: '16.66666667%'
  },
  '.col-xs-1': {
    width: '8.33333333%'
  },
  '.col-xs-pull-12': {
    right: '100%'
  },
  '.col-xs-pull-11': {
    right: '91.66666667%'
  },
  '.col-xs-pull-10': {
    right: '83.33333333%'
  },
  '.col-xs-pull-9': {
    right: '75%'
  },
  '.col-xs-pull-8': {
    right: '66.66666667%'
  },
  '.col-xs-pull-7': {
    right: '58.33333333%'
  },
  '.col-xs-pull-6': {
    right: '50%'
  },
  '.col-xs-pull-5': {
    right: '41.66666667%'
  },
  '.col-xs-pull-4': {
    right: '33.33333333%'
  },
  '.col-xs-pull-3': {
    right: '25%'
  },
  '.col-xs-pull-2': {
    right: '16.66666667%'
  },
  '.col-xs-pull-1': {
    right: '8.33333333%'
  },
  '.col-xs-pull-0': {
    right: 'auto'
  },
  '.col-xs-push-12': {
    left: '100%'
  },
  '.col-xs-push-11': {
    left: '91.66666667%'
  },
  '.col-xs-push-10': {
    left: '83.33333333%'
  },
  '.col-xs-push-9': {
    left: '75%'
  },
  '.col-xs-push-8': {
    left: '66.66666667%'
  },
  '.col-xs-push-7': {
    left: '58.33333333%'
  },
  '.col-xs-push-6': {
    left: '50%'
  },
  '.col-xs-push-5': {
    left: '41.66666667%'
  },
  '.col-xs-push-4': {
    left: '33.33333333%'
  },
  '.col-xs-push-3': {
    left: '25%'
  },
  '.col-xs-push-2': {
    left: '16.66666667%'
  },
  '.col-xs-push-1': {
    left: '8.33333333%'
  },
  '.col-xs-push-0': {
    left: 'auto'
  },
  '.col-xs-offset-12': {
    marginLeft: '100%'
  },
  '.col-xs-offset-11': {
    marginLeft: '91.66666667%'
  },
  '.col-xs-offset-10': {
    marginLeft: '83.33333333%'
  },
  '.col-xs-offset-9': {
    marginLeft: '75%'
  },
  '.col-xs-offset-8': {
    marginLeft: '66.66666667%'
  },
  '.col-xs-offset-7': {
    marginLeft: '58.33333333%'
  },
  '.col-xs-offset-6': {
    marginLeft: '50%'
  },
  '.col-xs-offset-5': {
    marginLeft: '41.66666667%'
  },
  '.col-xs-offset-4': {
    marginLeft: '33.33333333%'
  },
  '.col-xs-offset-3': {
    marginLeft: '25%'
  },
  '.col-xs-offset-2': {
    marginLeft: '16.66666667%'
  },
  '.col-xs-offset-1': {
    marginLeft: '8.33333333%'
  },
  '.col-xs-offset-0': {
    marginLeft: '0%'
  },
  '.progress': {
    overflow: 'hidden',
    height: '3em',
    marginBottom: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 4,
    WebkitBoxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)',
    boxShadow: 'inset 0 1px 2px rgba(0, 0, 0, 0.1)'
  },
  '.progress-bar': {
    float: 'left',
    width: '0%',
    height: '100%',
    fontSize: '1.5rem',
    color: '#ffffff',
    textAlign: 'center',
    backgroundColor: '#337ab7',
    WebkitBoxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, 0.15)',
    boxShadow: 'inset 0 -1px 0 rgba(0, 0, 0, 0.15)',
    WebkitTransition: 'width 0.6s ease',
    OTransition: 'width 0.6s ease',
    transition: 'width 0.6s ease'
  },
  '.progress-striped .progress-bar, .progress-bar-striped': {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)',
    WebkitBackgroundSize: '40px 40px',
    backgroundSize: '40px 40px'
  },
  '.progress.active .progress-bar, .progress-bar.active': {
    WebkitAnimation: 'progress-bar-stripes 2s linear infinite',
    OAnimation: 'progress-bar-stripes 2s linear infinite',
    animation: 'progress-bar-stripes 2s linear infinite'
  },
  '.progress-bar-success': {
    backgroundColor: '#5cb85c'
  },
  '.progress-striped .progress-bar-success': {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
  },
  '.progress-bar-info': {
    backgroundColor: '#5bc0de'
  },
  '.progress-striped .progress-bar-info': {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
  },
  '.progress-bar-warning': {
    backgroundColor: '#f0ad4e'
  },
  '.progress-striped .progress-bar-warning': {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
  },
  '.progress-bar-danger': {
    backgroundColor: '#d9534f'
  },
  '.progress-striped .progress-bar-danger': {
    backgroundImage: 'linear-gradient(45deg, rgba(255, 255, 255, 0.15) 25%, transparent 25%, transparent 50%, rgba(255, 255, 255, 0.15) 50%, rgba(255, 255, 255, 0.15) 75%, transparent 75%, transparent)'
  },
  '.progress-bar > span:first-child': {
    position: 'absolute',
    left: '50%',
    marginLeft: '-78.5px',
    color: '#000',
    fontFamily: bodyStack,
    fontSize: '1em',
    lineHeight: '2.2em'
  },
  '.clearfix:before, .clearfix:after, .dl-horizontal dd:before, .dl-horizontal dd:after, .container:before, .container:after, .container-fluid:before, .container-fluid:after, .row:before, .row:after': {
    content: '" "',
    display: 'table'
  },
  '.clearfix:after, .dl-horizontal dd:after, .container:after, .container-fluid:after, .row:after': {
    clear: 'both'
  },
  '.pull-right': {
    float: 'right'
  },
  '.pull-left': {
    float: 'left'
  },
  '.hide': {
    display: 'none'
  },
  '.show': {
    display: 'block'
  },
  '.invisible': {
    visibility: 'hidden'
  },
  '.text-hide': {
    font: '0/0 a',
    color: 'transparent',
    textShadow: 'none',
    backgroundColor: 'transparent',
    border: 0
  },
  '.hidden': {
    display: 'none'
  },
  '.affix': {
    position: 'fixed'
  },
  '.visible-xs, .visible-sm, .visible-md, .visible-lg': {
    display: 'none'
  },
  '.visible-xs-block, .visible-xs-inline, .visible-xs-inline-block, .visible-sm-block, .visible-sm-inline, .visible-sm-inline-block, .visible-md-block, .visible-md-inline, .visible-md-inline-block, .visible-lg-block, .visible-lg-inline, .visible-lg-inline-block': {
    display: 'none'
  },
  '.visible-print': {
    display: 'none'
  },
  '.visible-print-block': {
    display: 'none'
  },
  '.visible-print-inline': {
    display: 'none'
  },
  '.visible-print-inline-block': {
    display: 'none'
  },
  mediaQueries: {
    '(min-width: 768px)': {
      '.lead': {
        fontSize: 21
      },
      '.dl-horizontal dt': {
        float: 'left',
        width: 160,
        clear: 'left',
        textAlign: 'right',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      },
      '.dl-horizontal dd': {
        marginLeft: 180
      },
      '.container': {
        width: 750
      },
      '.col-sm-1, .col-sm-2, .col-sm-3, .col-sm-4, .col-sm-5, .col-sm-6, .col-sm-7, .col-sm-8, .col-sm-9, .col-sm-10, .col-sm-11, .col-sm-12': {
        float: 'left'
      },
      '.col-sm-12': {
        width: '100%'
      },
      '.col-sm-11': {
        width: '91.66666667%'
      },
      '.col-sm-10': {
        width: '83.33333333%'
      },
      '.col-sm-9': {
        width: '75%'
      },
      '.col-sm-8': {
        width: '66.66666667%'
      },
      '.col-sm-7': {
        width: '58.33333333%'
      },
      '.col-sm-6': {
        width: '50%'
      },
      '.col-sm-5': {
        width: '41.66666667%'
      },
      '.col-sm-4': {
        width: '33.33333333%'
      },
      '.col-sm-3': {
        width: '25%'
      },
      '.col-sm-2': {
        width: '16.66666667%'
      },
      '.col-sm-1': {
        width: '8.33333333%'
      },
      '.col-sm-pull-12': {
        right: '100%'
      },
      '.col-sm-pull-11': {
        right: '91.66666667%'
      },
      '.col-sm-pull-10': {
        right: '83.33333333%'
      },
      '.col-sm-pull-9': {
        right: '75%'
      },
      '.col-sm-pull-8': {
        right: '66.66666667%'
      },
      '.col-sm-pull-7': {
        right: '58.33333333%'
      },
      '.col-sm-pull-6': {
        right: '50%'
      },
      '.col-sm-pull-5': {
        right: '41.66666667%'
      },
      '.col-sm-pull-4': {
        right: '33.33333333%'
      },
      '.col-sm-pull-3': {
        right: '25%'
      },
      '.col-sm-pull-2': {
        right: '16.66666667%'
      },
      '.col-sm-pull-1': {
        right: '8.33333333%'
      },
      '.col-sm-pull-0': {
        right: 'auto'
      },
      '.col-sm-push-12': {
        left: '100%'
      },
      '.col-sm-push-11': {
        left: '91.66666667%'
      },
      '.col-sm-push-10': {
        left: '83.33333333%'
      },
      '.col-sm-push-9': {
        left: '75%'
      },
      '.col-sm-push-8': {
        left: '66.66666667%'
      },
      '.col-sm-push-7': {
        left: '58.33333333%'
      },
      '.col-sm-push-6': {
        left: '50%'
      },
      '.col-sm-push-5': {
        left: '41.66666667%'
      },
      '.col-sm-push-4': {
        left: '33.33333333%'
      },
      '.col-sm-push-3': {
        left: '25%'
      },
      '.col-sm-push-2': {
        left: '16.66666667%'
      },
      '.col-sm-push-1': {
        left: '8.33333333%'
      },
      '.col-sm-push-0': {
        left: 'auto'
      },
      '.col-sm-offset-12': {
        marginLeft: '100%'
      },
      '.col-sm-offset-11': {
        marginLeft: '91.66666667%'
      },
      '.col-sm-offset-10': {
        marginLeft: '83.33333333%'
      },
      '.col-sm-offset-9': {
        marginLeft: '75%'
      },
      '.col-sm-offset-8': {
        marginLeft: '66.66666667%'
      },
      '.col-sm-offset-7': {
        marginLeft: '58.33333333%'
      },
      '.col-sm-offset-6': {
        marginLeft: '50%'
      },
      '.col-sm-offset-5': {
        marginLeft: '41.66666667%'
      },
      '.col-sm-offset-4': {
        marginLeft: '33.33333333%'
      },
      '.col-sm-offset-3': {
        marginLeft: '25%'
      },
      '.col-sm-offset-2': {
        marginLeft: '16.66666667%'
      },
      '.col-sm-offset-1': {
        marginLeft: '8.33333333%'
      },
      '.col-sm-offset-0': {
        marginLeft: '0%'
      }
    },
    '(min-width: 992px)': {
      '.container': {
        width: 970
      },
      '.col-md-1, .col-md-2, .col-md-3, .col-md-4, .col-md-5, .col-md-6, .col-md-7, .col-md-8, .col-md-9, .col-md-10, .col-md-11, .col-md-12': {
        float: 'left'
      },
      '.col-md-12': {
        width: '100%'
      },
      '.col-md-11': {
        width: '91.66666667%'
      },
      '.col-md-10': {
        width: '83.33333333%'
      },
      '.col-md-9': {
        width: '75%'
      },
      '.col-md-8': {
        width: '66.66666667%'
      },
      '.col-md-7': {
        width: '58.33333333%'
      },
      '.col-md-6': {
        width: '50%'
      },
      '.col-md-5': {
        width: '41.66666667%'
      },
      '.col-md-4': {
        width: '33.33333333%'
      },
      '.col-md-3': {
        width: '25%'
      },
      '.col-md-2': {
        width: '16.66666667%'
      },
      '.col-md-1': {
        width: '8.33333333%'
      },
      '.col-md-pull-12': {
        right: '100%'
      },
      '.col-md-pull-11': {
        right: '91.66666667%'
      },
      '.col-md-pull-10': {
        right: '83.33333333%'
      },
      '.col-md-pull-9': {
        right: '75%'
      },
      '.col-md-pull-8': {
        right: '66.66666667%'
      },
      '.col-md-pull-7': {
        right: '58.33333333%'
      },
      '.col-md-pull-6': {
        right: '50%'
      },
      '.col-md-pull-5': {
        right: '41.66666667%'
      },
      '.col-md-pull-4': {
        right: '33.33333333%'
      },
      '.col-md-pull-3': {
        right: '25%'
      },
      '.col-md-pull-2': {
        right: '16.66666667%'
      },
      '.col-md-pull-1': {
        right: '8.33333333%'
      },
      '.col-md-pull-0': {
        right: 'auto'
      },
      '.col-md-push-12': {
        left: '100%'
      },
      '.col-md-push-11': {
        left: '91.66666667%'
      },
      '.col-md-push-10': {
        left: '83.33333333%'
      },
      '.col-md-push-9': {
        left: '75%'
      },
      '.col-md-push-8': {
        left: '66.66666667%'
      },
      '.col-md-push-7': {
        left: '58.33333333%'
      },
      '.col-md-push-6': {
        left: '50%'
      },
      '.col-md-push-5': {
        left: '41.66666667%'
      },
      '.col-md-push-4': {
        left: '33.33333333%'
      },
      '.col-md-push-3': {
        left: '25%'
      },
      '.col-md-push-2': {
        left: '16.66666667%'
      },
      '.col-md-push-1': {
        left: '8.33333333%'
      },
      '.col-md-push-0': {
        left: 'auto'
      },
      '.col-md-offset-12': {
        marginLeft: '100%'
      },
      '.col-md-offset-11': {
        marginLeft: '91.66666667%'
      },
      '.col-md-offset-10': {
        marginLeft: '83.33333333%'
      },
      '.col-md-offset-9': {
        marginLeft: '75%'
      },
      '.col-md-offset-8': {
        marginLeft: '66.66666667%'
      },
      '.col-md-offset-7': {
        marginLeft: '58.33333333%'
      },
      '.col-md-offset-6': {
        marginLeft: '50%'
      },
      '.col-md-offset-5': {
        marginLeft: '41.66666667%'
      },
      '.col-md-offset-4': {
        marginLeft: '33.33333333%'
      },
      '.col-md-offset-3': {
        marginLeft: '25%'
      },
      '.col-md-offset-2': {
        marginLeft: '16.66666667%'
      },
      '.col-md-offset-1': {
        marginLeft: '8.33333333%'
      },
      '.col-md-offset-0': {
        marginLeft: '0%'
      }
    },
    '(min-width: 1200px)': {
      '.container': {
        width: 1170
      },
      '.col-lg-1, .col-lg-2, .col-lg-3, .col-lg-4, .col-lg-5, .col-lg-6, .col-lg-7, .col-lg-8, .col-lg-9, .col-lg-10, .col-lg-11, .col-lg-12': {
        float: 'left'
      },
      '.col-lg-12': {
        width: '100%'
      },
      '.col-lg-11': {
        width: '91.66666667%'
      },
      '.col-lg-10': {
        width: '83.33333333%'
      },
      '.col-lg-9': {
        width: '75%'
      },
      '.col-lg-8': {
        width: '66.66666667%'
      },
      '.col-lg-7': {
        width: '58.33333333%'
      },
      '.col-lg-6': {
        width: '50%'
      },
      '.col-lg-5': {
        width: '41.66666667%'
      },
      '.col-lg-4': {
        width: '33.33333333%'
      },
      '.col-lg-3': {
        width: '25%'
      },
      '.col-lg-2': {
        width: '16.66666667%'
      },
      '.col-lg-1': {
        width: '8.33333333%'
      },
      '.col-lg-pull-12': {
        right: '100%'
      },
      '.col-lg-pull-11': {
        right: '91.66666667%'
      },
      '.col-lg-pull-10': {
        right: '83.33333333%'
      },
      '.col-lg-pull-9': {
        right: '75%'
      },
      '.col-lg-pull-8': {
        right: '66.66666667%'
      },
      '.col-lg-pull-7': {
        right: '58.33333333%'
      },
      '.col-lg-pull-6': {
        right: '50%'
      },
      '.col-lg-pull-5': {
        right: '41.66666667%'
      },
      '.col-lg-pull-4': {
        right: '33.33333333%'
      },
      '.col-lg-pull-3': {
        right: '25%'
      },
      '.col-lg-pull-2': {
        right: '16.66666667%'
      },
      '.col-lg-pull-1': {
        right: '8.33333333%'
      },
      '.col-lg-pull-0': {
        right: 'auto'
      },
      '.col-lg-push-12': {
        left: '100%'
      },
      '.col-lg-push-11': {
        left: '91.66666667%'
      },
      '.col-lg-push-10': {
        left: '83.33333333%'
      },
      '.col-lg-push-9': {
        left: '75%'
      },
      '.col-lg-push-8': {
        left: '66.66666667%'
      },
      '.col-lg-push-7': {
        left: '58.33333333%'
      },
      '.col-lg-push-6': {
        left: '50%'
      },
      '.col-lg-push-5': {
        left: '41.66666667%'
      },
      '.col-lg-push-4': {
        left: '33.33333333%'
      },
      '.col-lg-push-3': {
        left: '25%'
      },
      '.col-lg-push-2': {
        left: '16.66666667%'
      },
      '.col-lg-push-1': {
        left: '8.33333333%'
      },
      '.col-lg-push-0': {
        left: 'auto'
      },
      '.col-lg-offset-12': {
        marginLeft: '100%'
      },
      '.col-lg-offset-11': {
        marginLeft: '91.66666667%'
      },
      '.col-lg-offset-10': {
        marginLeft: '83.33333333%'
      },
      '.col-lg-offset-9': {
        marginLeft: '75%'
      },
      '.col-lg-offset-8': {
        marginLeft: '66.66666667%'
      },
      '.col-lg-offset-7': {
        marginLeft: '58.33333333%'
      },
      '.col-lg-offset-6': {
        marginLeft: '50%'
      },
      '.col-lg-offset-5': {
        marginLeft: '41.66666667%'
      },
      '.col-lg-offset-4': {
        marginLeft: '33.33333333%'
      },
      '.col-lg-offset-3': {
        marginLeft: '25%'
      },
      '.col-lg-offset-2': {
        marginLeft: '16.66666667%'
      },
      '.col-lg-offset-1': {
        marginLeft: '8.33333333%'
      },
      '.col-lg-offset-0': {
        marginLeft: '0%'
      },
      '.visible-lg': {
        display: 'block'
      },
      'table.visible-lg': {
        display: 'table'
      },
      'tr.visible-lg': {
        display: 'table-row'
      },
      'th.visible-lg,   td.visible-lg': {
        display: 'table-cell'
      },
      '.visible-lg-block': {
        display: 'block'
      },
      '.visible-lg-inline': {
        display: 'inline'
      },
      '.visible-lg-inline-block': {
        display: 'inline-block'
      },
      '.hidden-lg': {
        display: 'none'
      }
    },
    '(max-width: 767px)': {
      '.visible-xs': {
        display: 'block'
      },
      'table.visible-xs': {
        display: 'table'
      },
      'tr.visible-xs': {
        display: 'table-row'
      },
      'th.visible-xs,   td.visible-xs': {
        display: 'table-cell'
      },
      '.visible-xs-block': {
        display: 'block'
      },
      '.visible-xs-inline': {
        display: 'inline'
      },
      '.visible-xs-inline-block': {
        display: 'inline-block'
      },
      '.hidden-xs': {
        display: 'none'
      }
    },
    '(min-width: 768px) and (max-width: 991px)': {
      '.visible-sm': {
        display: 'block'
      },
      'table.visible-sm': {
        display: 'table'
      },
      'tr.visible-sm': {
        display: 'table-row'
      },
      'th.visible-sm,   td.visible-sm': {
        display: 'table-cell'
      },
      '.visible-sm-block': {
        display: 'block'
      },
      '.visible-sm-inline': {
        display: 'inline'
      },
      '.visible-sm-inline-block': {
        display: 'inline-block'
      },
      '.hidden-sm': {
        display: 'none'
      }
    },
    '(min-width: 992px) and (max-width: 1199px)': {
      '.visible-md': {
        display: 'block'
      },
      'table.visible-md': {
        display: 'table'
      },
      'tr.visible-md': {
        display: 'table-row'
      },
      'th.visible-md,   td.visible-md': {
        display: 'table-cell'
      },
      '.visible-md-block': {
        display: 'block'
      },
      '.visible-md-inline': {
        display: 'inline'
      },
      '.visible-md-inline-block': {
        display: 'inline-block'
      },
      '.hidden-md': {
        display: 'none'
      }
    },
    print: {
      '.visible-print': {
        display: 'block'
      },
      'table.visible-print': {
        display: 'table'
      },
      'tr.visible-print': {
        display: 'table-row'
      },
      'th.visible-print,   td.visible-print': {
        display: 'table-cell'
      },
      '.visible-print-block': {
        display: 'block'
      },
      '.visible-print-inline': {
        display: 'inline'
      },
      '.visible-print-inline-block': {
        display: 'inline-block'
      },
      '.hidden-print': {
        display: 'none'
      }
    }
  }
};
