<template>
  <v-container style="overflow: hidden" class="container-featured">

    <!--cards-->
    <v-carousel app>
      <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
          reverse-transition="fade-transition"
          transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>

    <div class="cards">
      <v-card
          class="mx-auto"
          max-width="344"
          app
          v-for="card of $store.state.highlightCards" :key="card"
      >
        <v-img
            :src="card.imageUrl"
            height="200px"
        ></v-img>

        <v-card-title>
          {{ card.title }}
        </v-card-title>

        <v-card-subtitle>
          {{ card.subtitle }}
        </v-card-subtitle>

        <v-card-actions>

          <v-spacer></v-spacer>
        </v-card-actions>

        <v-expand-transition>
          <div v-show="show">
            <v-divider></v-divider>

            <v-card-text class="cards--description">
              {{ card.description }}
            </v-card-text>
          </div>
        </v-expand-transition>
      </v-card>
    </div>

  </v-container>
</template>

<script>
export default {
  name: "HelloWorld",

  data: () => ({
    items: [
      {
        src: 'https://i.ytimg.com/vi/CeWPlP_lupg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDw-36iP0akxrlIPJfJggMiLXcPQ',
      },
      {
        src: 'https://i.pinimg.com/originals/f2/c3/d1/f2c3d16c6ad61f67266273a51628ba48.jpg',
      },
      {
        src: 'https://www.torredevigilancia.com/wp-content/uploads/2021/02/images-83.jpeg',
      },
      {
        src: 'https://br.web.img3.acsta.net/newsv7/21/11/16/22/14/0399965.jpg',
      },
    ],
    ecosystem: [
      {
        text: "vuetify-loader",
        href: "https://github.com/vuetifyjs/vuetify-loader",
      },
      {
        text: "github",
        href: "https://github.com/vuetifyjs/vuetify",
      },
      {
        text: "awesome-vuetify",
        href: "https://github.com/vuetifyjs/awesome-vuetify",
      },
    ],
    importantLinks: [
      {
        text: "Documentation",
        href: "https://vuetifyjs.com",
      },
      {
        text: "Chat",
        href: "https://community.vuetifyjs.com",
      },
      {
        text: "Made with Vuetify",
        href: "https://madewithvuejs.com/vuetify",
      },
      {
        text: "Twitter",
        href: "https://twitter.com/vuetifyjs",
      },
      {
        text: "Articles",
        href: "https://medium.com/vuetify",
      },
    ],
    whatsNext: [
      {
        text: "Explore components",
        href: "https://vuetifyjs.com/components/api-explorer",
      },
      {
        text: "Select a layout",
        href: "https://vuetifyjs.com/getting-started/pre-made-layouts",
      },
      {
        text: "Frequently Asked Questions",
        href: "https://vuetifyjs.com/getting-started/frequently-asked-questions",
      },
    ],
    show: [false, false],
  }),
};
</script>

<style lang="scss">
.container-featured{
  display: block !important;
}

.cards {
  display: flex;
  padding-top: 1rem;

  &--description {
    white-space: pre-line
  }
}
</style>
