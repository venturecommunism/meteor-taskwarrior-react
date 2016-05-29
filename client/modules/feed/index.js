import routes from './routes.jsx'
import methodStubs from '/lib/methods/feed';
import actions from './actions/0index';

export default {
  routes,
  actions,
  load(context) {
    methodStubs(context);
  }
};
