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
        <Footer></Footer> 
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

<style lang="scss" scoped>

#container{
    position: relative;
    

}
</style>