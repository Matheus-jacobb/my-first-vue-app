<template>
  <v-container class="container-recents">

    <template>
      <v-card
          v-for="(movie, index)  of $store.state.theaterMovies" :key="index"
          class="mx-auto"
          max-width="344"
      >
        <v-img
            :src="movie.imgUrl"
            height="200px"

        ></v-img>

        <v-card-title style="max-width: 17rem">
          {{movie.title}}
        </v-card-title>

        <v-card-subtitle>
          {{movie.subtitle}}
        </v-card-subtitle>

        <v-card-actions>
          <v-btn
              color="orange lighten-2"
              text
          >
            Explore
          </v-btn>

          <v-spacer></v-spacer>

          <v-btn
              icon
              v-on:click="show[index] = !show[index]"
              @click="click()"
          >
            <v-icon>{{ show[index] ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>

        <v-expand-transition>
          <div v-if="show[index]">
            <v-divider></v-divider>

            <v-card-text>
              I'm a thing. But, like most politicians, he promised more than he could deliver. You won't have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go with that data file! Hey, you add a one and two zeros to that or we walk! You're going to do his laundry? I've got to find a way to escape.
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </template>

  </v-container>
</template>

<style>
.container-recents{
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}
</style>

<script>
export default {
  data: () => ({
    show: [false, false, false]
  }),
  methods: {
    click(){
      this.show = !this.show;
    }
  }
}
</script>
