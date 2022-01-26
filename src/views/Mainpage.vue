<template>
  <div class="mainpage">
	
	<div id="yellowSection">
		<!-- <div>
			<img src="../assets/images/curvesBackground/mainpageYellow.png" width="100%">
		</div>

		<div id="yellowContent">
			<div>
				<p class="mr-5">O autismo é parte deste mundo</p>
				<p class="ml-5">e não de um mundo à parte!</p>
			</div>

			<img src="../assets/images/mundo.png" width="20%">
		</div> -->
		<div id="yellowSection">
			<table><tr><td></td><td rowspan=2>

					<img src="../assets/images/curvesBackground/mainpageYellow.png" width="100%">

			</td></tr><tr>
			<td colspan=2>

					<div id="yellowContent">
						<div>
							<h3 class="mr-4" style="color: black"> O <strong>autismo</strong>  é parte deste mundo</h3>
							<h3 class="ml-5" style="color: black">e não de um mundo à parte!</h3>
						</div>

						<img src="../assets/images/mundo.png" width="20%">
					</div>

			</td></tr></table>
		</div>

		<div id="pinkSection">
			<table style="width: 100%;"><tr><td></td><td rowspan=2>
					<div id="pinkImage" class="text-left">
						<img src="../assets/images/curvesBackground/mainpagePink.png" width="50%">
					</div>
			</td></tr><tr>
			<td colspan=2>
		
					<div id="pinkContent" class="row">
						<div class="col ml-5"></div>

						<div class="col ml-5" id="divWelcomingText">
							<h1>Bem-vindo ao <p style="color: #dd65b0; display: inline;">Emoti</p>!</h1>
							<p style="width: 90%">O Emoti dedica-se ao apoio das crianças diagnosticadas com PEA, promovendo o reconhecimento das emoções através de imagens, assim como ajuda os familiares a compreender melhor o autismo.</p>
						</div>
					</div>

			</td></tr></table>
		</div>

		<div id="blueSection">
			<table style="width: 100%;"><tr><td></td><td rowspan=2>

					<!-- <img src="../assets/images/curvesBackground/mainpageBlue.png" width="100%"> -->
					<div class="d-flex justify-content-center">
						<img src="../assets/images/curvesBackground/mainpageBlueDetails.png" width="90%" id="blueDetails">
					</div>
				
			</td></tr><tr>
			<td colspan=2>

					<div id="blueContent" class="row">
						<div class="col">
							IMAGEMMMMMMMMMM HERE
						</div>

						<div class="col">
							<div class="mt-5">
								<h1>"Conheces esta expressão?"</h1>
								<p style="width: 70%">Neste jogo tens de adivinhar a emoção associada a cada imagem que será mostrada. Joga todos os dias e torna-te um mestre das emoções!</p>
								<router-link to="/Jogos" id="btnPlayLink">
									<button class="btn mt-5" id="btnPlay"><div class="my-2">JOGAR</div></button>
								</router-link>
							</div>
							
						</div>

					</div>

			</td></tr></table>
		</div>

		<div id="greenSection" class="mt-5">
			<div id="greenHeader">
				<h1>Navegue pelo <p style="color: #28A167; display: inline;">site</p>!</h1>
				<div>
					<img src="../assets/images/curvesBackground/mainpageGreenCurve.png" width="100%">
				</div>
			</div>

			<div id="greenContent" class="row">
				<div class="col ml-5 mt-5">

					<p id="title">Jogos</p>
					<p>Venha conhecer os jogos direcionados para crianças autistas</p>
				</div>
				<div class="col mt-5">
					
					<p id="title">Suporte familiar</p>
					<p style="width: 90%;">O apoio familiar é crucial no desenvolvimento infantil, tire dúvidas e saiba como ter influência positiva na vida das crianças com PEA</p>
				</div>
				<div class="col mt-5">
					
					<p id="title">Psicólogos</p>
					<p>Ao contar com um profissional já é meio caminho andado. Conheça os psicólogos disponíveis</p>
				</div>
				<div class="col mr-5 mt-5">
					
					<p id="title">Sobre nós</p>
					<p>Descubra quem é a equipa EMOTI!</p>
				</div>
			</div>
		</div>

	</div>

	<Footer style="background-color: #ADEACD"></Footer>
	
  </div>
</template>

<script>
	import Footer from '../components/Footer.vue'

	export default {
		components:{
			Footer
		},
	}
</script>

<style>
	h1 {
		font-family: Baloo_2 extrabold;
	} h1, p {
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
		background-image: url('../assets/images/curvesBackground/mainpageBlue.png');
		background-size: cover;
	}

	#blueContent div div, #blueContent div p {
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
		background-color: #29ABE2;
		color: #FFFFFF;

		position: relative;
		right: 27%;

		filter: drop-shadow(5px 4px 2px #00000030);
	} #btnPlay:hover {
		background-color: #FFFFFF;
		color: #29ABE2;
	}

	#greenSection {
		position: relative;
		top: 5vh;
	} #greenHeader {
		display: flex;
		justify-content: space-evenly;
	} #greenContent {
		background-color: #ADEACD;
		position: relative;
		bottom: 15px;
		z-index: -1;
	} #greenContent .col {
		display: flex;
		flex-direction: column;
		align-items: center;
	} #greenContent .col p {
		text-align: center;
	} #title {
		color: #28A167;
		font-size: 25px;
	}
</style>