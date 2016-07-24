import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import pxToEm from 'universal/utils/pxToEm';
import {white, orange, darkGrey} from 'universal/styles/colors';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import {imgResponsive, centerBlock} from 'universal/styles/helpers';
import shallowCompare from 'react-addons-shallow-compare';
import Radium from 'radium';
import {headerStack, accuMed, accuBlack} from 'universal/styles/fonts';

import productImage from 'universal/images/downsell-product-shot.png';
import shadow from './images/bg-shadow.png';
import logo from 'universal/images/logo-big.png';


const styles = {
  mainProduct: {
    position: 'relative',
    backgroundColor: white,
    backgroundImage: `url(${shadow})`,
    backgroundRepeat: 'repeat-x',
    backgroundPosition: 'bottom',
    paddingTop: '3rem'
  },
  productImage: Object.assign({}, imgResponsive, centerBlock, {
    marginTop: '3rem',
    marginBottom: '1rem',
    '@media (max-width: 414px)': {
      marginTop: `15vw`,
    }
  })
};

@Radium
export default class MainProduct extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      arrowDown,
      bgColor
    } = this.props;

    let mainProductStyle = styles.mainProduct;
    if (bgColor) {
      mainProductStyle.backgroundColor = bgColor;
    }

    return (
      <section style={mainProductStyle}>
        {arrowDown && <ArrowDown color={arrowDown}/>}
        <Grid>
          <Row>
            <Col xs={12}>
              <img src={productImage} style={styles.productImage}/>
            </Col>
          </Row>
        </Grid>
      </section>
    );
  }
}
