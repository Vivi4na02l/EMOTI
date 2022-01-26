<template>
    <div>
        
        <div class="group" v-if="!isHidden">
            <div id="criança" class="col-md-3">
                <button id="btnCriança" @click="showCriançaForm()">
                    <img src="../assets/images/icons/personaCrianca.png" width="70%">
                    <div class="text"><p>Criança</p></div>
                </button>
            </div>
            <div id="tutor" class="col-md-3">
                <button id="btnTutor" @click="showTutorForm()">
                    <img src="../assets/images/icons/personaTutor.png" width="70%">
                    <div class="text"><p>Tutor</p></div>
                    
                </button>
            </div>
            <div id="psicologo" class="col-md-3">
                <button id="btnPsic" @click="showPsicForm()">
                    <img src="../assets/images/icons/psicologos.png" width="70%">
                    <div class="text"><p>Psicólogo</p></div>
                </button>
            </div>
        </div>
        <div id="formSection">
            <!-- modal criar conta criança -->
            <my-modal-component v-show="showCriança">
                <div class="container">
                    <button type="button" id="btnClose" class="close mr-2 mt-3" @click="closeCriançaForm()">&times;</button>
                    <form class="row">
                        <div class="col-sm-5">
                            <div class="form-group">
                                <label for="txtUsername">Nome de utilizador</label><br>
                                <input type="text" id="txtUsername" required>
                            </div>
                            <div class="form-group">
                                <label for="sltGrau">Grau de autismo</label><br>
                                <select id="sltGrau" required>
                                    <option value=""></option>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-7">
                            <div class="form-group">
                                <label for="txtName">Nome completo</label>
                                <input type="text" id="txtName" required>    
                            </div>
                            <div class="form-group">
                                <label for="txtEmail">Email do tutor</label>
                                <input type="email" id="txtEmail" required>
                            </div>
                            <div class="form-group">
                                <div class="form-group">
                                    <div class="col-md-8">
                                        <label for="txtBirthDate">Data de nascimento</label>
                                        <input type="date" id="txtBirthDate" required>
                                    </div>
                                    <div class="col-md-4">
                                        <label for="sltGender">Género</label>
                                        <select id="sltGender" required>
                                            <option value=""></option>
                                            <option value="m">masculino</option>
                                            <option value="f">feminino</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="txtPassword">Palavra-passe</label>
                                <input type="password" id="txtPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="txtConfirmPassword">Confirmar palavra-passe</label>
                                <input type="password" id="txtConfirmPassword" required>
                            </div>
                            <div class="form-group">
                                <input type="submit" value="Registar">
                            </div>
                        </div>
                    </form>
                </div>
                
            </my-modal-component>

            <!-- modal criar conta tutor -->
            <my-modal-component v-show="showTutor">
                <div class="container">
                    <button id="btnClose" type="button" class="close mr-2 mt-3" @click="closeTutorForm()">&times;</button>
                    <form class="row">
                        <div class="col-sm-4">
                            <div class="form-group">
                                <label for="txtUsername">Nome de utilizador</label>
                                <input type="text" id="txtUsername" required>
                            </div>
                            <div class="form-group">
                                <label for="txtContact">Contacto</label>
                                <input type="tel" id="txtContact" required>
                            </div>
                        </div>
                        <div class="col-sm-8">
                            <div class="form-group">
                                <label for="txtName">Nome completo</label>
                                <input type="text" id="txtName" required>    
                            </div>
                            <div class="form-group">
                                <label for="txtEmail">Email</label>
                                <input type="email" id="txtEmail" required>
                            </div>
                            <div class="form-group">
                                <div class="col-md-8">
                                    <label for="txtBirthDate">Data de nascimento</label>
                                    <input type="date" id="txtBirthDate" required>
                                </div>
                                <div class="col-md-4">
                                    <label for="sltGender">Género</label>
                                    <select id="sltGender" required>
                                        <option value=""></option>
                                        <option value="m">masculino</option>
                                        <option value="f">feminino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="txtPassword">Palavra-passe</label>
                                <input type="password" id="txtPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="txtConfirmPassword">Confirmar palavra-passe</label>
                                <input type="password" id="txtConfirmPassword" required>
                            </div>
                        </div>
                    </form>
                </div>
            </my-modal-component>

            <!-- modal criar conta psicólogo -->
            <my-modal-component v-show="showPsic">
                <div class="container">
                    <button id="btnClose" type="button" class="close mr-2 mt-3" @click="closePsicForm()">&times;</button>
                    <form class="row">
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="txtUsername">Nome de utilizador</label>
                                <input type="text" id="txtUsername" required>
                            </div>
                            <div class="form-group">
                                <label for="sltGrau">Licenciatura</label>
                                <select id="sltGrau" required>
                                    <option value=""></option>
                                </select>
                            </div>
                        </div>
                        <div class="col-sm-6">
                            <div class="form-group">
                                <label for="txtName">Nome completo</label>
                                <input type="text" id="txtName" required>    
                            </div>
                            <div class="form-group">
                                <label for="txtEmail">Email do tutor</label>
                                <input type="email" id="txtEmail" required>
                            </div>
                            <div class="form-group">
                                <div class="col-md-8">
                                    <label for="txtBirthDate">Data de nascimento</label>
                                    <input type="date" id="txtBirthDate" required>
                                </div>
                                <div class="col-md-4">
                                    <label for="sltGender">Género</label>
                                    <select id="sltGender" required>
                                        <option value=""></option>
                                        <option value="m">masculino</option>
                                        <option value="f">feminino</option>
                                    </select>
                                </div>
                            </div>
                            <div class="form-group">
                                <label for="txtPassword">Palavra-passe</label>
                                <input type="password" id="txtPassword" required>
                            </div>
                            <div class="form-group">
                                <label for="txtConfirmPassword">Confirmar palavra-passe</label>
                                <input type="password" id="txtConfirmPassword" required>
                            </div>
                        </div>
                    </form>
                </div>
            </my-modal-component>
        </div>
        <div>
            <img width="100%" src="../assets/images/curvesBackground/Group 30.png">
        </div>
    </div>
</template>

<script>
    // import RegisterCrianca from '../components/RegisterCriança.vue'

    export default {
        // components: {
        //     RegisterCrianca,
        // },
        data() {
            return {
                form: {
                    
                },
                showCriança: false,
                showTutor: false,
                showPsic: false,
                isHidden: false
            }
        },
        created: function () {
            document.body.style.backgroundColor = "#CAF2F2"
        },
        destroyed: function () {
            document.body.style.backgroundColor = null;
        },
        methods: {
            showCriançaForm() {
                this.showCriança = true
                this.isHidden = true
            },
            showTutorForm() {
                this.showTutor = true
                this.isHidden = true
            },
            showPsicForm() {
                this.showPsic = true
                this.isHidden = true
            },
            closeCriançaForm() {
                this.showCriança = false
                this.isHidden = false
            },
            closeTutorForm() {
                this.showTutor = false
                this.isHidden = false
            },
            closePsicForm() {
                this.showPsic = false
                this.isHidden = false
            },
        },
    }
</script>

<style>
    
    #btnCriança,#btnTutor,#btnPsic {
        width: 200px;
        height: 200px;
        border-radius: 30px;
        border-style: none;
        opacity: 0.7;
        transition: all 0.4s ease-out;
        background-color: white;
    }
    #btnCriança:hover,#btnTutor:hover,#btnPsic:hover {
        opacity: 1;
        transform: scale(1.1);
    }
    #btnCriança > img {
        margin-top: 20px;
    }
    
    .group {
        display: flex;
        /* justify-content: space-between; */
        padding-top: 150px;
        border-right: none;
        justify-content: center;
    }
    .text {
        display: flex;
        font-weight: bold;
        justify-content: center;
    }
    form {
        align-items: center;
    }
    my-modal-component {
        display: flex;
        justify-content: center;
        margin-top: 130px;
        /* position: relative; */
        background-color: rgba(255, 255, 255, 0.6);
        border: solid #62AFAF 4px;
        border-radius: 40px;
        width: 70%;
    }
    /* #btnClose {
        position: absolute;
        background: red;
        color: white;
        top: -10px;
        right: -10px;
    } */
    #formSection {
        display: flex;
        justify-content: center;
    }
    input, select {
        width: 80px;
        height: 35px;
        border: solid #62AFAF 1.5px;
        border-radius: 10px;
    }
    label {
        color: #606060;
    }
    input[type="submit"] {
        border: solid #62AFAF 3px;
        font-family: Baloo_2 extrabold;
        color: #606060;
        background-color: transparent;
    }
</style>