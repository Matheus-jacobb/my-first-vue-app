import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    theaterMovies: [
      {
        title: 'Ghostbusters: Afterlife',
        subtitle: 'WEDNESDAY - FRIDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75985599/lg_imax_gb.jpg',
        description: ''
      },
      {
        title: 'Resident Evil: Welcome to Raccoon City',
        subtitle: 'MONDAY - THURSDAY - FRIDAY',
        imgUrl: 'https://www.cinemark.com/media/75987260/lg_final_re.jpg',
        description: ''
      },
      {
        title: 'House of Gucci',
        subtitle: 'SUNDAY - THURSDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75985038/lg_hog.jpg',
        description: ''
      },
      {
        title: 'Clifford the Big Red Dog',
        subtitle: 'SUNDAY - WEDNESDAY - FRIDAY',
        imgUrl: 'https://www.cinemark.com/media/75985588/lg_final_clifford.jpg',
        description: ''
      },
      {
        title: 'Eternals',
        subtitle: 'SUNDAY - FRIDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75983277/lg_payoff_eternals.jpg',
        description: ''
      },
      {
        title: 'Christmas With The Chosen: The Messengers',
        subtitle: 'SUNDAY - FRIDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75985963/lg_cwtc.jpg',
        description: ''
      },
      {
        title: 'Encanto',
        subtitle: 'WEDNESDAY - THURSDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75985003/lg_payoff_encanto.jpg',
        description: ''
      },
      {
        title: 'King Richard',
        subtitle: 'MONDAY - FRIDAY - SATURDAY',
        imgUrl: 'https://www.cinemark.com/media/75984160/king_richard_poster_large.jpg',
        description: ''
      }
    ],

    highlightCards: [
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
    ]
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
