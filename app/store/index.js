import Vue from 'vue';
import Vuex from 'vuex';
import modules from './../pages/scripts/components/modules';
Vue.use(Vuex);
const state={
    
};
const createStore = ()=>{
  return new Vuex.Store({
    state:state,
    modules: modules
  })
}
export default createStore


