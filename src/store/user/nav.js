export default {
  namespaced: true,
  state() {
    return {
      clickLogin: false,
      clickSignup: false,
      isLogin: true,
      clickHam: false,
    };
  },
  mutations: {
    changeSignup(state, payload) {
      state.clickSignup = payload.state;
    },
    changeLogin(state, payload) {
      state.clickLogin = payload.state;
    },
    changeIsLogin(state, payload) {
      state.isLogin = payload.state;
    },
    changeHam(state, payload) {
      console.log("Ham: ", payload.state);
      state.clickHam = payload.state;
    },
  },
};
