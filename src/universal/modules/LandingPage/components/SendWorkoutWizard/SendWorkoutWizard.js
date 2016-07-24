import React, {Component, PropTypes} from 'react';
import SendWorkoutWizardPageOne from './SendWorkoutWizardPageOne';
import SendWorkoutWizardPageTwo from './SendWorkoutWizardPageTwo';
import SendWorkoutWizardPageThree from './SendWorkoutWizardPageThree';
import SendWorkoutWizardPageFour from './SendWorkoutWizardPageFour';
import SendWorkoutWizardPageFive from './SendWorkoutWizardPageFive';
import SendWorkoutWizardPageSix from './SendWorkoutWizardPageSix';

export default class SendWorkoutWizard extends Component {
  static propTypes = {
    onSubmit: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);
    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
  }

  state = {
    page: 1
  };

  nextPage() {
    this.setState({page: this.state.page + 1});
  }

  previousPage() {
    this.setState({page: this.state.page - 1});
  }

  render() {
    let {page} = this.state;
    const {
      onSubmit,
      bodyType,
      verticalReach,
      jumpFromFeet,
      jumpFromPosition,
      age
    } = this.props;

    if (bodyType) {
      page = 2;
    }
    if (verticalReach) {
      page = 3;
    }
    if (jumpFromFeet) {
      page = 4;
    }
    if (jumpFromPosition) {
      page = 5;
    }
    if (age) {
      page = 6;
    }

    return (<div>
        {page === 1 && <SendWorkoutWizardPageOne {...this.props} onSubmit={this.nextPage}/>}
        {page === 2 && <SendWorkoutWizardPageTwo {...this.props} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 3 && <SendWorkoutWizardPageThree {...this.props} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 4 && <SendWorkoutWizardPageFour {...this.props} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 5 && <SendWorkoutWizardPageFive {...this.props} previousPage={this.previousPage} onSubmit={this.nextPage}/>}
        {page === 6 && <SendWorkoutWizardPageSix {...this.props} previousPage={this.previousPage} onSubmit={onSubmit}/>}
      </div>
    );
  }
}
