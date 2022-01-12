<template>
    <div class="login" max-height="100%">
        <!-- <img src="../assets/images/curvesBackground/loginPinkCurve.png" width="100%">
        <img src="../assets/images/curvesBackground/loginPinkOutline.png" width="100%">
        <img src="../assets/images/curvesBackground/loginYellowCurve.png" width="100%"> -->
        <h1>Bem-vindo, junte-se a nós!</h1>
        <form @submit.prevent="">
            <input type="text" id="txtUsername" placeholder="nome de utilizador" v-model="username" required />
            <input type="password" id="txtPassword" placeholder="palavra-passe" v-model="password" required />
            <input type="submit" value="LOGIN" />
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
    h1 {
        font-family: Baloo_2 extrabold;
        color: #000000
    }
    body {
    text-align: center;
    }
    form {
        display: inline-block;
    }
</style>