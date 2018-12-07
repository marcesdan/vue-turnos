<template>
  <v-content>
    <v-toolbar app dark color="primary">
      <v-avatar :tile=true class="hidden-sm-and-down">
        <img src="/public/v.png" alt="Vuetify.js"/>
      </v-avatar>
      <v-toolbar-title>Reserva de turnos</v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-title>{{ paciente.nombre }}</v-toolbar-title>
    </v-toolbar>
    <v-container>
        <v-layout>
          <v-flex>
            <v-card class="elevation-21 mt-3">
              <v-form>
                <v-container fluid>
                  <v-layout row wrap>
                    <v-flex xs12 sm12 md4>
                      <h1 class="title pt-3">
                        <v-icon>search</v-icon>
                        Filtros de búsqueda
                      </h1>
                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-autocomplete
                          :items="medicos"
                          prepend-icon="person"
                          name="medico"
                          label="Médico"
                          clearable
                          @change="onMedicoChange"
                      >
                        <template slot="no-data">
                            <v-list-tile>
                              Médico no encontrado
                            </v-list-tile>
                        </template>
                      </v-autocomplete>

                    </v-flex>
                    <v-flex xs12 sm6 md4>
                      <v-autocomplete
                          :items="especialidades"
                          prepend-icon="healing"
                          label="Especialidad"
                          name="especialidad"
                          clearable
                          @change="onEspecialidadChange">
                          <template slot="no-data">
                            <v-list-tile>
                              Especialidad no encontrada
                            </v-list-tile>
                          </template>
                      </v-autocomplete>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-form>
              <v-data-table
                  :headers="headers"
                  :items="turnos"
                  :loading="loading"
                  class="elevation-1" hide-actions>
                <v-progress-linear slot="progress" color="blue" indeterminate></v-progress-linear>
                <template slot="items" slot-scope="props">
                  <tr @click="reservarTurno(props.item)">
                    <td class="text-xs-center">{{ props.item.medico }}</td>
                    <td class="text-xs-center">{{ props.item.especialidad }}</td>
                    <td class="text-xs-center">{{ props.item.fecha }}</td>
                    <td class="text-xs-center">{{ props.item.hora }}</td>
                    <!--
                    <td class="justify-center layout px-0">
                      <v-icon small class="mr-2" @click="reservarTurno(props.item)">
                        edit
                      </v-icon>
                    </td>
                    -->
                  </tr>
                </template>
                <template slot="no-data">
                  <v-alert :value="true" icon="info" color="primary" outline class="text-xs-center">
                    Para ver los turnos disponibles, busque por médico o especialidad
                  </v-alert>
                </template>
              </v-data-table>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    <v-dialog persistent v-model="dialog" max-width="500px">
      <v-card>
        <v-card-title class="headline blue darken-1 white--text"  primary-title>
          ¿Seguro desea reservar éste turno?
        </v-card-title>
        <v-card-text>
          <v-list subheader three-line>
            <v-list-tile>
              <v-list-tile-content>
                <v-list-tile-title>Fecha</v-list-tile-title>
                <v-list-tile-sub-title>{{ turnoItem.fecha }} a las {{ turnoItem.hora }}</v-list-tile-sub-title>
                <v-list-tile-title class="mt-3">Médico</v-list-tile-title>
                <v-list-tile-sub-title>{{ turnoItem.medico }}</v-list-tile-sub-title>
              </v-list-tile-content>
            </v-list-tile>
          </v-list>
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="close"><v-icon class="blue--text text--lighten-2">cancel</v-icon>Cancelar</v-btn>
          <v-btn color="blue darken-1" flat @click.native="save"><v-icon class="blue--text text--lighten-2">forward</v-icon>Reservar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog persistent v-model="dialogSuccess" max-width="560px">
      <v-card>
        <v-card-title class="headline blue darken-1 white--text"  primary-title>
          Turno solicitado con éxito!
        </v-card-title>
        <v-card-text>
          <p>En instantes se le enviará un mail a su casilla de correo para confirmar la reserva.</p>
          <p>Dicho mail contiene un enlace, el cual estará disponible solo por 12hs.</p>
          De no ingresar a dicho enlace, el turno quedará a disposición de otro paciente.
        </v-card-text>
        <v-divider></v-divider>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" flat @click.native="closeSuccess"><v-icon class="blue--text text--lighten-2">chevron_right</v-icon>Finalizar</v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
    <v-dialog
        v-model="dialogLoading"
        hide-overlay
        persistent
        width="300"
    >
      <v-card color="primary" dark
      >
        <v-card-text>
          Por favor, espere...
          <v-progress-linear
              indeterminate
              color="white"
              class="mb-0"
          ></v-progress-linear>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-content>
</template>

<script>
  import {turnoService} from "../services/turnoService"
  import {router} from "../router";

  export default {
    data: () => ({
      medicos: [],
      especialidades: [],
      loading: false,
      dialog: false,
      dialogLoading: false,
      dialogSuccess: false,
      headers: [
        {text: 'Médico', value: 'medico', align: 'center'},
        {text: 'Especialidad', value: 'especialidad', align: 'center'},
        {text: 'Día', value: 'fecha', align: 'center'},
        {text: 'Hora', value: 'hora', align: 'center'},
      ],
      turnoIndex: -1,
      turnoItem: {
        id: '',
        fecha: '',
        hora: '',
        medico: '',
        especialidad: '',
      },
    }),
    computed: {
      turnos() {
        return this.$store.state.turnos.all
      },
      paciente () {
        return this.$store.state.paciente.data
      }
    },
    created() {
      //this.paciente = this.$store.state.paciente.data.nombre
      turnoService.findMedicos().then(data => this.medicos = data)
      turnoService.findEspecialidades().then(data => this.especialidades = data)
    },
    watch: {
      dialog(val) {
        val || this.close()
      },
      dialogLoading(val) {
        val || this.close()
      },
    },
    methods: {
      onMedicoChange(medico) {
        this.$store.dispatch('turnos/findByMedico', {medico});
      },
      onEspecialidadChange(especialidad) {
        this.$store.dispatch('turnos/findByEspecialidad', {especialidad});
      },
      reservarTurno(item) {
        this.turnoIndex = this.turnos.indexOf(item)
        this.turnoItem = Object.assign({}, item)
        this.dialog = true
      },
      close() {
        this.dialog = false
      },
      closeSuccess() {
        this.dialogSuccess = false
        router.push('/')
      },
      save() {
        this.dialogLoading = true;
        let pacienteId = this.$store.state.paciente.data.id;
        turnoService.reservarTurno(this.turnoItem.id, pacienteId).then(
          data => {
            this.dialogSuccess = true
            this.dialogLoading = false
          },
          error => {
            this.loadingDialog = false
          }
        );
        this.close()
      },
    },
  }
</script>
<style>
  .v-alert {
    margin: 90px 0 90px 0;
  }
</style>