import axios from 'axios';
//import config from 'config';
//import { authHeader } from '../helpers/auth-header';

export const pacienteService = {
  ingreso,
};

function ingreso(documento) {
  const requestOptions = {
    method: 'POST',
    url: 'http://turnos.test/api/ingreso',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: {documento}
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}
