import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isMiniProgram: false
  },
  mutations: {
    SET_IS_MINI_PROGRAM(state, isMiniProgram) {
      state.isMiniProgram = isMiniProgram;
    }
  },
  actions: {},
  modules: {}
});
