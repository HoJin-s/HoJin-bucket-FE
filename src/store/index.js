import { createStore } from 'vuex';
import buckets from './lists';
const store = createStore({
  modules: {
    buckets
  }
});

export default store;
