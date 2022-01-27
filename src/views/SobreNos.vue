<template>
    <div>
        <div>
            <img src="../assets/images/curvesBackground/Group 29.png" width="100%">
        </div>
        <div>
            <h1 style="color: #606060">Sobre a equipa <span style="color: #ffd167">EMOTI</span>!</h1>
			<img src="../assets/images/sobreNos.png" style="width: 70%">
        </div>
        
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
    export default {
        components: {
            NavBar,
            Footer
        },
	}
</script>

<style>

</style>