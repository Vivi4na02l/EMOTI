<template>
  <div class="SaibaMais">
    <img
      src="../assets/images/SuporteFamiliar/introSuporte.svg"
      class="col-7"
    />

    <div colspan="2" id="sectionFAQ">
      <div
        id="FAQ"
        v-for="(question, index) in this.arrayFAQ"
        :key="index"
        class="m-2 col-8"
      >
        <div v-if="question.approved">
          <div id="opened" v-if="!question.opened">
            <div id="divQuestion">
              <p class="m-5">{{ question.question }}</p>

              <button
                class="btn m-2"
                id="openAnswer"
                @click="question.opened = !question.opened"
              >
                +
              </button>
            </div>
          </div>

          <div id="opened" v-else>
            <div id="divQuestion">
              <p class="m-5">{{ question.question }}</p>

              <button
                class="btn m-2"
                id="openAnswer"
                @click="question.opened = !question.opened"
              >
                ―
              </button>
            </div>
            <div id="divAnswer" class="mt-2">
              <p class="m-5">{{ question.answer }}</p>
            </div>
          </div>
        </div>
      </div>

      <table style="width: 100%" class="my-5">
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
          <td colspan="2" class="col-8">
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
                  v-model="newQuestion"
                ></textarea>
                <button class="btn m-2 text-right" id="btnSend" type="submit">
                  <div class="mx-3 my-1">Enviar</div>
                </button>
              </div>
            </form>
          </td>
        </tr>
      </table>
    </div>

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
      arrayFAQ: [],

      newQuestion: "",
    };
  },

  computed: {
    ...mapGetters({
      arrayRecognizeEmotion: "getjogoRecognizeEmotion",
      getarrayFAQ: "getarrayFAQ",
    }),
  },

  created() {
    for (const question of this.getarrayFAQ) {
      if (question.approved) {
        this.arrayFAQ.push({
          opened: false,
          approved: question.approved,
          question: question.question,
          answer: question.answer,
        });
      }
    }
  },

  methods: {
    addQuestion() {
      this.$store.commit("MUTATE_ARRAY_QUESTIONS", this.newQuestion);
    },
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
  background-color: #ffffff;
  border-style: solid;
  border-width: 1px;
  border-color: #dd65b0;
  border-radius: 10px;

  display: flex;
  justify-content: space-between;
}
.SaibaMais #divQuestion p {
  color: #606060;
}

.SaibaMais #divAnswer {
  background-color: #fff5fb;
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
</style>