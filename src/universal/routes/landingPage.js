import LandingPageContainer from 'universal/modules/LandingPage/containers/LandingPage/LandingPageContainer';
import Main from 'universal/modules/LandingPage/components/Main/Main';

export default store => {
  return {
    path: '/landing-page',
    component: LandingPageContainer,
    indexRoute: {
      component: Main
    }
  };
};
