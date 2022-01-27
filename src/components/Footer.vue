<template>
  <div class="hello">
     
    <!-- RODAPÉ -->
	<div id="footer">
		<table style="width: 100%;"><tr><td></td><td rowspan=2>

					<!-- <img src="../assets/images/curvesBackground/mainpageBlue.png" width="100%"> -->
					<div class="d-flex justify-content-center">
						<img src="../assets/images/curvesBackground/footerBG.png" width="100%" id="blueDetails">
					</div>
				
			</td></tr><tr>
			<td colspan=2>

					<div class="row">
						<div class="col mb-5" id="footerBtns">
							<router-link to="/Login">
								<button class="btn mr-3" id="btnFooterLogin"><div class="my-1 mx-2">LOGIN</div></button>
							</router-link>
							<router-link to="/Register">
								<button class="btn mr-3" id="btnFooterRegister"><div class="my-1 mx-2">REGISTER</div></button>
							</router-link>
						</div>
						<div class="col"></div>

					</div>
					<div class="row mt-5 m-5" id="footerLinks">
						<div class="col">
							<p id="linkTitle" style="display: inline;">EQUIPA </p>
							<p style="display: inline;font-family: Pacifico; font-size: 15px;"> EMOTI</p>
							<router-link to="/SobreNos">
								<p class="mt-3">﹥Sobre nós</p>
							</router-link>
						</div>
						<div class="col">
							<p id="linkTitle">TUTORES</p>
							<router-link to="/SaibaMais">
								<p>﹥FAQ</p>
							</router-link>
							<router-link to="/SuporteFamiliar">
								<p>﹥Suporte Familiar</p>
							</router-link>
						</div>
						<div class="col">
							<p id="linkTitle">CRIANÇAS</p>
							<router-link to="/Jogos">
								<p>﹥Jogos</p>
							</router-link>
						</div>
						<div class="col">
							<p id="linkTitle">PROFISSIONAIS</p>
							<router-link to="/Psicologos">
								<p>﹥Psicólogos</p>
							</router-link>
						</div>
					</div>

			</td></tr></table>
	</div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

/* Footer */

  /* #footer {
		background-color: #ADEACD;
	} */

	#footerBtns {
		display: flex;
		justify-content: center;
	}

	#btnFooterLogin {
		font-family: Baloo_2 extrabold;
		background-color: #81EFBA;
		color: #FFFFFF;
	} #btnFooterLogin:hover {
		background-color: #FFFFFF;
		color: #81EFBA;
	}

	#btnFooterRegister {
		font-family: Baloo_2 extrabold;
		background-color: #FFD167;
		color: #FFFFFF;
	} #btnFooterRegister:hover {
		background-color: #FFFFFF;
		color: #FFD167;
	}

	#footerLinks {
		position: relative;
		top: 10vh;
	} #footerLinks .col p {
		color: #FFFFFF;
	} #linkTitle {
		font-family: Baloo_2 bold;
		font-size: 20px;
	}
</style>
