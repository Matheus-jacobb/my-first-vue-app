<template>
  <v-container class="container-schedule">
    <template>
      <div class="container-schedules">
        <v-card
            class="mx-auto"
            min-width="400"
            v-for="(movie, index)  of $store.state.theaterMovies" :key="index"
        >
          <v-card
              dark
              flat
          >
            <v-img
                :src="movie.imgUrl"
            >
            </v-img>
          </v-card>
          <v-card-text class="py-0">
            <v-timeline
                align-top
                dense
                v-for="(schedule, index2)  of movie.schedule" :key="index2"
            >
              <v-timeline-item
                  color="pink"
                  small
                  v-if="index2 % 2 === 0"
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ schedule.weekday }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ schedule.time }}</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>

              <v-timeline-item
                  color="teal lighten-3"
                  small
                  v-if="index2 % 2 === 1"
              >
                <v-row class="pt-1">
                  <v-col cols="3">
                    <strong>{{ schedule.weekday }}</strong>
                  </v-col>
                  <v-col>
                    <strong>{{ schedule.time }}</strong>
                  </v-col>
                </v-row>
              </v-timeline-item>
            </v-timeline>
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
