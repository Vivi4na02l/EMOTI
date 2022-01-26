<template>
    <div>
        
        <h1 class="mt-5"><br> Psicólogos</h1>
        <div class="mb-5" id="yellowSection">
            
			<table><tr><td></td><td rowspan=2>
                    
					<img src="../assets/images/curvesBackground/BG_Psicologos.svg" width="100%">

			</td></tr><tr>
			<td colspan=2>

					<div id="container">
						<p>oi</p>
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
        
        position: relative;
        width: 900px;
        height: 200px;
        left: 210px;
        top: -150px;
        filter: drop-shadow(5px 4px 2px #00000030);
        
        

        background: #fdf8db;
        border-radius: 50px;
    }
</style>