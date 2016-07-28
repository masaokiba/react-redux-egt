export default store => {
  return {
    path: 'special',
    getComponent: async (location, cb) => {
      const component = await System.import('universal/modules/Upsell/containers/UpsellContainer');
      cb(null, component);
    },
    getIndexRoute: async (location, cb) => {
      const component = await System.import('universal/modules/Upsell/components/Main/Main');
      cb(null, {component});
    }
  };
};
