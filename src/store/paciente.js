import {pacienteService} from '../services/pacienteService';
import {router} from '../router';

const initialState = {loggedIn: false, data: null};

export const paciente = {
  namespaced: true,
  state: initialState,
  actions: {
    ingreso({dispatch, commit}, {documento}) {
      //commit('loginRequest', { email });
      pacienteService.ingreso(documento).then(
        data => {
          commit('loginSuccess', data);
          router.push('/turnos');
        },
        error => {
          commit('loginFailure', error);
          //dispatch('alert/error', error, { root: true });
        }
      );
    },
    /*
    logout({commit}) {
      pacienteService.logout();
      commit('logout');
    }
    */
  },
  mutations: {
    /*
    loginRequest(state, data) {
      state.data = data;
      state.loggedIn = true;
    },
    */
    loginSuccess(state, data) {
      state.data = data;
      state.loggedIn = true;
    },
    loginFailure(state) {
      state.data = null;
      state.loggedIn = false;
    },
    /*
    logout(state) {
      state.data = null;
      state.loggedIn = false;
    }
    */
  }
}
