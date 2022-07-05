import Vue from "vue";
import Vuex, { GetterTree, MutationTree } from "vuex";

import home from "../modules/home/store/index";

Vue.use(Vuex);

export const state = () => ({});

export type RootState = ReturnType<typeof state>;

export const getters: GetterTree<RootState, RootState> = {};

export const mutations: MutationTree<RootState> = {};

const store = () =>
  new Vuex.Store({
    state: state(),
    mutations,
    getters,
    modules: {
      home,
    },
  });

export default store;
