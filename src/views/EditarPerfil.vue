<template>
    <div>
        <div>
            <img src="../assets/images/curvesBackground/Group 29.png" width="100%">
        </div>
        <div class=" row formUpdate">
                <div class="col-sm-5">
                    <form @submit.prevent="updatePassword()">
                        <button style="border: none;background-color: transparent">
                            <img src="../assets/images/icons/userImage.png" width="50%">
                        </button>
                        <p>Altere a palavra-passe:</p>
                        <div class="form-group">
                            <input type="password" id="txtPassword" placeholder="plavra-passe" v-model="form.password">
                        </div>
                        <div class="form-group">
                            <input type="password" id="txtConfirmPassword" placeholder="confirmar palavra-passe" v-model="form.confirm">
                        </div>
                        <div>
                            <button type="submit">Guardar</button>
                        </div>
                    </form>
                </div>
                <div class="col-sm-7" v-if="this.$store.state.loggedUser.type == 'criança'">
                    <h1>olá</h1>
                </div>
                <div v-else>
                    <h1>adeus</h1>
                </div>
                <div class="col-5 mt-5 progresso">
                    <div class="progress">
                    <div class="progress-bar bg-success" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                    </div> <br>
        
              </div>
        </div>
        
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script>
import { mapMutations } from 'vuex'
    import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
    export default {
        components: {
            NavBar,
            Footer
        },
        data() {
            return {
                form: {
                    password: '',
                    confirm: ''
                }
            }
        },
        methods: {
            ...mapMutations(['SET_NEW_PASSWORD']),

            updatePassword() {
                if (this.form.password == this.form.confirm) {
                    alert(this.form.password)
                    this.SET_NEW_PASSWORD(this.form.password)
                } else {
                    alert('As palavra-passe não coincidem')
                }
            }
        },
    }
</script>

<style>
    
</style>