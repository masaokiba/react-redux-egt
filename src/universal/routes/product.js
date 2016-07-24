import ProductContainer from 'universal/modules/Product/containers/Product/ProductContainer';
import Main from 'universal/modules/Product/components/Main/Main';

export default store => {
  return {
    path: '/',
    component: ProductContainer,
    indexRoute: {
      component: Main
    }
  };
};
