<template>
  <div>
    <!-- Background -->
    <table>
      <tr>
        <td></td>
        <td rowspan="2">
          <!-- ~Change to webp format -->
          <picture>
            <source
              srcset="../assets/images/curvesBackground/jogosbg.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/curvesBackground/jogosbg.png"
              type="image/png"
            />
            <img
              src="../assets/images/curvesBackground/jogosbg.png"
              width="100%"
            />
          </picture>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <div class="row">
            <div class="col-4">
              <h2>"Conheces esta expressão?"</h2>
              <p>
                Neste jogo tens de adivinhar a emoção <br />
                associada a cada imagem que será mostrada.
              </p>
              <router-link to="/Jogo">
                <button class="btn mt-3 mr-3" id="btnJogar">Jogar</button>
              </router-link>
            </div>
          </div>
        </td>
      </tr>
    </table>

    <div class="explanation-container">
      <div class="wrapper">
        <div id="gm">
          <div style="display: block">
            <h2>
              O poder da
              <p style="color: #4081e2; display: inline">gamificação</p>
              em pessoas com autismo
            </h2>
          </div>

          <div>
            <table style="width: 100%">
              <tr>
                <td></td>
                <td id="backgroundImage" rowspan="2">
                  <div id="divLinhaVerde">
                    <img
                      id="linhaVerde"
                      src="../assets/images/curvesBackground/linha curvada verde.svg"
                      width="65%"
                    />
                  </div>
                  <!-- <img src="../assets/images/curvesBackground/Peças.svg" width="100%"> -->
                </td>
              </tr>
              <tr>
                <td colspan="2">
                  <div id="container">
                    <p>
                      Os jogos caracterizam-se por uma importante e viável
                      alternativa de auxílio. Através deles, o aprendizado
                      torna-se mais fácil e tranquilo de absorver. Assim, a
                      gamificação pode aumentar o engajamento e a aprendizagem
                      de crianças autistas.
                    </p>
                  </div>
                </td>
              </tr>
            </table>
          </div>
        </div>
      </div>
    </div>
    <div style="height: 100px; visibility: hidden"></div>

    <NavBar></NavBar>
    <Footer></Footer>
  </div>
</template>

<script>
import Footer from "../components/Footer.vue";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    Footer,
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
.wrapper {
  width: 1200px;
  margin: 0 auto;
}

header {
  display: flex;
  justify-content: space-between;
}

header h2 {
  font-family: Baloo_2 extrabold;
  color: #606060;
}

header p {
  color: black;
}

// Botão jogar
#btnJogar {
  background-color: #29abe2;
  color: #ffffff;
  height: 55px;
  width: 140px;
  border-radius: 14px;
  filter: drop-shadow(5px 4px 2px #00000030);

  font-family: Baloo_2 extrabold;
}
#btnJogar:hover {
  background-color: #ffffff;
  color: #29abe2;
}
#btnJogar:active {
  background-color: #ffffff;
  color: #29abe2;
}

#gm {
  bottom: 5000px;
}

#gm h2 {
  position: relative;
  left: 15px;
  top: 70px;
  font-family: Baloo_2 extrabold;
  font-style: normal;
  font-weight: 800;
  font-size: 40px;
  line-height: 76px;
  /* identical to box height */

  color: #606060;
}

#container {
  position: relative;
  width: 900px;
  height: 200px;
  left: 150px;
  top: 130px;

  z-index: -1;

  background: #b7e7e7;
  border-radius: 50px;
}

#container p {
  position: relative;
  left: 50px;
  top: 70px;
  color: black;
  font-size: 18px;
  width: 820px;
}

#backgroundImage {
  background-image: url("../assets/images/curvesBackground/Peças.svg");
  background-size: cover;
  background-repeat: no-repeat;

  // display: flex;
}

#divLinhaVerde {
  display: flex;
  justify-content: flex-end;
  position: relative;
  left: -165px;
  top: 40px;
}
</style>