import React, {Component, PropTypes} from 'react';
import {Button, Grid, Row, Col} from 'react-bootstrap';
import {Dialog} from 'material-ui';
import pointer from './images/cta-pointer.png';
import {createLead} from 'universal/ducks/leads';
import SendWorkoutWizard from '../SendWorkoutWizard/SendWorkoutWizard';
import SendWorkoutWizardSubmitting from '../SendWorkoutWizard/SendWorkoutWizardSubmitting';
import SendWorkoutWizardSuccess from '../SendWorkoutWizard/SendWorkoutWizardSuccess';
import Radium from 'radium';
import {landingPageButton} from 'universal/styles/buttons';
import {push} from 'react-router-redux';
import styleClasses from './modal.css';
import {track, CLICKED_SEND_WORKOUT, LEAD_SUBMITTED} from 'universal/utils/analytics';

const styles = {
  button: landingPageButton,
  pointerLeft: {
    float: 'right',
    marginTop: '4rem',
    '@media (max-width: 1999px)': {
      marginTop: '2.3em'
    },
    '@media (max-width: 991px)': {
      marginTop: '1em'
    }
  },
  pointerRight: {
    transform: 'rotate(-180deg)',
    float: 'left',
    marginTop: '4rem',
    '@media (max-width: 991px)': {
      marginTop: '1em'
    },
    '@media (max-width: 1999px)': {
      marginTop: '2.3em'
    }
  }
};

@Radium
export default class SendWorkoutModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    // Pro tip: The best place to bind your member functions is in the component constructor
    this.onSubmit = this.onSubmit.bind(this);
  }

  state = {
    open: false
  };

  sendWorkoutWizard = (e) => {
    e.preventDefault();
    e.stopPropagation();

    const {lead, dispatch} = this.props;

    // if we have a lead, and all info for lead, send through to sale page.
    if (lead && lead.bodyType && lead.verticalReach && lead.jumpFromFeet && lead.jumpFromPosition && lead.age && lead.email) {
      dispatch(push('/sale'));
      track(CLICKED_SEND_WORKOUT, Object.assign({}, lead, {returnedLead: true}));
      return;
    }

    // otherwise, open the modal so we can collect data with form
    this.setState({open: true});
    track(CLICKED_SEND_WORKOUT);
  };

  handleClose = () => {
    this.setState({open: false});
  };

  onSubmit = (data, dispatch) => {
    const {
      source,
      keyword,
      location,
      listId
    } = this.props;

    data.source = source || location.query.source || location.query.utm_source;
    data.keyword = keyword || location.query.keyword || location.query.utm_term;
    data.listId = listId;

    setTimeout(() => {
      track(LEAD_SUBMITTED, data);
    }, 1);
    return createLead(dispatch, data);
  };

  render() {
    return (
      <Row>
        <Col sm={3} xsHidden>
          <img src={pointer} style={styles.pointerLeft} alt=""/>
        </Col>
        <Col xs={12} sm={6}>
          <a onTouchTap={this.sendWorkoutWizard}
            style={styles.button}>
            SEND MY FREE WORKOUT!
          </a>
        </Col>
        <Col sm={3} xsHidden>
          <img src={pointer} style={styles.pointerRight} alt=""/>
        </Col>

        <Dialog className={styleClasses.dialog}
          open={this.state.open}
          onRequestClose={this.handleClose}
          repositionOnUpdate={false} >
          {this.props.creatingLead ?
            <SendWorkoutWizardSubmitting {...this.props}/> :
            this.props.hasCreatedLead ? <SendWorkoutWizardSuccess {...this.props}/> :
              <SendWorkoutWizard onSubmit={this.onSubmit} {...this.props}/>}
        </Dialog>

      </Row>
    );
  }
}
