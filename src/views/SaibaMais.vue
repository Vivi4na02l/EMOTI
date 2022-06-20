<template>
  <div class="SaibaMais">
    <img
      src="../assets/images/SuporteFamiliar/introSuporte.svg"
      class="col-7"
    />

    <div colspan="2" id="sectionFAQ">
      <div
        id="FAQ"
        v-for="(question, index) in this.questions.slice().reverse()" 
        :key="index"
        class="m-2 col-7"
      >
          <div v-if="getloggedUser.role == 'tutor'">
            <div id="divQuestion">
              <p class="m-5">{{ question.text }}</p>
            </div>
            <div id="divAnswer" class="mt-2">
              <p class="m-2">{{ question.answer }}</p>
            </div>
          </div>
          <div v-else>
            <div id="divQuestion">
              <p class="m-5">{{ question.text }}</p>
            </div>
            <div id="divAnswer" class="mt-2">
              <p class="m-2">{{ question.answer }}</p>
            </div>
            <div v-if="question.answer == null && getloggedUser.role == 'psychologist'" id="divPsycAnswer">
              <textarea cols="60" rows="3" style="border-radius:12px" v-model="answers[`text${question.id}`]"></textarea>
              <button id="btnSend" @click="publishAnswer(question.id)">Responder</button>
              
            </div>
          </div>
      </div>

    </div>

    <!-- <div
      id="FAQ"
      v-for="(question, index) in this.questions"
      :key="index"
      class="m-2 col-8"
        
    >
      <div id="divQuestion">
        <p class="m-5">{{ question.text }}</p>
      </div>
      <div id="divAnswer" class="mt-2">
        <p class="m-2">{{ question.answer }}</p>
      </div>
    </div> -->
          
        <!-- </div> -->
      <!-- </div> -->

      <table style="width: 100%" class="my-5" v-if="getloggedUser.role == 'tutor'">
        <tr>
          <td></td>
          <td rowspan="2">
            <div id="pinkImage" class="text-left">
              <!-- ~Change to webp format -->
              <picture>
                <source
                  srcset="../assets/images/curvesBackground/saibaMaisPink.webp"
                  type="image/webp"
                />
                <source
                  srcset="../assets/images/curvesBackground/saibaMaisPink.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/curvesBackground/saibaMaisPink.png"
                  width="100%"
                />
              </picture>
            </div>
          </td>
        </tr>
        <tr>
          <td colspan="2" class="col-8" >
            <form @submit.prevent="addQuestion()">
              <div id="createQuestion">
                <h1>
                  Faça uma
                  <p style="color: #dd65b0; display: inline">pergunta</p>
                  !
                </h1>
                <textarea
                  rows="10"
                  cols="100"
                  class="mt-5"
                  id="txtQuestion"
                  v-model="form.text"
                ></textarea>
                <button class="btn m-2 text-right" id="btnSend" type="submit">
                  <div class="mx-3 my-1">Enviar</div>
                </button>
              </div>
            </form>
            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
            <div
              v-if="message"
              class="alert"
              :class="successful ? 'alert-success' : 'alert-danger'"
            >
              {{ message }}
            </div>
          </td>
        </tr>
      </table>

    <NavBar></NavBar>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import { mapGetters } from "vuex";

export default {
  components: {
    Footer,
    NavBar,
  },

  data() {
    return {
      // arrayFAQ: [],
      form: {
        text: ""
      },
      answers: {},
      questions: [],
      message: "",
      loading: false,
      id: null
    }
  },

  computed: {
    ...mapGetters({
      arrayRecognizeEmotion: "getjogoRecognizeEmotion",
      // getarrayFAQ: "getarrayFAQ",
      getloggedUser: "getLoggedUser",
      getQuestions: "getQuestions",
      getMessage: "getMessage"
    }),
  },

  // created() {
  //   for (const question of this.getarrayFAQ) {
  //     if (question.approved) {
  //       this.arrayFAQ.push({
  //         opened: false,
  //         approved: question.approved,
  //         question: question.question,
  //         answer: question.answer,
  //       });
  //     }
  //   }
  // },
  // created() {
  //   console.log(this.questions)
  //   for (const question of this.questions) {
  //       question.opened = false;
  //   }
  // },
  methods: {
    async addQuestion() {
      // this.$store.commit("MUTATE_ARRAY_QUESTIONS", this.newQuestion);
      this.loading = true;
      this.errors = [];
      this.form.username = this.getloggedUser.username

      if (this.form.text) {
        try {
          
          await this.$store.dispatch("createQuestion", this.form);
          setTimeout(() => { location.reload() }, 1400);
          // this.$forceUpdate();
        } catch (error) {
          console.log(error)
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        } finally {
          this.loading = false;
        }
      } else {
        this.loading = false;
        this.errors.push("Question text required.");
      }
    },
    async getAllQuestions() {
      this.loading = true;
      try {
        await this.$store.dispatch("getAllQuestions");
        this.questions = this.getQuestions;
      } catch (error) {
        this.message =
          (error.response && error.response.data) ||
          error.message ||
          error.toString();
      } finally {
        this.loading = false;
      }
    },

    async publishAnswer(id) {
      this.loading = true,
      this.errors = [];
      // this.id = payload
      // this.answers.username = this.getloggedUser.username
      // console.log(payload)
      const answer = {
        username: this.getloggedUser.username,
        text: this.answers[`text${id}`]
      }
      if (this.answers[`text${id}`]) {
        try {
          await this.$store.dispatch("answer", {answer, id});
          setTimeout(() => { location.reload() }, 1400);
          // this.$forceUpdate();
        } catch (error) {
          console.log(error)
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
        } finally {
          this.loading = false;
        }
      } else {
        this.loading = false;
        this.errors.push("Answer text required.");
      }
    }
  },
  mounted () {
    this.getAllQuestions();
  },
};
</script>

<style lang="scss" scoped>
.SaibaMais #sectionFAQ {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.SaibaMais #FAQ,
.SaibaMais #opened {
  display: block;
  flex-direction: column;
  align-items: center;
}

.SaibaMais #divQuestion {
  background-color: #E085BE;
  border-style: solid;
  border-width: 3px;
  border-color: #DD65B0;
  border-radius: 20px;

  display: flex;
  justify-content: space-between
}
.SaibaMais #divQuestion p {
  color: white;
}

.SaibaMais #divAnswer {
  background-color: #ffe6f5;
  border-radius: 10px;
}
.SaibaMais #divAnswer p {
  color: black;
}

.SaibaMais #openAnswer {
  border-radius: 50px;
}
.SaibaMais #openAnswer,
.SaibaMais #btnSeeAll,
#btnSend {
  font-family: Baloo_2 extrabold;
  background-color: #ffffff;
  color: #dd65b0;
  border-color: #dd65b0;
}
.SaibaMais #btnSeeAll:hover,
#btnSend:hover {
  background-color: #dd65b0;
  color: #ffffff;
  border-color: #dd65b0;
}

#txtQuestion {
  border-color: #dd65b0;
}

#createQuestion {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#txtAnswer {
  border-radius: 15px;
}
#divPsycAnswer {
  display: flex;
  align-items: flex-end;
  justify-content: space-around;
}
</style>