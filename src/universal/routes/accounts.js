import ProductContainer from '../modules/Product/containers/Product/ProductContainer';

export default function (store) {
  return {
    component: ProductContainer,
    childRoutes: [
      require('./login')(store),
      require('./signup'),
      require('./logout'),
      require('./verifyEmail'),
    ]
  };
}
