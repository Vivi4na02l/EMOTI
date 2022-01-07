<template>
  <div class="mainpage">

	<div id="yellowContent">
		<div>
			<p class="mr-5">O autismo é parte deste mundo</p>
			<p class="ml-5">e não de um mundo à parte!</p>
		</div>

		<img src="../assets/images/mundo.png" width="20%">
	</div>

	
  </div>
</template>

<script>
export default {
	data() {
		return {
			// divContentStart: document.querySelector('#yellowCurve').style.height
			// divContentStart: 200
		}
	},
}
</script>

<style>
  #yellowContent {
	background-image: url('../assets/images/curvesBackground/mainpageYellow.png');
	background-size: cover;
	display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
</style>