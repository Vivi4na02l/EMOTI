<template>
  <div id="app">
    <div id="navBar">
      <div id="menuIcons">

         <!-- Suporte Familiar -->
        <div id="menuSuporteFamiliar">
          <img src="./assets/images/icons/suporteFamiliar.png" width="25px" class="ml-2 mr-4">
          <router-link to="/">
            <p id="menuWords" class="mr-4">Suporte Familiar</p>
          </router-link>
        </div>

        <!-- Psicólogos -->
        <div id="menuPsicologos">
          <img src="./assets/images/icons/psicologos.png" width="25px" class="ml-2 mr-4">
          <router-link to="/about" class="mr-4">
            <p id="menuWords" class="mr-4">Psicólogos</p>
          </router-link>
        </div>

        <!-- Sobre nós -->
        <div id="menuSobreNos">
          <img src="./assets/images/icons/sobreNos.png" width="25px" class="ml-2 mr-4">
          <router-link to="/about">
            <p id="menuWords" class="mr-4">Sobre nós</p>      
          </router-link>
        </div>

        <!-- Jogos -->
        <div id="menuJogos">
          <img src="./assets/images/icons/jogos.png" width="25px" class="ml-2 mr-4">
          <router-link to="/Jogos">
            <p id="menuWords" class="mr-4">Jogos</p>
          </router-link>
        </div>
        
      </div>

      <router-link to="/about">
        <button class="btn mt-3 mr-3" id="btnLoginPage">Iniciar sessão</button>
      </router-link>

    </div>

    <!-- EMOTI LOGO -->
    <div style="display: flex; justify-content: center">
      <div id="menuEMOTI" class="mt-3">
        <router-link to="/">
          <img src="./assets/images/icons/logotipo.png" width="50px" class="mx-4 my-1">
        </router-link>
      </div>
    </div>

    <router-view/>
      
  </div>
</template>

<style>
  #app {
    font-family: 'Comfortaa', cursive;
    /* font-family: 'Nunito Sans', sans-serif; */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #000000;
  }

  /* NAVBAR */
  #navBar {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
  }

  /* DIV com staircase menu */
  #menuIcons {
    position: absolute;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  } #menuIcons p {
    font-size: 15px;
  }

  /* div de cada um dos elementos do staircase menu */
  #menuSuporteFamiliar, #menuPsicologos, #menuSobreNos, #menuJogos {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
  }

  #btnLoginPage {
    background-color: #FFD167;
    color: #FFFFFF;

    position: absolute;
    right: 0px;
  } #btnLoginPage:hover {
    background-color: #FFFFFF;
    color: #FFD167;
  } #btnLoginPage:active {
    background-color: #FFFFFF;
    color: #FFD167;
  }
  
  /* sombras */
  #menuSuporteFamiliar, #menuPsicologos, #menuSobreNos, #menuJogos, #menuEMOTI, #btnLoginPage {
    filter: drop-shadow(5px 4px 2px #00000030);
  }

  #menuSuporteFamiliar {
    background-color: #dd65b0;
  } #menuPsicologos {
    background-color: #f9f2c4;
  } #menuSobreNos {
    background-color: #83e3b5;
  } #menuJogos {
    background-color: #CAF2F2;
  } 

  #menuEMOTI {
    background-color: #FFFFFF;
    border-radius: 20px;

    position: absolute;
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

  a:link , a:visited {
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