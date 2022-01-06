<template>
  <div id="app" >
      <div id="menuIcons">

         <!-- Suporte Familiar -->
        <div id="menuSuporteFamiliar">
          <img src="./assets/images/icons/suporteFamiliar.png" width="25px">
          <router-link to="/">
            <p id="menuWords">&#160;&#160;&#160;&#160; Suporte Familiar &#160;&#160;&#160;&#160;&#160;&#160;</p>
          </router-link>
        </div>

        <!-- Psicólogos -->
        <div id="menuPsicologos">
          <img src="./assets/images/icons/psicologos.png" width="25px">
          <router-link to="/about">
            <p id="menuWords">&#160;&#160;&#160;&#160; Psicólogos &#160;&#160;&#160;     &#160;&#160;&#160;&#160;&#160;</p>
          </router-link>
        </div>

        <!-- Sobre nós -->
        <div id="menuSobreNos">
          <img src="./assets/images/icons/sobreNos.png" width="25px">
          <router-link to="/about">
            <p id="menuWords">&#160;&#160;&#160;&#160; Sobre nós &#160;&#160;&#160;&#160;&#160;</p>      
          </router-link>
        </div>

        <!-- Jogos -->
        <div id="menuJogos">
          <img src="./assets/images/icons/jogos.png" width="25px">
          <router-link to="/about">
            <p id="menuWords">&#160;&#160;&#160;&#160; Jogos &#160;&#160;&#160;&#160;&#160;&#160;</p>
          </router-link>
        </div>
        
      </div>

      <!-- EMOTI LOGO -->
      <div id="menuEMOTI" class="mt-3">
        <router-link to="/">
          <!-- <img src="./assets/images/logo.png"> -->
        </router-link>
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

  #menuIcons {
    /* display: inline-block; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  #menuSuporteFamiliar, #menuPsicologos, #menuSobreNos, #menuJogos {
    border-top-right-radius: 20px;
    border-bottom-right-radius: 20px;
    display: flex;
    align-items: center;
  }
  
  /* sombras */
  #menuSuporteFamiliar, #menuPsicologos, #menuSobreNos {
    filter: drop-shadow(5px 0px 2px #00000030);
  } #menuJogos, #menuEMOTI {
    filter: drop-shadow(5px 7px 2px #00000030);
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
    display: inline-block;
    position: absolute;
    top: 0px;
    left: 50%;
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