import Vue from 'vue';
import Vuex from 'vuex';
import {paciente} from './paciente';
import {turnos} from './turnos';

Vue.use(Vuex);

export const store = new Vuex.Store({
  modules: {
    paciente,
    turnos,
  }
});
