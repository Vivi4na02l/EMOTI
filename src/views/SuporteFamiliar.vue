<template>
    <div>

        <table><tr><td></td><td rowspan=2 >
                    
					<!-- <img src="../assets/images/SuporteFamiliar/introSuporte.svg" width="100%"> -->

			</td></tr><tr>
			<td colspan=2>

                <div class="col mt-5 align-self-center" id="container">
					<img src="../assets/images/SuporteFamiliar/introSuporte.svg" width="60%">
                </div>
			</td>
            
            </tr>
            <tr>
                <td rowspan="2">
                    <div class="col mt-5 mr-5 align-self-center" id="container2">
                        <img src="../assets/images/SuporteFamiliar/suporte02.svg" width="100%">
                    </div>
                </td>
            </tr>
            </table>

            <table><tr><td></td><td rowspan=2 >
                    
					<!-- <img src="../assets/images/SuporteFamiliar/introSuporte.svg" width="100%"> -->

			</td></tr><tr>
			<td colspan=2>
                <h1 class="mt-5"><br> Perguntas frequentes</h1>
               
			</td>
            
            </tr>
            <tr>
                <td rowspan="2">
                     <div class="col mt-5 align-self-center" id="container3">
					<img src="../assets/images/SuporteFamiliar/infoSuporte.svg" width="90%">
                </div>
                </td>
            </tr>
            </table>
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
    left: 30px;
    
}

#container2{
    position:relative;
    width: 1400px;
}
</style>