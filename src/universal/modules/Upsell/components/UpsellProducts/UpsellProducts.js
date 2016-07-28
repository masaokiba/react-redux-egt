import React, {Component} from 'react';
import {Grid, Row, Col} from 'react-bootstrap';
import Radium from 'radium';
import ArrowDown from 'universal/components/ArrowDown/ArrowDown';
import UpsellProduct from './UpsellProduct';
import shallowCompare from 'react-addons-shallow-compare';

const styles = {
  phases: {
    position: 'relative'
  }
};

@Radium
export default class UpsellProducts extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    // pure render
    return shallowCompare(this, nextProps, nextState);
  }

  render() {
    const {
      arrowDown,
      products = [],
      dispatch,
      cart
    } = this.props;

    let count = 0;
    let last = false;

    return (
      <div style={styles.phases}>
        {arrowDown && <ArrowDown color={arrowDown}/>}
        <Grid>
          <Row>
            {products.map((product) => {
              count = count + 1;

              if (count === products.length) {
                last = true;
              }
              return (
                <Col xs={12} sm={4} key={product.productId}>
                  <UpsellProduct {...product} last={last} addedToCart={false} dispatch={dispatch} cart={cart}/>
                </Col>
              );
            })}
          </Row>
        </Grid>
      </div>
    );
  }
}
