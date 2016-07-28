import AppContainer from 'universal/containers/App/AppContainer';

export default store => {
  return {
    component: AppContainer,
    childRoutes: [
      // require('./landingPage')(store),
      require('./promo')(store),
      require('./downsell')(store),
      require('./upsell')(store),
      // require('./product')(store),
      // require('./accounts')(store),
      require('./notFound')
    ]
  };
};
