export default {
  path: '*',
  getIndexRoute: async (location, cb) => {
    const component = await System.import('universal/components/NotFound/NotFound');
    cb(null, {component});
  }
};
