import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import Countdown from 'universal/components/Countdown/Countdown';
import {orange, white, black, lightGrey, tableRow, tableRowAlt} from 'universal/styles/colors';
import {headerStack, accuBold, accuBlack} from 'universal/styles/fonts';
import {tableResponsive, table} from 'universal/styles/helpers';
import pxToEm from 'universal/utils/pxToEm';
import shallowCompare from 'react-addons-shallow-compare';

import jumptyping from './images/jumptyping.png';
import twelveDayv from './images/12dayv.png';
import yearround from './images/yearround.png';
import peakandunleash from './images/peakandunleash.png';
import seal from './images/SEAL-table.png';
import members from './images/ejt-members.png';
import quickhitter from './images/quickhitter.png';

const baseFontSize = 40;

let styles = {
  section: {
    position: 'relative',
    padding: '5rem 0',
    fontFamily: headerStack,
    textTransform: 'uppercase',
    fontSize: `${pxToEm(baseFontSize)}rem`,
    fontWeight: accuBold,
    '@media (max-width: 767px)': {
      fontSize: `${pxToEm(20)}rem`,
    },
    '@media (max-width: 320px)': {
      fontSize: `.9rem`,
    }
  },
  tableResponsive: Object.assign({}, tableResponsive),
  table: Object.assign({}, table),
  thead: {
    backgroundColor: black,
  },
  topBar: {
    backgroundColor: black,
    color: white,
    fontSize: `${pxToEm(36, baseFontSize)}em`,
    lineHeight: '1.5em',
    verticalAlign: 'middle'
  },
  topBarTH: {
    padding: '.5em 0',
    textAlign: 'center',
    border: 'none'
  },
  tableRow: {
    backgroundColor: tableRow
  },
  tableRowAlt: {
    backgroundColor: tableRowAlt
  },
  img: {
    verticalAlign: 'middle',
    padding: '.25em 1em .25em 2em',
    '@media (max-width: 320px)': {
      maxWidth: 90,
    }
  },
  rowPrice: {
    textAlign: 'center'
  },
  tfoot: {
    backgroundColor: black,
    color: white,
    textAlign: 'center'
  },
  footerh2: {
    fontSize: '1em',
    lineHeight: '1.1em',
    marginTop: '.5em',
    marginBottom: 0
  },
  footerh1: {
    fontSize: '1.5em',
    lineHeight: '1em',
    marginBottom: '.5em'
  },
  finalPrice: {
    color: orange
  },
  freeToday: {
    color: orange
  }
};

@Radium
export default class PackageTable extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      originalPrice,
      salePrice
    } = this.props;

    const items = [
      {
        name: 'The Jump Typing System',
        img: jumptyping,
        price: 199.95
      },
      {
        name: 'The 12 Day Vertical Jump Injection',
        img: twelveDayv,
        price: 97
      },
      {
        name: 'The Personalized Year-Round EJT Training System',
        img: yearround,
        price: 97
      },
      {
        name: 'The Peak & Unleash Program',
        img: peakandunleash,
        price: 97
      },
      {
        name: 'Quick Hitters',
        img: quickhitter,
        price: 209.95,
        freeToday: true
      },
      {
        name: 'Instant Online Access',
        img: members
      }
    ];

    let total = 0;
    items.map((item) => {
      if (item.price) {
        total = total + item.price;
      }
    });

    total = total.toFixed(2);

    let count = 0;

    return (
      <section style={styles.section} >
        <ArrowDown color={orange}/>
        <Grid>
          <Row>
            <Col xs={12} style={styles.tableResponsive}>
              <table style={styles.table}>
                <thead style={styles.thead}>
                  <tr style={styles.topBar}>
                    <th style={styles.topBarTH}>Package</th>
                    <th style={styles.topBarTH}></th>
                    <th style={styles.topBarTH}>Regular&nbsp;Price&nbsp;&nbsp;&nbsp;&nbsp;</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item) => {
                    let trStyle = styles.tableRow;
                    count = count + 1;
                    if (count % 2 === 0) {
                      trStyle = styles.tableRowAlt;
                    }

                    return (
                      <tr key={`packagerow${count}`} style={trStyle}>

                        <td>
                          <img style={styles.img} src={item.img} alt=""/>
                        </td>

                        <td>
                          {item.name}
                        </td>

                        <td style={styles.rowPrice}>
                          {item.price ? `$${item.price}` : null}
                          {item.freeToday ? <div style={styles.freeToday}>FREE Today</div> : null}
                        </td>

                      </tr>
                    );
                  })}
                </tbody>
                <tfoot style={styles.tfoot}>
                  <tr>
                    <td colSpan="3">
                      <h2 style={styles.footerh2}>
                        Total: ${total} <br/>
                        Regular Price: ${originalPrice}
                      </h2>
                      <h1 style={styles.footerh1}>
                        Today’s Price: <span style={styles.finalPrice}>${salePrice}</span>
                      </h1>
                    </td>
                  </tr>
                </tfoot>
              </table>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
