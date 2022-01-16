import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);
export default new Vuex.Store({
  state: {
    isMiniProgram: false,
    get commodity() {
      return JSON.parse(window.sessionStorage.getItem("commodity"));
    },
    set commodity(value) {
      window.sessionStorage.setItem("commodity", JSON.stringify(value));
    },
    get caseItem() {
      return JSON.parse(window.sessionStorage.getItem("caseItem"));
    },
    set caseItem(value) {
      window.sessionStorage.setItem("caseItem", JSON.stringify(value));
    }
  },
  mutations: {
    SET_IS_MINI_PROGRAM(state, isMiniProgram) {
      state.isMiniProgram = isMiniProgram;
    },
    SET_COMMODITY(state, item) {
      state.commodity = item;
    },
    SET_CASE(state, caseItem) {
      state.caseItem = caseItem;
    }
  },
  actions: {},
  modules: {}
});
