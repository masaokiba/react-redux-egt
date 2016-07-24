import PromoContainer from 'universal/modules/Product/containers/Product/PromoContainer';

export default store => {
  return {
    path: '/',
    // component: PromoContainer,
    getComponent: async (location, cb) => {
      const component = await System.import('universal/modules/Product/containers/Product/PromoContainer');
      cb(null, component);
    },
    getIndexRoute: async (location, cb) => {
      const component = await System.import('universal/modules/Product/components/Main/Main');
      cb(null, {component});
    },
    childRoutes: [
      {
        path: 'alan-jump-rope',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/Main/AlanStretches');
          cb(null, component);
        }
      },
      {
        path: 'alan-stretches',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/Main/AlanJumpRope');
          cb(null, component);
        }
      },
      {
        path: 'old-man-alan',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/Main/OldManAlan');
          cb(null, component);
        }
      },
      {
        path: 'first-step-teaser',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Product/components/Main/FirstStepTeaser');
          cb(null, component);
        }
      },
      {
        path: 'options',
        getComponent: async (location, cb) => {
          const component = await System.import('universal/modules/Options/components/Main/Main');
          cb(null, component);
        }
      }
    ]
  };
};
