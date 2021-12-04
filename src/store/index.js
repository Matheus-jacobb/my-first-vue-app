import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        premiere: [{
            id: 0,
            original_language: "",
            original_title: "",
            overview: "",
            popularity: 0,
            poster_path: '',
            release_date: '',
            title: '',
            video: false,
            vote_average: 0,
            vote_count: '',
        }
        ],

        locales: [
            {
                imgSrc: 'https://queconceito.com.br/wp-content/uploads/Cinema.jpg',
                city: 'NEW ORLEANS',
                address: 'ST: EMILIA, 1238',
            },
            {
                imgSrc: 'https://agendasorocaba.com.br/wp-content/uploads/2013/10/multiplex-shopping-cidade.jpg',
                city: 'SOROCABA',
                address: 'ST: JOAO, 233',
            },
            {
                imgSrc: 'https://agendasorocaba.com.br/wp-content/uploads/2013/10/cinepolis-sorocaba-1.jpg',
                city: 'SAO PAULO',
                address: 'AV: DAS FLORES, 456',
            },
            {
                imgSrc: 'https://images.adsttc.com/media/images/58d5/3a58/e58e/ce48/a700/003f/large_jpg/002.jpg?1490369108',
                city: 'CALIFORNIA',
                address: 'AV: HUG, 843',
            },

        ],

        theaterMovies: [
            {
                title: 'Ghostbusters: Afterlife',
                weekdays: 'WEDNESDAY - FRIDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75985599/lg_imax_gb.jpg',
                schedule: [{
                    weekday: 'WED',
                    time: '9AM',
                },
                    {
                        weekday: 'FRI',
                        time: '10AM',
                    },
                    {
                        weekday: 'WED',
                        time: '12AM',
                    }]
            },
            {
                title: 'Resident Evil: Welcome to Raccoon City',
                weekdays: 'MONDAY - THURSDAY - FRIDAY',
                imgUrl: 'https://www.cinemark.com/media/75987260/lg_final_re.jpg',
                schedule: [{
                    weekday: 'MON',
                    time: '9AM',
                },
                    {
                        weekday: 'THU',
                        time: '4PM',
                    },
                    {
                        weekday: 'FRI',
                        time: '10PM',
                    }]
            },
            {
                title: 'House of Gucci',
                weekdays: 'SUNDAY - THURSDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75985038/lg_hog.jpg',
                schedule: [{
                    weekday: 'SUN',
                    time: '9AM',
                },
                    {
                        weekday: 'THU',
                        time: '5AM',
                    },
                    {
                        weekday: 'SAT',
                        time: '3AM',
                    }]
            },
            {
                title: 'Clifford the Big Red Dog',
                weekdays: 'SUNDAY - WEDNESDAY - FRIDAY',
                imgUrl: 'https://www.cinemark.com/media/75985588/lg_final_clifford.jpg',
                schedule: [{
                    weekday: 'SUN',
                    time: '9AM',
                },
                    {
                        weekday: 'WED',
                        time: '7AM',
                    },
                    {
                        weekday: 'FRI',
                        time: '10PM',
                    }]
            },
            {
                title: 'Eternals',
                weekdays: 'SUNDAY - FRIDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75983277/lg_payoff_eternals.jpg',
                schedule: [{
                    weekday: 'SUN',
                    time: '9AM',
                },
                    {
                        weekday: 'FRI',
                        time: '9AM',
                    },
                    {
                        weekday: 'SAT',
                        time: '9AM',
                    }]
            },
            {
                title: 'Christmas With The Chosen: The Messengers',
                weekdays: 'SUNDAY - FRIDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75985963/lg_cwtc.jpg',
                schedule: [{
                    weekday: 'WED',
                    time: '9AM',
                },
                    {
                        weekday: 'FRI',
                        time: '9AM',
                    },
                    {
                        weekday: 'SAT',
                        time: '9AM',
                    }]
            },
            {
                title: 'Encanto',
                weekdays: 'WEDNESDAY - THURSDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75985003/lg_payoff_encanto.jpg',
                schedule: [{
                    weekday: 'WED',
                    time: '9AM',
                },
                    {
                        weekday: 'THU',
                        time: '9AM',
                    },
                    {
                        weekday: 'SAT',
                        time: '9AM',
                    }]
            },
            {
                title: 'King Richard',
                weekdays: 'MONDAY - FRIDAY - SATURDAY',
                imgUrl: 'https://www.cinemark.com/media/75984160/king_richard_poster_large.jpg',
                schedule: [{
                    weekday: 'MON',
                    time: '9AM',
                },
                    {
                        weekday: 'FRI',
                        time: '9AM',
                    },
                    {
                        weekday: 'SAT',
                        time: '9AM',
                    }]
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
        SET_PREMIERE: (state, payload) => (state.premiere = payload),
    },
    actions: {
        fetchPremieres({commit}) {
            axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=a16ea728297818060c2ed1e5a6f1d09a`)
                .then(res => {
                    const payload = (res.data.results);
                    //order by ASC date
                    payload.sort((a,b) => (a.release_date > b.release_date) ? + 1 : (a.release_date < b.release_date) ? -1 : 0);
                    commit('SET_PREMIERE', payload)
                })
                .catch((e) => console.log(e))
        },
    },
    modules: {},
    getters: {
        searchResult: (state) => state.premiere,
    }
})
