<template>
  <v-app>
    <div>
      <v-system-bar window dark app class="system-bar">
        <span>SPIDER-MAN</span>
      </v-system-bar>
    </div>

    <v-card class="overflow-hidden">
      <v-app-bar
      class="app-bar"
        absolute
        color="#fcb69f"
        dark
        shrink-on-scroll
        src="https://images7.alphacoders.com/614/614518.jpg"
        scroll-target="#scrolling-techniques-2"
        app
      >
        <template v-slot:img="{ props }">
          <v-img
            v-bind="props"
            gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
          ></v-img>
        </template>

        <v-app-bar-nav-icon></v-app-bar-nav-icon>

        <v-app-bar-title>Novo Filme</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-btn icon>
          <v-icon>mdi-magnify</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-heart</v-icon>
        </v-btn>

        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-app-bar>
      <v-sheet
        id="scrolling-techniques-2"
        class="overflow-y-auto background"
        max-height="600"
      >
        <v-container style="height: 1000px">
              <v-main>
      <router-view />
    </v-main>
        </v-container>
      </v-sheet>
    </v-card>

    <v-footer dark padless>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Homem-Aranha</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-bottom-navigation :value="value" color="primary" horizontal>
      <v-btn>
        <span>Recents</span>

        <v-icon>mdi-history</v-icon>
      </v-btn>

      <v-btn>
        <span>Favorites</span>

        <v-icon>mdi-heart</v-icon>
      </v-btn>

      <v-btn>
        <span>Nearby</span>

        <v-icon>mdi-map-marker</v-icon>
      </v-btn>
    </v-bottom-navigation>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    icons: ["mdi-facebook", "mdi-twitter", "mdi-linkedin", "mdi-instagram"],
  }),
};
</script>

<style lang="scss">
v-footer, .header, .v-bottom-navigation{
  z-index: 999;
}
.background{
      background-color: #4158D0;
    background-image: linear-gradient(
43deg, #0c0c0c 0%, #ff0000 46%, #000000 100%);
}
template{
background-color: #4158D0;
background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

</style>
