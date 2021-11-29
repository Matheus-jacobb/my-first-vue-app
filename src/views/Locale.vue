<template>
  <v-container class="container-locale">
    <template>
      <v-card
          class="mx-auto"
          max-width="400"
          v-for="(location, index) in $store.state.locales" :key="index"
      >
        <v-img
            class="white--text align-end"
            height="200px"
            :src="location.imgSrc"
        >
        </v-img>

        <v-card-subtitle class="pb-0">
          {{ location.city }}
        </v-card-subtitle>

        <v-card-text class="text--primary">
          <div>{{ location.address }}</div>
        </v-card-text>

      </v-card>
    </template>
  </v-container>
</template>

<style>
.container-locale {
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 1rem;
  grid-template-columns: repeat(2, 1fr);
}
</style>
