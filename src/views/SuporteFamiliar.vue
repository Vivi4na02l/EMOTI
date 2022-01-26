<template>
    <div>

        <table><tr><td></td><td rowspan=2 >
                    
					<!-- <img src="../assets/images/SuporteFamiliar/introSuporte.svg" width="100%"> -->

			</td></tr><tr>
			<td colspan=2>

                <div class="col align-self-center" id="container">
					<img src="../assets/images/SuporteFamiliar/introSuporte.svg" width="100%">
                </div>
			</td></tr></table>

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
    

}
</style>