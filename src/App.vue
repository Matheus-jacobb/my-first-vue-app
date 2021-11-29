<template>
  <v-app>

    <div class="navigator-container">
      <v-card class="navigator-bar">
        <v-navigation-drawer permanent expand-on-hover dark>
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
                >190299@facens.br
                </v-list-item-subtitle
                >
              </v-list-item-content>
            </v-list-item>
          </v-list>

          <v-divider></v-divider>

          <v-list nav dense>
            <v-list-item href="/recents">
              <v-list-item-icon>
                <v-icon>mdi-movie-open</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Movies</v-list-item-title>
            </v-list-item>
            <v-list-item href="/">
              <v-list-item-icon>
                <v-icon>mdi-heart</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Highlight</v-list-item-title>
            </v-list-item>
            <v-list-item href="/schedule">
              <v-list-item-icon>
                <v-icon>mdi-calendar-arrow-right</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Schedules</v-list-item-title>
            </v-list-item>
            <v-list-item href="/locales">
              <v-list-item-icon>
                <v-icon>mdi-map-marker</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Locations</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
      </v-card>
    </div>

    <div>
      <v-system-bar window dark app class="system-bar">
        <span>JACOB'S CINE</span>
      </v-system-bar>
    </div>

    <v-card class="overflow-hidden">
      <v-app-bar
          class="app-bar"
          absolute
          color="#fcb69f"
          dark
          shrink-on-scroll
          scroll-target="#scrolling-techniques-2"
          app
      >
        <template v-slot:img="{ props }">
          <v-img
              v-bind="props"
              gradient="to top, #1e1e1e, black"
          ></v-img>
        </template>

        <v-spacer></v-spacer>

        <v-app-bar-title>{{ this.$route.fullPath.split('/')[1].toUpperCase() }}</v-app-bar-title>

        <v-spacer></v-spacer>

      </v-app-bar>
      <v-sheet
          id="scrolling-techniques-2"
          class="overflow-y-auto background"
      >
        <v-container>
          <v-main>
            <router-view/>
          </v-main>
        </v-container>
      </v-sheet>
    </v-card>

    <v-footer dark padless app>
      <v-card class="flex" flat tile>
        <v-card-text class="py-2 white--text text-center">
          {{ new Date().getFullYear() }} — <strong>Jacob's cine</strong>
        </v-card-text>
      </v-card>
    </v-footer>

    <v-bottom-navigation color="primary" horizontal app>
      <router-link to
                       ="/recents">
        <v-btn class="footer-btn" :class="{selected: this.$route.fullPath.split('/')[1] === 'recents'}">

          <v-icon>mdi-movie-open</v-icon>
        </v-btn>
      </router-link>

      <router-link to
                       ="/">
        <v-btn class="footer-btn" :class="{selected: this.$route.fullPath.split('/')[1] === 'highlite'}">

          <v-icon>mdi-heart</v-icon>
        </v-btn>

      </router-link>

      <router-link to
                       ="/schedule">
        <v-btn class="footer-btn" :class="{selected: this.$route.fullPath.split('/')[1] === 'schedule'}">
        <v-icon>mdi-calendar-arrow-right</v-icon>
      </v-btn>
      </router-link>

      <router-link to
                       ="/locales">
        <v-btn class="footer-btn" :class="{selected: this.$route.fullPath.split('/')[1] === 'locales'}">
          <v-icon>mdi-map-marker</v-icon>
        </v-btn>
      </router-link>
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

.v-btn__content{
  i{
    margin: 0 !important;
  }
}

header {
  height: auto !important;
  position: fixed !important;
}

.v-toolbar {
  &__content, &__image {
    height: 3rem !important;
  }
}

.v-app-bar-title__content{
  width: auto !important;
}

.v-navigation-drawer{
  background-color: red !important;
}


v-footer, .header, .v-bottom-navigation {
  z-index: 999;
  background-color: red !important;
}

.background {
  background-color: #1e1e1e !important;
}

template {
  background-color: #4158D0;
  background-image: linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%);
}

v-app-bar {
  max-height: none;
  background-color: #1e1e1e !important;
}

.selected {
  background-color: #1e1e1e !important;
  border-radius: 0 0 3rem 3rem !important;
}

router-link, a {
  text-decoration: none;
  color: white !important;
}

.footer-btn {
  height: 3.5rem !important;
}

v-img {
  border: none;
}

.navigator-bar {
  position: fixed;
  left: 0;
  z-index: 99;
  height: 50rem;
  box-shadow: none !important;
  background-color: red !important;
}

.navigator-container {
  position: fixed;
  z-index: 99;
  top: 5rem;
}

.v-list-item-title, a {
  color: white !important;
}

</style>
