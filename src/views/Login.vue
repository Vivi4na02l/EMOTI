<template>
    <div class="login">
        <!-- <img src="../assets/images/curvesBackground/loginPinkCurve.png" width="100%">
        <img src="../assets/images/curvesBackground/loginPinkOutline.png" width="100%"> -->
        
        <div>
            
        </div>

        <table style="width: 100%;"><tr><td></td><td rowspan=2>
                <div>
                    <img src="../assets/images/curvesBackground/loginPinkCurve.png" width="90%" class="float-right">
                    <img src="../assets/images/curvesBackground/loginYellowCurve.png" width="90%" class="float-left">
                </div>
        </td></tr><tr>
        <td colspan=2>
    
                <form  id="formLogin" @submit.prevent="login">
                    <div id="text">
                        <h1>Bem-vindo, junte-se a nós!</h1>
                    </div>
                    
                    <input type="text" id="txtUsername" placeholder="nome de utilizador" v-model="username" required />
                    <br>
                    <input type="password" id="txtPassword" placeholder="palavra-passe" v-model="password" required />

                    <div id="divButtons">
                        <input type="submit" value="INICIAR SESSÃO" class="btn mt-3 mr-3" id="btnIniciar">
                        <button type="button" class="btn mt-3 mr-3" id="btnRegistar" @click="$router.push({name: 'Register'})">
                            <div class="m-1">CRIAR CONTA</div>
                        </button>
                    </div>
                    
                    <br><br><br><br>
                </form>

        </td></tr></table>

        <NavBar></NavBar>
    </div>
</template>

<script>
import { mapMutations } from 'vuex';
import NavBar from '../components/NavBar.vue'

    export default {
        components:{
            NavBar
		},

        data() {
            return {
                username: '',
                password: ''
            }
        },
        methods: {
            ...mapMutations(['SET_LOGGED_USER']),

            login() {
                this.$router.push({name: 'Mainpage'})
                this.SET_LOGGED_USER(this.username)
            }
        },
    }
</script>

<style>
    template {
        overflow-y: hidden;
    }

    h1 {
        font-family: Baloo_2 extrabold;
        color: #000000;
    }
    body {
        text-align: center;
    }

    #formLogin {
        display: flex;
        flex-direction: column;
        align-items: center;

        /* background-image: url("../assets/images/curvesBackground/loginYellowCurve.png");
        background-size: contain;
        background-repeat: no-repeat; */
    }
    #btnIniciar {
        font-family: Baloo_2 extrabold;
        background-color: #FFD167;
        color: #FFFFFF;
        border-radius: 14px;
    } #btnRegistar {
        font-family: Baloo_2 extrabold;
        background-color: #FFFFFF;
        color: #FFD167;
        border-width: 2px;
        border-color: #FFD167;
        border-radius: 14px;
    }
    input {
        width: 300px;
    }
    input[type="submit"] {
        width: 150px;
    }
    ::placeholder {
        position: absolute;
        font-size: 14px;
        left: 30px;
        top: 5px;
        opacity: 0.5;
    }

    #divButtons {
        display: flex;
        flex-direction: row;
    }
</style>