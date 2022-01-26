<template>
    <div>
        
        <h1 class="mt-5"><br> Psicólogos</h1>
        <div class="mb-5" id="yellowSection">
            
			<table><tr><td></td><td rowspan=2>
                    
					<img src="../assets/images/curvesBackground/BG_Psicologos.svg" width="100%">

			</td></tr><tr>
			<td colspan=2>

                <div id="container" class="m-5 col-10">
                    <div class="my-5 ml-5"><!--  class="col-3 mt-3" -->
                        <img src="../assets/images/Psicologo01.png">
                    </div>
                    
                    <!--  class="col-4 mt-3"  -->
                    <div class="m-5" style="width: 60%">
                        <h4> Armando Pestana</h4>
                        <h6>Acredito que todos os percursos devem ser feitos com entrega, determinação e verdade. Assim, no trabalho que faço, a psicoterapia ou orientação vocacional são ferramentas essenciais para ajudar a tomar decisões mais acertadas e ajustadas áquilo que quer para si, para o seu bem-estar, para atingir os seus objectivos no futuro.</h6>
                        <br>
                        <h6>Na minha formação académica obtive o Mestrado em Psicologia da Saúde pela Universidade do Minho, uma Pós-Graduação em Avaliação e Intervenção Psicológica com Crianças e Adolescentes e uma Pós-Graduação em Gestão de Recursos Humanos.</h6>
                        <br>
                        <h6>Trabalho desde 2011 em escolas e em consultório privado, com crianças, jovens e suas famílias. Tenho prática na Avaliação cognitiva e despiste de Perturbações do Desenvolvimento e Perturbações da Aprendizagem.</h6>
                        <!-- <img src="../assets/images/txtPs01.png" width="70%"> -->
                    </div>
                    
                    <div class="my-5 mr-5">
                        <h4>Consultório:</h4>
                        <br>
                        <img src="../assets/images/consultorio01.png" width="100%">
                        <br>
                        <!-- <button class="btn mt-5 mr-5" id="btnVincular"><div class="m-1">Vincular</div></button> -->
                        <button type="button" id="btnVincular" class="btn mt-5 ml-2 btn-outline-primary">Vincular</button>
                    </div>
                </div>

                <div id="container" class="m-5 col-10">
                    <div class="my-5 ml-5"><!--  class="col-3 mt-3" -->
                        <img src="../assets/images/Psicologo02.png">
                    </div>
                    
                    <!--  class="col-4 mt-3"  -->
                    <div class="m-5" style="width: 60%">
                        <h4> Rita Silva</h4>
                        <h6>Iniciei a minha prática clínica como Psicóloga e Psicoterapeuta em contexto hospitalar, com maior enfoque nas avaliações das disfunções cerebrais subjacentes à patologia neurológica.</h6>
                        <br>
                        <h6>Com o passar do tempo, comecei a aprofundar o meu interesse pelas crianças e adolescentes dedicando-me à população mais jovem e foi nesse contexto que descobri o meu interesse pela população infantojuvenil, tendo trabalhado em múltiplos contextos como creches, jardins-de-infância, lares e consultórios privados. </h6>
                        <br>
                        <h6>Ao longo do tempo tenho vindo alargar a minha área-base de formação, iniciando uma formação em Psicoterapia Psicanalítica, assim como frequentado vários cursos em Psicoterapia infantil, Perturbações do Neurodesenvolvimento, dos quais destaco Perturbação de Hiperatividade e Défice de Atenção e as Perturbações do Espectro Autista (Autismo e Asperger).</h6>
                        <!-- <img src="../assets/images/txtPs01.png" width="70%"> -->
                    </div>
                    
                    <div class="my-5 mr-5">
                        <h4>Consultório:</h4>
                        <br>
                        <img src="../assets/images/consultorio02.png" width="100%">
                        <br>
                        <!-- <button class="btn mt-5 mr-5" id="btnVincular"><div class="m-1">Vincular</div></button> -->
                        <button type="button" id="btnVincular" class="btn mt-5 ml-2 btn-outline-primary">Vincular</button>
                    </div>
                </div>

			</td></tr></table>
		</div>

        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script>
	import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'

	export default {
		components:{
			Footer,
			NavBar
		},
	}
</script>

<style lang="scss" scoped>

#container{
        filter: drop-shadow(5px 4px 2px #00000030);
        
        display: inline-flex;


        background: #fdf8db;
        border-radius: 50px;
    }

 #btnVincular {
    font-family: comfortaa;
    background-color: #ffffff;
    color: #6360E1;
    border:  4px solid #6360E1;
    font-style: normal;
    font-weight: bold;

    line-height: 27px;


    box-sizing: border-box;
    border-radius: 15px;

    position: fixed;
    
  
  } #btnVincular:hover {
    background-color: #6360E1;
    color: #ffffff;
  } #btnLoginPage:active {
    background-color: #6360E1;
    color: #ffffff;
  }
</style>