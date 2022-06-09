<template>
  <div class="mainpage">
    <div id="yellowSection">
      <div id="yellowSection">
        <table>
          <tr>
            <td></td>
            <td rowspan="2">
              <!-- Change to webp format -->
              <picture>
                <source
                  media="(max-width:1920)"
                  width="100%"
                  height="auto"
                  srcset="../assets/images/curvesBackground/mainpageYellow.webp"
                  type="image/webp"
                />
                <source
                  media="(max-width:1920)"
                  width="100%"
                  height="auto"
                  srcset="../assets/images/curvesBackground/mainpageYellow.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/curvesBackground/mainpageYellow.png"
                  width="100%"
                  height="auto"
                />
              </picture>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div id="yellowContent">
                <div>
                  <h3 class="mr-4" style="color: black; margin-left: 200px">
                    O <strong>autismo</strong> é parte deste mundo
                  </h3>
                  <h3 class="ml-5" style="color: black">
                    e não de um mundo à parte!
                  </h3>
                </div>
                <!-- Change to webp format -->
                <picture>
                  <source
                    srcset="../assets/images/mundo.webp"
                    type="image/webp"
                    width="30%"
                  />
                  <source
                    srcset="../assets/images/mundo.png"
                    type="image/png"
                  />
                  <img
                    src="../assets/images/mundo.png"
                    style="width: 30%"
                    height="auto"
                  />
                </picture>
              </div>
            </td>
          </tr>
        </table>
      </div>
      <div id="pinkSection">
        <table style="width: 100%">
          <tr>
            <td></td>
            <td rowspan="2">
              <div id="pinkImage" class="text-left">
                <!-- Change to webp format -->
                <picture>
                  <source
                    srcset="../assets/images/curvesBackground/mainpagePink.webp"
                    type="image/webp"
                  />
                  <source
                    srcset="../assets/images/curvesBackground/mainpagePink.png"
                    type="image/png"
                  />
                  <img
                    src="../assets/images/curvesBackground/mainpagePink.png"
                    width="50%"
                    height="auto"
                  />
                </picture>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div id="pinkContent" class="row">
                <div class="col ml-5"></div>

                <div class="col ml-5" id="divWelcomingText">
                  <h1>
                    Bem-vindo ao
                    <p style="color: #dd65b0; display: inline">Emoti</p>
                    !
                  </h1>
                  <p style="width: 90%">
                    O Emoti dedica-se ao apoio das crianças diagnosticadas com
                    PEA, promovendo o reconhecimento das emoções através de
                    imagens, assim como ajuda os familiares a compreender melhor
                    o autismo.
                  </p>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="blueSection">
        <table style="width: 100%">
          <tr>
            <td></td>
            <td rowspan="2">
              <div class="d-flex justify-content-center">
                <!-- Change to webp format -->
                <picture>
                  <source
                    srcset="
                      ../assets/images/curvesBackground/mainpageBlueDetails.webp
                    "
                    type="image/webp"
                  />
                  <source
                    srcset="
                      ../assets/images/curvesBackground/mainpageBlueDetails.png
                    "
                    type="image/png"
                  />
                  <img
                    src="../assets/images/curvesBackground/mainpageBlueDetails.png"
                    width="90%"
                    height="auto"
                    id="blueDetails"
                  />
                </picture>
              </div>
            </td>
          </tr>
          <tr>
            <td colspan="2">
              <div id="blueContent" class="row">
                <div class="col">
                  <!-- Change to webp format -->
                  <picture>
                    <source
                      srcset="../assets/images/jogo.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="../assets/images/jogo.png"
                      type="image/png"
                    />
                    <img src="../assets/images/jogo.png" class="col-6" />
                  </picture>
                </div>
                <div class="col">
                  <div class="mt-5">
                    <h1>"Conheces esta expressão?"</h1>
                    <p style="width: 70%">
                      Neste jogo tens de adivinhar a emoção associada a cada
                      imagem que será mostrada. Joga todos os dias e torna-te um
                      mestre das emoções!
                    </p>
                    <router-link to="/Jogos" id="btnPlayLink">
                      <button class="btn mt-5" id="btnPlay">
                        <div class="my-2">JOGAR</div>
                      </button>
                    </router-link>
                  </div>
                </div>
              </div>
            </td>
          </tr>
        </table>
      </div>

      <div id="greenSection" class="mt-5">
        <div id="greenHeader">
          <h1>
            Navegue pelo
            <p style="color: #28a167; display: inline">site</p>
            !
          </h1>
          <div>
            <!-- Change to webp format -->
            <picture>
              <source
                srcset="
                  ../assets/images/curvesBackground/mainpageGreenCurve.webp
                "
                type="image/webp"
              />
              <source
                srcset="
                  ../assets/images/curvesBackground/mainpageGreenCurve.png
                "
                type="image/png"
              />
              <img
                src="../assets/images/curvesBackground/mainpageGreenCurve.png"
                width="100%"
                height="auto"
              />
            </picture>
          </div>
        </div>

        <div id="greenContent" class="row">
          <router-link to="/Jogos" class="col ml-5 mt-5">
            <div id="divLinkImages" class="mb-3">
              <!-- Change to webp format -->
              <picture>
                <source
                  srcset="../assets/images/icons/jogos.webp"
                  type="image/webp"
                />
                <source
                  srcset="../assets/images/icons/jogos.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/icons/jogos.png"
                  width="30%"
                  class="my-5"
                />
              </picture>
            </div>
            <p id="title">Jogos</p>
            <p>Venha conhecer os jogos direcionados para crianças autistas</p>
          </router-link>

          <router-link to="/SuporteFamiliar" class="col mt-5">
            <div id="divLinkImages" class="mb-3">
              <!-- Change to webp format -->
              <picture>
                <source
                  srcset="../assets/images/icons/suporteFamiliar.webp"
                  type="image/webp"
                />
                <source
                  srcset="../assets/images/icons/suporteFamiliar.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/icons/suporteFamiliar.png"
                  width="30%"
                  class="my-5"
                />
              </picture>
            </div>
            <p id="title">Suporte familiar</p>
            <p style="width: 90%">
              O apoio familiar é crucial no desenvolvimento infantil, tire
              dúvidas e saiba como ter influência positiva na vida das crianças
              com PEA
            </p>
          </router-link>
          <router-link to="/Psicologos" class="col mt-5">
            <div id="divLinkImages" class="mb-3">
              <!-- Change to webp format -->
              <picture>
                <source
                  srcset="../assets/images/icons/psicologos.webp"
                  type="image/webp"
                />
                <source
                  srcset="../assets/images/icons/psicologos.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/icons/psicologos.png"
                  width="30%"
                  class="my-5"
                />
              </picture>
            </div>
            <p id="title">Psicólogos</p>
            <p>
              Ao contar com um profissional já é meio caminho andado. Conheça os
              psicólogos disponíveis
            </p>
          </router-link>
          <router-link to="/sobreNos" class="col mt-5">
            <div id="divLinkImages" class="mb-3">
              <!-- Change to webp format -->
              <picture>
                <source
                  srcset="../assets/images/icons/sobreNos.webp"
                  type="image/webp"
                />
                <source
                  srcset="../assets/images/icons/sobreNos.png"
                  type="image/png"
                />
                <img
                  src="../assets/images/icons/sobreNos.png"
                  width="30%"
                  class="my-5"
                />
              </picture>
            </div>
            <p id="title">Sobre nós</p>
            <p>Descubra quem é a equipa EMOTI!</p>
          </router-link>
        </div>
      </div>
    </div>

    <Footer style="background-color: #adeacd"></Footer>
    <NavBar></NavBar>
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

<style>
h1 {
  font-family: Baloo_2 extrabold;
}
h1,
p {
  color: #606060;
}

#yellowContent {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
}

#divWelcomingText {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

#blueSection {
  background-image: url("../assets/images/curvesBackground/mainpageBlue.png");
  background-size: cover;
}

#blueContent div div,
#blueContent div p {
  display: flex;
  flex-direction: column;
  align-items: center;
}

#btnPlayLink {
  width: 15%;

  position: relative;
  right: 27%;
}

#btnPlay {
  font-family: Baloo_2 extrabold;
  background-color: #29abe2;
  color: #ffffff;

  position: relative;
  right: 27%;

  filter: drop-shadow(5px 4px 2px #00000030);
}
#btnPlay:hover {
  background-color: #ffffff;
  color: #29abe2;
}

#greenSection {
  position: relative;
  top: 5vh;
}
#greenHeader {
  display: flex;
  justify-content: space-evenly;
}
#greenContent {
  background-color: #adeacd;
  position: relative;
  bottom: 15px;
  z-index: -1;
}
#greenContent .col {
  display: flex;
  flex-direction: column;
  align-items: center;
}
#greenContent .col p {
  text-align: center;
}
#title {
  color: #28a167;
  font-size: 25px;
}

#divLinkImages {
  background-color: #ffffffdc;
  width: 70%;
  border-radius: 20px;
}
</style>