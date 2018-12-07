import {turnoService} from "../services/turnoService";
import moment from "moment";
moment.locale('es');

const initialState = {
  all: [],
  turnoItem: {},
  loadingTable: false,
  loadingModal: false,
  loadingModal: false,
};

export const turnos = {
  namespaced: true,
  state: initialState,
  actions: {
    findByMedico({dispatch, commit}, {medico}) {
      //commit('loginRequest', { email });
      turnoService.findByMedico(medico).then(
        data => {
          commit('setTurnos', data);
        },
        error => {
          //commit('loginFailure', error);
          //dispatch('alert/error', error, { root: true });
        }
      );
    },
    findByEspecialidad({dispatch, commit}, {especialidad}) {
      //commit('loginRequest', { email });
      turnoService.findByEspecialidad(especialidad).then(
        data => {
          commit('setTurnos', data);
        },
        error => {
          //commit('loginFailure', error);
          //dispatch('alert/error', error, { root: true });
        }
      );
    },
  },
  mutations: {
    setTurnos(state, data) {
      data.forEach(value => {
        value.hora = moment(value.fecha, "HH:mm").format('LT');
        value.fecha = moment(value.fecha, "YYYY-MM-DD").format('dddd LL');
      })
      state.all = data;
    },
    /*
    logout(state) {
      state.data = null;
      state.loggedIn = false;
    }
    */
  }
}
