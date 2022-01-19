import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users? JSON.parse(localStorage.users) :
      [
        {
          username: "admin",
          password: "admin",
          type: "admin"
        },
      ],

    jogoRecognizeEmotion: [
      {
        name: "alegria",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/alegria.svg",
          }
        ]
      },
      {
        name: "amor",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/amor.svg",
          }
        ]
      },
      {
        name: "cansaço",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/cansaço.svg",
          }
        ]
      },
      {
        name: "enojado",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/enojado.svg",
          }
        ]
      },
      {
        name: "espanto",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/espanto.svg",
          }
        ]
      },
      {
        name: "medo",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/medo.svg",
          }
        ]
      },
      {
        name: "tristeza",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/tristeza.svg",
          }
        ]
      },
      {
        name: "raiva",
        images: [
          {
            addedBy: "admin",
            image: "../assets/images/jogo/emojis/raiva.svg",
          }
        ]
      }
    ]
  },
  getters: {
    getjogoRecognizeEmotion: (state) => { return state.jogoRecognizeEmotion },

    getRandomImageEmotion: (state) => (emotion, image) => 
    { return {emotion: state.jogoRecognizeEmotion[emotion].name, image: state.jogoRecognizeEmotion[emotion].images[image].image } },
    
    isEmotion: (state) => (username, password) => 
    state.users.some(user => user.username == username && user.password == password),

  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
