import axios from 'axios';
//import config from 'config';
//import { authHeader } from '../helpers/auth-header';

export const turnoService = {
  findMedicos, //todos los medicos
  findEspecialidades, //todos las especialidades
  findByEspecialidad, //busqueda de turnos por especialidad
  findByMedico, //busqueda de turnos por médico
  reservarTurno,
};

function findMedicos() {
  const requestOptions = {
    method: 'GET',
    url: 'http://turnos.test/api/medicos',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}

function findEspecialidades() {
  const requestOptions = {
    method: 'GET',
    url: 'http://turnos.test/api/especialidades',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}

function findByMedico(medico) {
  const requestOptions = {
    method: 'GET',
    url: `http://turnos.test/api/turnos/medico/${medico}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}
function findByEspecialidad(especialidad) {
  const requestOptions = {
    method: 'GET',
    url: `http://turnos.test/api/turnos/especialidad/${especialidad}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}

function reservarTurno(turnoId, pacienteId) {
  const requestOptions = {
    method: 'POST',
    url: `http://turnos.test/api/turnos/reservar`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
    data: {
      turno: turnoId,
      paciente: pacienteId,
    }
  };
  return axios(requestOptions).then(response =>
    response.data.data
  )
}