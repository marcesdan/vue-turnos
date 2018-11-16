<template>
  <v-content>
    <section>
      <v-parallax src="assets/hero2.jpeg" height="655">
        <v-layout
            column
            align-center
            justify-center
            class="white--text"
        >
          <img src="assets/vuetify.png" alt="Vuetify.js" height="200">
          <h1 class="white--text mb-2 display-1 text-xs-center">Hospital regional de Ushuaia</h1>
          <div class="title mt-2 mb-4 text-xs-center">Reserva web de turnos</div>
          <router-link :to="{name: 'ingreso'}" tag="button">
            <v-btn class="blue lighten-2 mt-5" dark large>Comenzar</v-btn>
          </router-link>
        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-layout
          column
          wrap
          class="my-5"
          align-center
      >
        <v-flex xs12 sm4 class="my-3">
          <div class="text-xs-center">
            <h2 class="headline">Nunca fue más fácil reservar un turno</h2>
            <span class="subheading">
                Cuando quieras, donde quieras!
              </span>
          </div>
        </v-flex>
        <v-flex xs12>
          <v-container grid-list-xl>
            <v-layout row wrap>
              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">person</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Registrate</div>
                  </v-card-title>
                  <v-card-text class="text-xs-justify">
                    Si aún no estás registrado, acercate a la mesa de entrada del hospital y pedí ser ingresado al
                    sistema.
                    Solo necesitás tener tu documento y una dirección de email para confirmar la reserva de tus turnos.
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">flash_on</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">El sitio es liviano!</div>
                  </v-card-title>
                  <v-card-text class="text-xs-justify">
                    También podés acceder a éste sitio desde tu celular o tablet.
                    Nosotros cuidamos de tu plan de datos!
                  </v-card-text>
                </v-card>
              </v-flex>

              <v-flex xs12 md4>
                <v-card class="elevation-0 transparent">
                  <v-card-text class="text-xs-center">
                    <v-icon x-large class="blue--text text--lighten-2">build</v-icon>
                  </v-card-text>
                  <v-card-title primary-title class="layout justify-center">
                    <div class="headline text-xs-center">Completamente libre</div>
                  </v-card-title>
                  <v-card-text class="text-xs-justify">
                    El código de todo este sistema está a disposición de la comunidad.
                    Cualquiera es libre de modificarlo y redistribuirlo.
                  </v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </section>

    <section>
      <v-parallax src="assets/section2.jpg" height="380">
        <v-layout column align-center justify-center>
          <div class="headline white--text mb-3 text-xs-center">La mejor manera de reservar tus turnos</div>
          <div class="subheading mt-2 mb-4 text-xs-center font-weight-medium">Si ya te registraste en mesa de entrada,
            comenzá!
          </div>

          <router-link :to="{name: 'ingreso'}" tag="button">
            <v-btn class="blue lighten-2 mt-5" dark large>Comenzar</v-btn>
          </router-link>

        </v-layout>
      </v-parallax>
    </section>

    <section>
      <v-container grid-list-xl>
        <v-layout row wrap justify-center class="my-5">
          <v-flex xs12 sm4>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout justify-center">
                <div class="headline">Información</div>
              </v-card-title>
              <v-card-text class="layout text-xs-justify">
                El Hospital Regional Ushuaia, es el más importante Centro de Salud de la Ciudad de Ushuaia.
                Trabajamos para consolidar día a día un sistema de atención que haga posible satisfacer las necesidades
                de salud de la población de Ushuaia.
              </v-card-text>
            </v-card>
          </v-flex>
          <v-flex xs12 sm5 offset-sm1>
            <v-card class="elevation-0 transparent">
              <v-card-title primary-title class="layout ml-5">
                <div class="headline">Contactanos</div>
              </v-card-title>
              <v-list class="transparent">
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">phone</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>02901 44-1000</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">place</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>Av. 12 de Octubre y Maipú, Ushuaia</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
                <v-list-tile>
                  <v-list-tile-action>
                    <v-icon class="blue--text text--lighten-2">email</v-icon>
                  </v-list-tile-action>
                  <v-list-tile-content>
                    <v-list-tile-title>contactosalud@tierradelfuego.gov.ar</v-list-tile-title>
                  </v-list-tile-content>
                </v-list-tile>
              </v-list>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </section>
  </v-content>
</template>

<script>
  export default {
    data() {
      return {
        title: 'Your Logo'
      }
    },
  }
</script>