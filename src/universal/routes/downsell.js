export default store => {
  return {
    path: 'deals',
    getComponent: async (location, cb) => {
      const component = await System.import('universal/modules/Downsell/containers/DownsellContainer');
      cb(null, component);
    },
    getIndexRoute: async (location, cb) => {
      const component = await System.import('universal/modules/Downsell/components/Main/Main');
      cb(null, {component});
    }
  };
};
