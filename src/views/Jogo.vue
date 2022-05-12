<template>
  <div class="Jogo">
    <div>
      <table>
        <tr>
          <td></td>
          <td rowspan="2"></td>
          <!-- ~Change to webp format -->
          <picture>
            <source
              srcset="../assets/images/curvesBackground/game1Blue.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/curvesBackground/game1Blue.png"
              type="image/png"
            />
            <img
              src="../assets/images/curvesBackground/game1Blue.png"
              width="100%"
            />
          </picture>
        </tr>
        <tr>
          <td colspan="2">
            <div id="gameTitle">
              <h1>"Conheces esta expressão?"</h1>
            </div>
          </td>
        </tr>
      </table>
    </div>

    <div id="gameFrame" class="m-5">
      <div class="mt-3">
        <button
          class="btn mx-2"
          id="btnEditFilter"
          @click="openDialogFilter = !openDialogFilter"
        >
          FILTRAR
        </button>
        <router-link to="/JogoEdit">
          <button class="btn mx-2" id="btnEditFilter">EDITAR</button>
        </router-link>
      </div>

      <dialog :open="openDialogFilter" class="mt-5" style="width: 30%">
        <button type="button" class="close" @click="openDialogFilter = false">
          &times;</button
        ><br /><br />

        <div class="row row-cols-2">
          <div
            v-for="(emotion, index) in this.arrayRecognizeEmotion"
            :key="index"
            class="col"
          >
            <label :for="emotion.name">{{ emotion.name }}</label>
            <input
              type="checkbox"
              :id="emotion.name"
              class="col-1"
              @click="filterEmotions(emotion.name, $event)"
              checked
            />
          </div>
        </div>

        <br />
      </dialog>

      <div id="game" class="mx-5 mb-5 mt-2 col-10" v-if="level != maxLevel">
        <div id="gameNav" class="m-2">
          <div>
            <p>{{ this.level + 1 }}/{{ this.maxLevel }}</p>
          </div>
        </div>

        <div id="gameContent">
          <div class="row">
            <div class="col mb-5">
              <p>Que emoção é esta?</p>
            </div>
            <div class="col mb-5">
              <img :src="this.currentEmotionImage.image" class="col-6" />
              <!-- this.arrayRecognizeEmotion -->
            </div>
          </div>

          <div id="gameButtons" class="row my-2 mx-2">
            <button
              v-for="(emotion, index) in this.randomEmotionsSorted"
              :key="index"
              class="btn mx-2 mb-2"
              @click="checkButtonEmotion(emotion)"
              style="width: 20%"
            >
              <!-- v-bind:style="{width: '20%', backgroundColor: color}" -->
              <div class="my-2">
                {{ emotion }}
              </div>
            </button>
          </div>
        </div>
      </div>

      <div v-else>
        <div id="game" class="mx-5 mb-5 mt-2 col-10">
          <div class="m-5">
            <p>
              Parabéns, acabaste a partida com apenas {{ this.wrong }} respostas
              erradas!
            </p>
            <button class="btn" id="btnReset" @click="reset()">
              RECOMEÇAR
            </button>
          </div>
        </div>
      </div>
    </div>

    <NavBar></NavBar>

    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";
import { mapMutations } from "vuex";
import { mapGetters } from "vuex";

export default {
  components: {
    Footer,
    NavBar,
  },

  data() {
    return {
      openDialogFilter: false,

      maxLevel: 8,

      level: -1,
      currentEmotionImage: "",
      filteredEmotions: [],
      randomEmotionsImages: [],
      randomEmotionsSorted: [],

      wrong: 0,
    };
  },

  computed: {
    ...mapGetters({
      arrayRecognizeEmotion: "getjogoRecognizeEmotion",
      loggedUser: "getLoggedUser",
    }),

    ...mapGetters(["getRandomImageEmotion", "isEmotion"]),
  },

  created() {
    for (const pos of this.arrayRecognizeEmotion) {
      this.filteredEmotions.push({
        emotion: pos.name,
        checked: true,
      });
    }

    this.createRandomEmotions();
    this.createEmotionButtons();

    this.imagePerLevel();

    console.log("random: " + JSON.stringify(this.randomEmotionsImages));
  },

  methods: {
    ...mapMutations(["SET_LOGGED_USER"]),

    imagePerLevel() {
      if (this.level != this.maxLevel) {
        this.level = this.level + 1;
        this.currentEmotionImage = {
          pos: this.randomEmotionsImages[this.level].pos,
          emotion: this.randomEmotionsImages[this.level].emotion,
          image: this.randomEmotionsImages[this.level].image,
        };
      }
    },

    createRandomEmotions() {
      for (let index = 0; index < this.maxLevel; index++) {
        let emotion = Math.floor(
          Math.random() * this.arrayRecognizeEmotion.length
        );

        if (this.filteredEmotions[emotion].checked) {
          if (
            !this.randomEmotionsImages.some(
              (pos) => pos.emotion == this.arrayRecognizeEmotion[emotion].name
            )
          ) {
            let image = Math.floor(
              Math.random() * this.arrayRecognizeEmotion[emotion].images.length
            );

            this.randomEmotionsImages.push({
              pos: index,
              emotion: this.arrayRecognizeEmotion[emotion].name,
              image: this.arrayRecognizeEmotion[emotion].images[image].image,
            });
          } else {
            let image = Math.floor(
              Math.random() * this.arrayRecognizeEmotion[emotion].images.length
            );
            // let posInArray = this.randomEmotionsImages.find(pos => pos.emotion == this.arrayRecognizeEmotion[emotion].name).pos

            // no array de emotions/images aleatórios, verifica se a emoção aleatória que foi "pega" (e que já existe no array randomEmotionsImages) tem mais alguma imagem correspondente à mesma, para ser adicionada ao array respetivo de imagens
            if (
              this.randomEmotionsImages
                .filter(
                  (pos) =>
                    pos.emotion == this.arrayRecognizeEmotion[emotion].name
                )
                .every(
                  (pos) =>
                    pos.image !=
                    this.arrayRecognizeEmotion[emotion].images[image].image
                )
            ) {
              // this.arrayRecognizeEmotion[emotion].images[image].some(image => image.image !=)
              // this.randomEmotionsImages[posInArray].image != this.arrayRecognizeEmotion[emotion].images[image].image ) {            // checa no array de imagens pego na linha anterior, se há alguma imagem igual à imagem aleatória a querer ser adicionada

              this.randomEmotionsImages.push({
                pos: index,
                emotion: this.arrayRecognizeEmotion[emotion].name,
                image: this.arrayRecognizeEmotion[emotion].images[image].image,
              });

              index += 1;
            }
            index -= 1;
          }
        } else {
          index -= 1;
        }
      }
    },

    /**
     * ordena por ordem alfabética num novo array as emoções aleatoriamente selecionadas (array usado para a disposição dos botões)
     * Se as emoções aleatoriamente selecionadas forem inferiores a um total de 8, este adiciona a quantidade restante de emoções
     * até chegar a 8, para ter uma emoção para respetivo botão
     */
    createEmotionButtons() {
      for (const emotion of this.randomEmotionsImages) {
        if (!this.randomEmotionsSorted.some((pos) => pos == emotion.emotion)) {
          this.randomEmotionsSorted.push(emotion.emotion);
        }
      }

      if (this.randomEmotionsSorted.length < this.maxLevel) {
        let cycle = this.maxLevel - this.randomEmotionsSorted.length;
        for (let index = 0; index < cycle; index++) {
          let emotion = Math.floor(
            Math.random() * this.arrayRecognizeEmotion.length
          );
          if (
            !this.randomEmotionsSorted.some(
              (pos) => pos == this.arrayRecognizeEmotion[emotion].name
            )
          ) {
            this.randomEmotionsSorted.push(
              this.arrayRecognizeEmotion[emotion].name
            );
          } else {
            index -= 1;
          }
        }
      }

      this.randomEmotionsSorted.sort();
      console.log("emoções sorted: " + this.randomEmotionsSorted);
    },

    checkButtonEmotion(btnEmotion) {
      // alert('botão: '+btnEmotion+' emoção: '+this.currentEmotionImage.emotion)

      if (btnEmotion == this.currentEmotionImage.emotion) {
        if (this.loggedUser != null) {
          if (this.loggedUser.type == "crianca") {
            this.$store.commit("MUTATE_USER_ANSWERS", {
              emotion: this.currentEmotionImage.emotion,
              answer: "right",
            });
            this.SET_LOGGED_USER(this.loggedUser.username);
          }
        }
        this.imagePerLevel();
      } else {
        if (this.loggedUser != null) {
          this.$store.commit("MUTATE_USER_ANSWERS", {
            emotion: this.currentEmotionImage.emotion,
            answer: "wrong",
          });
          this.wrong += 1;
        }
      }
    },

    filterEmotions(emotion, event) {
      if (event.target.checked) {
        this.filteredEmotions.find(
          (pos) => pos.emotion == emotion
        ).checked = true;
      } else {
        this.filteredEmotions.find(
          (pos) => pos.emotion == emotion
        ).checked = false;
      }

      this.filteredEmotions.filter((pos) => pos.checked == true).length;

      this.changeMaxLevel();

      this.randomEmotionsImages = [];
      this.createRandomEmotions();

      this.randomEmotionsSorted = [];
      this.createEmotionButtons();

      this.level = -1;
      this.imagePerLevel();
    },

    changeMaxLevel() {
      let arrayRecognizeEmotionFiltered = this.arrayRecognizeEmotion.filter(
        (posEmotion) =>
          this.filteredEmotions
            .filter((pos) => pos.checked == true)
            .find((posChecked) => posChecked.emotion == posEmotion.name)
      );

      let nbrImages = 0;

      for (const emotionFiltered of arrayRecognizeEmotionFiltered) {
        nbrImages = nbrImages + emotionFiltered.images.length;
      }

      if (nbrImages < 8) {
        this.maxLevel = nbrImages;
        alert(this.maxLevel);
      } else {
        this.maxLevel = 8;
      }
    },

    reset() {
      this.level = -1;

      this.changeMaxLevel();

      this.randomEmotionsImages = [];
      this.createRandomEmotions();

      this.randomEmotionsSorted = [];
      this.createEmotionButtons();

      this.imagePerLevel();
    },
  },
};
</script>

<style lang="scss" scoped>
dialog {
  position: absolute;

  background-color: #ffffffd5;
  border-style: solid;
  border-width: 3px;
  border-color: #29abe2;
  z-index: 1;
}

#gameTitle {
  display: flex;
  justify-content: center;
}

#gameFrame {
  background: linear-gradient(
    149.88deg,
    rgba(183, 231, 231, 0.3) 36.38%,
    rgba(183, 231, 231, 0) 99.69%
  );
  border-radius: 20px;
  border-style: dashed;
  border-width: 2px;
  border-color: #29abe2;
}
#game {
  display: inline-block;
  background-color: white;
  border-style: solid;
  border-width: 1px;
  border-color: #606060;
}
#gameNav {
  display: flex;
  justify-content: end;
}
#gameContent {
  display: flex;
  flex-direction: column;
}
#gameContent .row .col {
  display: flex;
  align-items: center;
  justify-content: center;
}

#btnEditFilter,
#btnReset {
  font-family: Baloo_2 extrabold;
  background-color: #ffffff;
  color: #29abe2;
  border-color: #29abe2;
}
#btnEditFilter:hover,
#btnReset:hover {
  background-color: #29abe2;
  color: #ffffff;
}

#gameButtons {
  display: flex;
  justify-content: space-evenly;
}
#gameButtons div {
  display: flex;
  flex-direction: column;
  padding: 0px;
}
#gameButtons button {
  font-family: Baloo_2 extrabold;
  background-color: #29abe2;
  color: #ffffff;
}
#gameButtons button:hover {
  background-color: #ffffff;
  color: #29abe2;
  border-style: solid;
  border-width: 1px;
  border-color: #29abe2;
}
#gameButtons button:active {
  background-color: #ffffff;
  color: #29abe2;
}
</style>