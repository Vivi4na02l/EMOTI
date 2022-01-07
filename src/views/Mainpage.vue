<template>
  <div class="mainpage">

	<!-- style="background: linear-gradient(90.12deg, rgba(255, 216, 126, 0) 1.56%, rgba(255, 216, 126, 0.2) 1.57%, #FFD87E 53.46%, rgba(255, 216, 126, 0.2) 99.9%); mix-blend-mode: normal;" -->
	<div id="yellowCurve">
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFD87E" fill-opacity="1" d="M0,128L48,128C96,128,192,128,288,160C384,192,480,256,576,240C672,224,768,128,864,80C960,32,1056,32,1152,74.7C1248,117,1344,203,1392,245.3L1440,288L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
		</path></svg>
		<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#FFD87E" fill-opacity="1" d="M0,160L48,144C96,128,192,96,288,74.7C384,53,480,43,576,74.7C672,107,768,181,864,181.3C960,181,1056,107,1152,90.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z">
		</path></svg>
	</div>

		<svg xmlns="http://www.w3.org/2000/svg" width="750" height="795" viewBox="0 0 950 995" fill="none">
		<path d="M-16.8196 0C-16.8196 0 86.3037 156.351 186.801 130.218C291.389 103.021 417.012 104.843 494.176 225.539C559.023 349.983 684.395 255.14 725.032 323.712C765.67 392.284 747.513 463.972 831.814 463.972C916.115 463.972 948.539 539.223 948.539 539.223C948.539 539.223 964.102 635.847 893.635 635.847C823.168 635.847 820.142 557.441 716.386 697.498C681.713 744.301 568.534 688.389 479.91 816.181C435.59 880.088 248.189 793.514 209.281 849.577C170.373 905.639 -23.7367 1066.87 -16.8196 958.223C-9.9026 849.577 -16.8196 0 -16.8196 0Z" fill="url(#paint0_linear_672_2)"/>
		<path d="M-22.8325 104C-22.8325 104 78.4408 187.088 170.201 163.245C265.697 138.431 385.958 171.167 456.414 281.289C515.624 394.83 665.453 276.634 702.558 339.198C739.663 401.762 751.533 478.178 828.506 478.178C905.478 478.178 948.827 540.096 948.827 540.096C948.827 540.096 960.946 616.268 907.277 616.268C853.609 616.268 754.878 566.881 660.142 694.667C628.484 737.37 543.268 673.842 462.348 790.439C421.881 848.747 216.114 752.651 180.588 803.802C145.063 854.953 -29.1482 979.993 -22.8325 880.865C-16.5168 781.738 -22.8325 104 -22.8325 104Z" fill="url(#paint1_radial_672_2)"/>
		<defs>
		<linearGradient id="paint0_linear_672_2" x1="466.5" y1="0" x2="466.5" y2="995" gradientUnits="userSpaceOnUse">
		<stop stop-color="#F1BDDE"/>
		<stop offset="1" stop-color="#C43E91" stop-opacity="0"/>
		</linearGradient>
		<radialGradient id="paint1_radial_672_2" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(923.291 536.978) rotate(-178.488) scale(996.244 569.873)">
		<stop stop-color="#DD65B0"/>
		<stop offset="0.0001" stop-color="#DD65B0"/>
		<stop offset="1" stop-color="#A43C7D" stop-opacity="0"/>
		</radialGradient>
		</defs>
		</svg>

	<div id="content" v-bind:style="{width: '100%', position: 'absolute', top: divContentStart + 'px'}">

		<div id="yellowContent">
			<div>
				<p class="mr-5">O autismo é parte deste mundo</p>
				<p class="ml-5">e não de um mundo à parte!</p>
			</div>

			<img src="../assets/images/mundo.png" width="20%">
		</div>

		<div id="pinkContent">
			
		</div>

	</div>
  </div>
</template>

<script>
export default {
	data() {
		return {
			// divContentStart: document.querySelector('#yellowCurve').style.height
			divContentStart: 200
		}
	},

	// methods: {
	// 	divContentStart() {
	// 		window.onload(document.querySelector('#yellowCurve').style.height)
	// 		console.log('oi')
	// 	}
	// },

	// computed: {
	// 	divContentStart() {
	// 		return this.data 
	// 	}
	// },
}
</script>

<style>
  /* #yellowCurve {
	background-image: url("data:image/svg+xml,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%201440%20320%22%3E%3Cpath%20fill%3D%22rgb(255%2C255%2C255)%22%20fill-opacity%3D%221%22%20d%3D%22M0%2C160L48%2C144C96%2C128%2C192%2C96%2C288%2C74.7C384%2C53%2C480%2C43%2C576%2C74.7C672%2C107%2C768%2C181%2C864%2C181.3C960%2C181%2C1056%2C107%2C1152%2C90.7C1248%2C75%2C1344%2C117%2C1392%2C138.7L1440%2C160L1440%2C0L1392%2C0C1344%2C0%2C1248%2C0%2C1152%2C0C1056%2C0%2C960%2C0%2C864%2C0C768%2C0%2C672%2C0%2C576%2C0C480%2C0%2C384%2C0%2C288%2C0C192%2C0%2C96%2C0%2C48%2C0L0%2C0Z%22%3E%3C%2Fpath%3E%3C%2Fsvg%3E");
	background-size: 10%;
  } */

  /* #content {
	position: absolute;
	top: 0px;
	width: 100%;
  } */

  #yellowContent {
	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>