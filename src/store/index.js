import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isMiniProgram: false,
    commodity: {}
  },
  mutations: {
    SET_IS_MINI_PROGRAM(state, isMiniProgram) {
      state.isMiniProgram = isMiniProgram;
    },
    SET_COMMODITY(state, item) {
      state.commodity = item;
    }
  },
  actions: {},
  modules: {}
});
