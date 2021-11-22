<template>
  <v-container>
    <div>
      <v-card class="navigator-bar">
        <v-navigation-drawer permanent expand-on-hover>
          <v-list>
            <v-list-item class="px-2">
              <v-list-item-avatar>
                <v-img
                  src="https://avatars.githubusercontent.com/u/70240646?v=4"
                ></v-img>
              </v-list-item-avatar>
            </v-list-item>

            <v-list-item link>
              <v-list-item-content>
                <v-list-item-title class="text-h6">
                  Matheus Jacob Bendel
                </v-list-item-title>
                <v-list-item-subtitle
                  >190299@facens.br</v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item href="https://github.com/Matheus-jacobb/">
              <v-list-item-icon>
                <v-icon>mdi-folder</v-icon>
              </v-list-item-icon>
              <v-list-item-title>GitHub</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-account-multiple</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Shared with me</v-list-item-title>
            </v-list-item>
            <v-list-item link>
              <v-list-item-icon>
                <v-icon>mdi-star</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Starred</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

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
    v-for="card of cards" :key="card"
  >
    <v-img
      :src="card.imageUrl"
      height="200px"
    ></v-img>

    <v-card-title>
      {{card.title}}
    </v-card-title>

    <v-card-subtitle>
      {{card.subtitle}}
    </v-card-subtitle>

    <v-card-actions>

      <v-spacer></v-spacer>
    </v-card-actions>

    <v-expand-transition>
      <div v-show="show">
        <v-divider></v-divider>

        <v-card-text class="cards--description">
          {{card.description}}
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

    cards:[
      {
        title: 'Tobey Maguire',
        subtitle: '(2002 - 2007)',
        imageUrl: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/08/tobey-maguire.jpeg',
        description: 'Homem-Aranha (2002)\nHomem-Aranha 2 (2004)\nHomem-Aranha 3 (2007)'
      },
            {
        title: 'Andrew Garfield',
        subtitle: '(2012 - 2014)',
        imageUrl: 'https://s2.glbimg.com/OssXoARwhOKKoyv9Lj8ncs1oe-M=/0x0:746x746/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_e84042ef78cb4708aeebdf1c68c6cbd6/internal_photos/bs/2020/d/A/uw8PErRaKZHZAGzWh15A/andrew-garfield.jpg',
        description: 'O Espetacular Homem-Aranha (2012)\nO Espetacular Homem-Aranha 2 (2014)'
      },
            {
        title: 'Tom Holland',
        subtitle: '(2016 - current)',
        imageUrl: 'https://observatoriodocinema.uol.com.br/wp-content/uploads/2021/09/Tom-Holland-como-Homem-Aranha-1200x900-1.jpg',
        description: 'Capitão América: Guerra Civil (2016)\nHomem-Aranha: De Volta Ao Lar (2017)\nVingadores: Guerra Infinita (2018)\nVingadores: Ultimato (2019)\n Homem-Aranha: Longe de Casa (2019)'
      }
    ],
            items: [
          {
            src: 'https://i.ytimg.com/vi/CeWPlP_lupg/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCDw-36iP0akxrlIPJfJggMiLXcPQ',
          },
          {
            src: 'data:image/jpeg;base64,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',
          },
          {
            src: 'https://ik.imagekit.io/meugamer/wp-content/uploads/2021/11/homem-aranha-3-veja-horario-do-novo-trailer.jpg',
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
.navigator-bar {
  position: fixed;
  left: 0;
  height: 27rem;
  z-index: 99;
  height: 42rem;
}
.cards{
  display: flex;
  padding-top: 1rem;

  &--description{
    white-space: pre-line
  }
}
</style>