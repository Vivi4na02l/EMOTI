import Vue from 'vue'
import Vuex from 'vuex'

import { ChildrenService } from '../services/children.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    users: localStorage.users ? JSON.parse(localStorage.users) :
      [
        {
          username: "Admin",
          password: "Esmad_2122",
          type: "admin"
        },
        {
          username: "User",
          password: "Esmad_2122",
          type: "user"
        }
      ],
    loggedUser: null,

    jogoRecognizeEmotion: localStorage.arrayEmotions ? JSON.parse(localStorage.arrayEmotions) : [
      {
        name: "alegria",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/alegria.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/alegria2.png",
          }
        ]
      },
      {
        name: "amor",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/amor.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/amor2.png",
          }
        ]
      },
      {
        name: "cansaço",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/cansaço.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/cansaço2.png",
          }
        ]
      },
      {
        name: "enojado",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/enojado.svg",
          }
        ]
      },
      {
        name: "espanto",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/espanto.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/espanto2.png",
          }
        ]
      },
      {
        name: "medo",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/medo.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/medo2.png",
          }
        ]
      },
      {
        name: "raiva",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/raiva.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/raiva2.png",
          }
        ]
      },
      {
        name: "tristeza",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/tristeza.svg",
          },
          {
            addedBy: "admin",
            image: "imagens/emojis/tristeza2.png",
          }
        ]
      },
      {
        name: "vergonha",
        images: [
          {
            addedBy: "admin",
            image: "imagens/emojis/vergonha.svg",
          }
        ]
      },
    ],

    arrayFAQ: [
      {
        approved: true,
        question: "Como posso saber se o caso do/da meu/minha filho/filha é genético? É possível saber de que lado da família vem o autismo?",
        answer: "Se o seu filho tem autismo e está interessado em testes genéticos, peça ao médico do seu filho que o encaminhe para um geneticista médico. Depois de conduzir um histórico familiar detalhado e um exame físico, o médico pode recomendar um teste genético, que geralmente é um exame de sangue e às vezes um exame de urina."
      },
      {
        approved: true,
        question: "Como é que o autismo é diagnosticado? Existe um teste para isto?",
        answer: "Ainda não há marcadores biológicos e exames específicos para autismo, mas alguns exames, como o cariótipo com pesquisa de X frágil, o eletroencefalograma (EEG), a ressonância magnética nuclear (RNM), os erros inatos do metabolismo, o teste do pezinho, as sorologias para sífilis, rubéola e toxoplasmose; a audiometria e testes neuropsicológicos podem ser necessários para investigar as causas e doenças associadas."
      }
    ],
    message: "",
  },

  getters: {
    getjogoRecognizeEmotion: (state) => { return state.jogoRecognizeEmotion },

    getarrayFAQ: (state) => { return state.arrayFAQ },

    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),

    isUsernameAvailable: (state) => (username) => state.users.every((user) => user.username !== username),
    getLoggedUser: (state) => { return state.loggedUser }
  },

  mutations: {
    SET_LOGGED_USER(state, payload) {
      state.loggedUser = state.users.find((user) => user.username === payload);
      localStorage.loggedUser = JSON.stringify(state.loggedUser);
    },
    SET_NEW_USER(state, payload) {
      state.users.push(payload);
      localStorage.users = JSON.stringify(state.users);
    },
    SET_LOGOUT(state) {
      state.loggedUser = null;
      localStorage.removeItem("loggedUser");
    },
    SET_NEW_PASSWORD(state, payload) {
      state.users.find((user) => user.username == state.loggedUser.username).password = payload
      localStorage.users = JSON.stringify(state.users);
    },

    MUTATE_ARRAY_EMOTIONS(state, payload) {
      state.jogoRecognizeEmotion.push(payload)

      if (state.users.find(pos => pos.type == 'crianca')) {
        state.users.filter(pos => pos.type == 'crianca').game.push({
          emotion: payload.emotion,
          right: 0,
          wrong: 0
        })
      }

      localStorage.arrayEmotions = JSON.stringify(state.jogoRecognizeEmotion);
    },

    MUTATE_EMOTION(state, payload) {
      for (const image of payload.images) {
        state.jogoRecognizeEmotion.find(pos => pos.name == payload.emotion).images.push(image)
      }

      localStorage.arrayEmotions = JSON.stringify(state.jogoRecognizeEmotion);
    },

    MUTATE_ARRAY_QUESTIONS: (state, payload) => state.arrayFAQ.push({
      approved: false,
      question: payload,
      answer: ''
    }),

    MUTATE_USER_ANSWERS(state, payload) {
      if (state.loggedUser.type == 'crianca') {
        if (payload.answer == 'right') {
          state.users.find((user) => user.username == state.loggedUser.username).game
            .find((pos) => pos.emotion == payload.emotion)
            .right++
        }

        if (payload.answer == 'wrong') {
          state.users.find((user) => user.username == state.loggedUser.username).game
            .find((pos) => pos.emotion == payload.emotion)
            .wrong++
        }
      }

      localStorage.users = JSON.stringify(state.users);
    },
    SET_MESSAGE(state, payload) {
      state.message = payload
    }
  },
  actions: {
    /* Registo de uma criança */
    async register({ commit }, child) {
      try {
        const response = await ChildrenService.register(child)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '');
        throw error;
      }
    }
  },
  modules: {
  }
})
