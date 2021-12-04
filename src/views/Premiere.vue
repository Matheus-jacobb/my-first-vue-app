<template>
  <v-container class="container-schedule">
    <template>
      <div class="container-schedules">
        <v-card
            class="mx-auto"
            min-width="400"
            v-for="(premiere, index)  of $store.state.premiere" :key="index"
        >
          <v-card
              dark
              flat
          >
            <v-img
                v-bind:src="`${baseImageUrl}${premiere.poster_path}`"
            >
            </v-img>
          </v-card>
          <v-card-text class="py-0">
            <v-card-title style="max-width: 17rem">
              {{premiere.title}}
            </v-card-title>

            <v-card-subtitle>
              {{premiere.release_date | formatDate}}
            </v-card-subtitle>

          </v-card-text>
        </v-card>
      </div>
    </template>
  </v-container>
</template>

<style>
.container-schedules {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}

.container-schedule{
  display: block !important;
}

</style>
<script>
import store from "../store/index";
import moment from "moment";

export default {

  async created() {
    await store.dispatch("fetchPremieres");
  },

  data: () => ({
    baseImageUrl: 'https://image.tmdb.org/t/p/original'
  }),

  methods: {},

  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>
