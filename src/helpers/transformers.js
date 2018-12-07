export const transfomer = {
  selectFormat
};

/**
 * Transforma el recurso, a uno con las claves necesarias para el select de vuetify
 * para fullcalendar
 */
function selectFormat(data) {
  return data.map(({id: value, nombre: text}) => ({
    value,
    text,
  }));
}