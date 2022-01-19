<template>
    <div class="login" max-height="100%">
        <!-- <img src="../assets/images/curvesBackground/loginPinkCurve.png" width="100%">
        <img src="../assets/images/curvesBackground/loginPinkOutline.png" width="100%">
        <img src="../assets/images/curvesBackground/loginYellowCurve.png" width="100%"> -->
        <div>
            <img src="../assets/images/curvesBackground/loginPinkCurve.png">
        </div>
        
        <form>
            <div id="text">
                <h1>Bem-vindo, junte-se a nós!</h1>
            </div>
            
            <input type="text" id="txtUsername" placeholder="nome de utilizador" v-model="username" required />
            <br>
            <input type="password" id="txtPassword" placeholder="palavra-passe" v-model="password" required />
            <button class="btn mt-3 mr-3" id="btnIniciar"><div class="m-1">INICIAR SESSÃO</div></button>
            <button @click="" class="btn mt-3 mr-3" id="btnIniciar"><div class="m-1">CRIAR CONTA</div></button>
            <br><br><br><br>
        </form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                username: '',
                password: ''
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

    form {
        display: flex;
        flex-direction: column;
        align-items: center;

        background-image: url("../assets/images/curvesBackground/loginYellowCurve.png");
        background-size: contain;
        background-repeat: no-repeat;
    }
    #btnIniciar {
        font-family: Baloo_2 extrabold;
        background-color: #FFD167;
        color: #FFFFFF;
        border-radius: 14px;
        right: 0px;
    }
    input {
        width: 300px;
    }
    ::placeholder {
        position: absolute;
        font-size: 14px;
        left: 30px;
        top: 5px;
        opacity: 0.5;
    }
</style>