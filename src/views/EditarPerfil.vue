<template>
    <div>
        <div>
            <img src="../assets/images/curvesBackground/Group 29.png" width="100%">
        </div>
        <div id="editProfile">
            <div class="col-4" id="formUpdate">
                <form @submit.prevent="updatePassword()" class="my-5">
                    <button style="border: none;background-color: transparent">
                        <img src="../assets/images/icons/userImage.png" width="50%">
                    </button>
                    <p>Altere a palavra-passe:</p>
                    <div class="form-group">
                        <input type="password" id="txtPassword" placeholder="nova palavra-passe" v-model="form.password">
                    </div>
                    <div class="form-group">
                        <input type="password" id="txtConfirmPassword" placeholder="confirmar nova palavra-passe" v-model="form.confirm">
                    </div>
                    <div>
                        <button class="btn" type="submit" id="btnSave">Guardar</button>
                    </div>
                </form>
            </div>
            <div class="col-7 mt-5" v-if="getloggedUser" id="diagrams"><br>
                <div class="mb-5">
                    <h1 style="color: #606060"><span style="color: #ffd167">{{this.getloggedUser.username}}</span> está a fazer progresso!</h1>

                    <div v-for="(emotion, index) in this.getloggedUser.game" :key="index" id="userDiagram">
                        <div class="mt-5">
                            <div style="display: flex; flex-direction: row;">
                                <p class="mr-2">{{emotion.emotion}}: </p>
                                <p v-if="emotion.right != 0 || emotion.wrong != 0"> {{Math.floor(( (emotion.right) / (emotion.right+emotion.wrong) )*100)}}%</p>
                                <p v-else> 0%</p>
                            </div>
                            <div class="progress">
                                <div class="progress-bar" role="progressbar" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"
                                        :style="{width:`${( (emotion.right) / (emotion.right+emotion.wrong) )*100}%`,
                                        backgroundColor: `rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`}">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <NavBar></NavBar>
        <Footer></Footer>
    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
    import { mapMutations } from 'vuex'
    import { mapGetters } from 'vuex';
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

        computed: {
            ...mapGetters({
                getloggedUser: 'getLoggedUser',
            }),
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
            },
        
            loggedUser() {
                if (this.getloggedUser != null) {
                    this.$store.state.loggedUser.type == 'criança'
                }
            },
        },
    }
</script>

<style>
    #editProfile {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #formUpdate {
        background-color: #f9f2c49d;
        border-width: 2px;
        border-style: solid;
        border-color: #ffd167;
        border-radius: 25px;
    }

    #diagrams {
        border-style: solid;
        border-width: 2px;
        border-color: #ffd167;
        border-radius: 25px;
/* 
        height: 200px;
        overflow-y: scroll; */
    }

    #btnSave {
        background-color: #ffd167;
        color: #FFFFFF;
        border-width: 2px;
        border-color: #ffd167;
    } #btnSave:hover {
        background-color: #FFFFFF;
        color: #ffd167;
        border-width: 2px;
        border-color: #ffd167;
    }
</style>