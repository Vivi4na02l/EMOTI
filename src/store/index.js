import Vue from 'vue'
import Vuex from 'vuex'

import { AuthService } from '../services/auth.service';
import { ChildrenService } from '../services/children.service'
import { PsychologistService } from '../services/psychologists.service'
import { TutorService } from '../services/tutors.service'
import { QuestionService } from '../services/questions.service'
import { EmotionService } from '../services/emotions.service';
import { EmotionStatsService } from '../services/emotion_stats.service'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    // users: localStorage.users? JSON.parse(localStorage.users) :
    //   [
    //     {
    //       username: "Admin",
    //       password: "Esmad_2122",
    //       type: "admin"
    //     },
    //     {
    //       username: "User",
    //       password: "Esmad_2122",
    //       type: "user"
    //     }
    //   ],
    users: [],
    loggedIn: false,
    loggedUser: [],
    user: localStorage.user ? JSON.parse(localStorage.user) : null,

    // jogoRecognizeEmotion: localStorage.arrayEmotions ? JSON.parse(localStorage.arrayEmotions) : [
    //   {
    //     name: "alegria",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/alegria.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/alegria2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "amor",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/amor.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/amor2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "cansaço",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/cansaço.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/cansaço2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "enojado",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/enojado.svg",
    //       }
    //     ]
    //   },
    //   {
    //     name: "espanto",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/espanto.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/espanto2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "medo",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/medo.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/medo2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "raiva",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/raiva.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/raiva2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "tristeza",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/tristeza.svg",
    //       },
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/tristeza2.png",
    //       }
    //     ]
    //   },
    //   {
    //     name: "vergonha",
    //     images: [
    //       {
    //         addedBy: "admin",
    //         image: "imagens/emojis/vergonha.svg",
    //       }
    //     ]
    //   },
    // ],

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
    questions: [],
    emotions: [],
    stats: []
  },

  getters: {
    getjogoRecognizeEmotion: (state) => { return state.jogoRecognizeEmotion },

    getarrayFAQ: (state) => { return state.arrayFAQ },

    isUser: (state) => (username, password) =>
      state.users.some(
        (user) => user.username === username && user.password === password
      ),

    isUsernameAvailable: (state) => (username) => state.users.every((user) => user.username !== username),
    getLoggedUser: (state) => state.loggedUser,
    getLoggedIn: (state) => state.loggedIn,
    getMessage: (state) => state.message,
    getUsers: (state) => state.users,
    getQuestions: (state) => state.questions,
    getEmotions: (state) => state.emotions,
    getStats: (state) => state.stats,
    getUser: (state) => state.user
  },

  mutations: {
    loginSuccess(state, payload) {
      state.loggedIn = true;
      state.loggedUser = payload;
      state.user = payload
    },
    loginFailure(state) {
      state.loggedIn = false;
      state.loggedUser = null;
    },
    // SET_LOGGED_USER(state, payload) {
    //   state.loggedUser = state.users.find((user) => user.username === payload);
    //   localStorage.loggedUser = JSON.stringify(state.loggedUser);
    // },
    // SET_NEW_USER(state, payload) {
    //   state.users.push(payload);
    //   // localStorage.users = JSON.stringify(state.users);
    // },
    // SET_LOGOUT(state) {
    //   state.loggedUser = null;
    //   state.loggedIn = false;
    //   // localStorage.removeItem("loggedUser");
    // },
    logout(state) {
      state.loggedIn = false;
      state.loggedUser = null;
      state.user = null
    },
    // SET_NEW_PASSWORD(state, payload) {
    //   state.users.find((user) => user.username == state.loggedUser.username).password = payload
    //   // localStorage.users = JSON.stringify(state.users);
    // },

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

    // MUTATE_ARRAY_QUESTIONS: (state, payload) => state.arrayFAQ.push({
    //   approved: false,
    //   question: payload,
    //   answer: ''
    // }),

    // MUTATE_USER_ANSWERS(state, payload) {
    //   // state.loggedUser.game = []
      
    //     if (payload.answer == 'right') {
    //       state.loggedUser.game
    //         .find((pos) => pos.emotion == payload.emotion)
    //         .right++
    //     }

    //     if (payload.answer == 'wrong') {
    //       state.loggedUser.game
    //         .find((pos) => pos.emotion == payload.emotion)
    //         .wrong++
    //     }
    //     console.log(state.loggedUser);
    //   // localStorage.users = JSON.stringify(state.users);
    // },
    SET_MESSAGE(state, payload) {
      state.message = payload
    },
    SET_QUESTIONS(state,payload) {
      state.questions = payload
    },
    SET_EMOTIONS(state, payload) {
      state.emotions = payload
    },
    SET_STATS(state, payload) {
      state.stats = payload
    }
  },
  actions: {
    async login({ commit }, user) {
      try {
        const loggedUser = await AuthService.login(user);
        commit('loginSuccess', loggedUser);
      }
      catch (error) {
        commit('loginFailure');
        throw error;
      }
    },

    /* Registo de uma criança */
    async registerChild({ commit }, child) {
      try {
        console.log(child)
        const response = await ChildrenService.register(child)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '');
        throw error;
      }
    },

    async registerTutor({ commit }, tutor) {
      try {
        console.log(tutor)
        const response = await TutorService.register(tutor)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '');
        throw error;
      }
    },

    async registerPsychologist({ commit }, psychologist) {
      try {
        console.log(psychologist)
        const response = await PsychologistService.register(psychologist)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '');
        throw error;
      }
    },

    async changePasswordChild({ commit }, user) {
      try {
        const response = await ChildrenService.changePassword(user)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '')
        throw error;
      }
    },

    async changePasswordTutor({ commit }, user) {
      try {
        const response = await TutorService.changePassword(user)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '')
        throw error;
      }
    },

    async changePasswordPsychologist({ commit }, user) {
      try {
        const response = await PsychologistService.changePassword(user)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '')
        throw error;
      }
    },

    logout({ commit }) {
      AuthService.logout();
        // commit mutation logout
      commit('logout');
    },

    async getAllQuestions( { commit } ) {
      try {
        const response = await QuestionService.getAll()
        commit('SET_QUESTIONS', response)
      }
      catch (error) {
        commit('SET_QUESTIONS', []);
        commit("SET_MESSAGE", error);
        throw error;
      }
    },

    async createQuestion( { commit }, question) {
      try {
        const response = await QuestionService.create(question)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '')
        throw error;
      }
    },

    async answer( { commit }, payload) {
      try {
        const response = await QuestionService.answer(payload.answer,payload.id)
        commit('SET_MESSAGE', response.msg)
      }
      catch (error) {
        commit('SET_MESSAGE', '')
        throw error;
      }
    },
  
    async getAllEmotions({ commit }) {
      try {
        const response = await EmotionService.getAll()
        commit('SET_EMOTIONS', response)
      }
      catch (error) {
        commit('SET_EMOTIONS', []);
        commit("SET_MESSAGE", error);
        throw error;
      }
    },

    // async createEmotion({ commit }, emotion) {
    //   try {
    //     const response = await EmotionService.create(emotion)
    //     commit('SET_EMOTIONS', response)
    //   }
    //   catch (error) {
    //     commit('SET_EMOTIONS', []);
    //     commit("SET_MESSAGE", error);
    //     throw error;
    //   }
    // },

    async updateStats({ commit }, payload) {
      try {
        const response = await EmotionStatsService.changeStats(payload.stats, payload.id)
        commit('SET_MESSAGE', response)
      }
      catch (error) {
        // commit('SET_EMOTIONS', []);
        commit("SET_MESSAGE", error);
        throw error;
      }
    },
    




  },
  modules: {
  }
})
