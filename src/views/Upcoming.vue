<template>
  <v-container class="container-schedule">
    <template>
      <div class="input--container">
      <input
          type="text"
          v-on:keyup="onSearch($event.target.value)"
          placeholder="What are you looking for ?"
      >
      </div>
      <div class="container-schedules">
        <v-card
            class="mx-auto"
            min-width="400"
            v-for="(premiere, index)  of premiere" :key="index"
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

<style lang="scss">

.container-schedules {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(4, 1fr);
}

.container-schedule{
  display: block !important;
  padding: 0;
}

.input--container{
  height: 7rem;
  display: flex;
  align-items: center;
}

input{
  border: 2px solid red;
  border-radius: 50px;
  width: 50rem;
  height: 3rem;
  color: white;
  padding-left: 2rem;
  transition: 0.1s;

  &::placeholder{
  color: rgba(255, 255, 255, 0.76);
   }

  &:hover{
    border: 2px solid #ff5858;
    transition: 0.1s;
  }
}

</style>
<script>
import store from "../store/index";
import moment from "moment";

export default {

  async created() {
    await store.dispatch("fetchPremieres");
    this.premiere = this.premiereProxy
    console.log(this.premiere);
    this.baseImageUrl = 'https://image.tmdb.org/t/p/original';
    console.log('a')
  },

  data: () => ({
    baseImageUrl: '',
    premiere: [],
  }),

  computed: {
    premiereProxy(){ return this.$store.state.premiere},
  },

  methods: {
    onSearch(event){
      console.log(event)
      this.premiere = this.premiereProxy.filter(a => a.title.toLowerCase().includes(event.toLowerCase()))
      console.log(this.premiere)
    }
  },

  filters: {
    formatDate: function (value) {
      if (value) {
        return moment(String(value)).format('MM/DD/YYYY')
      }
    }
  }
}
</script>
