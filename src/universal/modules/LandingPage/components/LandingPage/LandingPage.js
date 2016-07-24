import React, {PropTypes, Component} from 'react';
import Footer from 'universal/components/Footer/Footer';
import Main from '../Main/Main';
import {page, LANDER_PAGE} from 'universal/utils/analytics';


export default class LandingPage extends Component {
  componentDidMount() {
    const {
      source,
      keyword
    } = this.props;
    page(LANDER_PAGE, {source, keyword});
  }

  render() {
    return (
      <div>
        {React.cloneElement(this.props.children, this.props)}
        <Footer/>
      </div>
    );
  }
}
