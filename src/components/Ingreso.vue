<template>
  <v-content>
    <v-container fluid fill-height>
      <v-layout align-center justify-center>
        <v-flex xs12 sm8 md4>
          <v-card class="elevation-12">
            <v-toolbar dark color="primary">
              <v-toolbar-title>Ingrese número de documento</v-toolbar-title>
            </v-toolbar>
            <v-card-text class="pb-0">
              <v-form ref="form" @submit.prevent="handleSubmit">
                <v-text-field
                    v-model="documento"
                    :rules="documentoRules"
                    id="documento"
                    prepend-icon="person"
                    name="documento"
                    label="Documento"
                    type="number"
                    autocomplete>
                </v-text-field>
              </v-form>
            </v-card-text>
            <v-card-actions class="px-5">
              <v-flex class="px-5 pb-2 mt-3">
                <vue-recaptcha sitekey="6LfzC3gUAAAAALNZDhui-5B_f8QK7esVs8Or1eMu">
                  <v-btn @click="submit" :disabled="!valid" color="primary" block>
                    Continuar
                  </v-btn>
                </vue-recaptcha>
              </v-flex>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </v-content>
</template>

<script>
  import VueRecaptcha from 'vue-recaptcha';
  export default {
    data: () => ({
      documento: '',
      documentoRules: [
        v => !!v || 'Debe ingresar su número de documento',
      ],
      valid: true
    }),
    methods: {
      submit() {
        if (this.documento) {
          this.$store.dispatch('paciente/ingreso', { documento });
        }
      }
    },
    components: {
      VueRecaptcha
    }
  }
</script>