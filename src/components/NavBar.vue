<template>
  <div>
    <div id="navBar">
      <div id="menuIcons">
        <!-- Suporte Familiar -->
        <div id="menuSuporteFamiliar">
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
              width="25px"
              class="ml-2 mr-4"
            />
          </picture>
          <router-link to="/SuporteFamiliar">
            <div class="mr-4 m-2" id="menuWords">Suporte familiar</div>
          </router-link>
        </div>

        <!-- Psicólogos -->
        <div id="menuPsicologos">
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
              width="25px"
              class="ml-2 mr-4"
            />
          </picture>
          <router-link to="/Psicologos" class="mr-4">
            <div class="mr-4 m-2" id="menuWords">Psicólogos</div>
          </router-link>
        </div>

        <!-- Sobre nós -->
        <div id="menuSobreNos">
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
              width="25px"
              class="ml-2 mr-4"
            />
          </picture>
          <router-link to="/SobreNos">
            <div class="mr-4 m-2" id="menuWords">Sobre nós</div>
          </router-link>
        </div>

        <!-- Jogos -->
        <div id="menuJogos">
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
              width="25px"
              class="ml-2 mr-4"
            />
          </picture>
          <router-link to="/Jogos">
            <div class="mr-4 m-2" id="menuWords">Jogos</div>
          </router-link>
        </div>
      </div>

      <router-link to="/login" v-if="!this.$store.state.loggedUser">
        <button class="btn mt-3 mr-3" id="btnLoginPage">
          <div class="m-1">INICIAR SESSÃO</div>
        </button>
      </router-link>
      <router-link to="/editarPerfil" v-else>
        <button class="btn mt-3 mr-3" id="btnLoginPage">
          <div class="m-1">EDITAR PERFIL</div>
        </button>
      </router-link>
    </div>

    <!-- EMOTI LOGO -->
    <div style="display: flex; justify-content: center">
      <div id="menuEMOTI" class="mt-3">
        <router-link to="/">
          <picture>
            <source
              srcset="../assets/images/icons/logotipo.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/icons/logotipo.png"
              type="image/png"
            />
            <img
              src="../assets/images/icons/logotipo.png"
              width="50px"
              class="mx-4 my-1"
            />
          </picture>
        </router-link>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "navBar",
  props: {
    msg: String,
  },
};
</script>

<style lang="scss" scoped>
/* NAVBAR */
#navBar {
  position: absolute;
  top: 0px;
  align-items: flex-start;
  justify-content: space-between;
}

/* DIV com staircase menu */
#menuIcons {
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
#menuIcons p {
  font-size: 15px;
}

/* div de cada um dos elementos do staircase menu */
#menuSuporteFamiliar,
#menuPsicologos,
#menuSobreNos,
#menuJogos {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
  display: flex;
  align-items: center;
}

#btnLoginPage {
  font-family: Baloo_2 extrabold;
  background-color: #ffd167;
  color: #ffffff;

  position: fixed;
  right: 0px;
}
#btnLoginPage:hover {
  background-color: #ffffff;
  color: #ffd167;
}
#btnLoginPage:active {
  background-color: #ffffff;
  color: #ffd167;
}

/* sombras */
#menuSuporteFamiliar,
#menuPsicologos,
#menuSobreNos,
#menuJogos,
#menuEMOTI,
#btnLoginPage {
  filter: drop-shadow(5px 4px 2px #00000030);
}

#menuSuporteFamiliar {
  background-color: #dd65b0;
}
#menuPsicologos {
  background-color: #f9f2c4;
}
#menuSobreNos {
  background-color: #83e3b5;
}
#menuJogos {
  background-color: #caf2f2;
}

#menuEMOTI {
  background-color: #ffffff;
  border-radius: 20px;

  position: fixed;
  top: 0px;
  display: flex;
}

router-link {
  display: flex;
}

#menuWords {
  color: black;
}

.row links {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

a:link,
a:visited {
  text-decoration: none;
}

#nav a {
  font-weight: bold;
  color: #000000;
}

#nav a.router-link-exact-active {
  color: black;
}
</style>