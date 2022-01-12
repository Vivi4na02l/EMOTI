<template>
    <div>
        <!-- Background -->
        

        <div class="header-container">
            <div class="wrapper">
                <header>
                    <div class="introJogos">
                        <h2>"Conheces esta expressão?"</h2>
                        <p>Neste jogo tens de adivinhar a emoção <br> associada a cada imagem que será mostrada.</p>
                        <router-link to="/about">
                            <button class="btn mt-3 mr-3" id="btnJogar">Jogar</button>
                        </router-link>
                    </div>
                </header>
                
            </div>
        </div>

        <div class="explanation-container">
            <div class="wrapper">
                <div id="gm">
                    <h2>O poder da gamificação em pessoas com autismo</h2>
                    <div id="container">
                        <p>Os jogos caracterizam-se por uma importante e viável alternativa de auxílio. Através deles, o aprendizado torna-se mais fácil e tranquilo de absorver. Assim, a gamificação pode aumentar o engajamento e a aprendizagem de crianças autistas.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }

    
</script>

<style lang="scss" scoped>

    // Background jogos
    .header-container {
        background-image: url('../assets/images/curvesBackground/BG_Jogos.svg');
        background-size: contain;
        background-repeat: no-repeat;
        width: 100%;
        height: 640px;
    
    }

    // Texto Intro
    .wrapper{
        width: 1200px;
        margin: 0 auto;
    }
    header{
        display: flex;
        
        justify-content: space-between;
        
    }

    header h2{
        position: absolute;
        left: 30px;
        top: 230px;
        font-family: Baloo_2 extrabold;
        color: #606060;

    }

    header p{
        position: absolute;
        left: 50px;
        top: 300px;
        color: black;
    }

    // Botão jogar
    #btnJogar {
    background-color: #29ABE2;
    color: #FFFFFF;
    height: 55px;
    width: 140px;
    left: 170px;
    top: 375px;
    border-radius: 14px;
    filter: drop-shadow(5px 4px 2px #00000030);

    font-family:Baloo_2 extrabold ;

    position: absolute;
    right: 0px;
  } #btnJogar:hover {
    background-color: #FFFFFF;
    color: #29ABE2;
  } #btnJogar:active {
    background-color: #FFFFFF;
    color: #29ABE2;
  }


    #gm h2{
         position: absolute;
         left: 220px;
         top: 690px;
         
         font-family: Baloo 2;
        font-style: normal;
        font-weight: 800;
        font-size: 40px;
        line-height: 76px;
        /* identical to box height */


        color: #606060;
    }

    #container{
        position: absolute;
        width: 800px;
        height: 200px;
        left: 280px;
        top: 800px;

        background: #B7E7E7;
        border-radius: 50px;
    }

    #container p{
        position: absolute;
        left: 50px;
        top: 70px;
        
    }

</style>