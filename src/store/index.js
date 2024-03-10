import { createStore } from "vuex";
import lists from "./bucket/lists";
import nav from "./user/nav";

const store = createStore({
  modules: {
    lists,
    nav,
  },
});

export default store;
