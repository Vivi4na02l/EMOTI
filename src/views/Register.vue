<template>
  <div>
    <!-- butões de abrir os forms de cada persona -->
    <div class="group" v-if="!isHidden">
      <div
        id="criança"
        class="col-md-3"
        data-toggle="tooltip"
        data-placement="top"
        title="Crie uma conta para o seu educando!"
      >
        <button id="btnCriança" @click="showCriançaForm()">
          <!-- ~Change to webp format -->
          <picture>
            <source
              srcset="../assets/images/icons/personaCrianca.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/icons/personaCrianca.png"
              type="image/png"
            />
            <img src="../assets/images/icons/personaCrianca.png" width="70%" />
          </picture>
          <div class="text"><p>Criança</p></div>
        </button>
      </div>
      <div
        id="tutor"
        class="col-md-3"
        data-toggle="tooltip"
        data-placement="top"
        title="Crie uma conta de tutor!"
      >
        <button id="btnTutor" @click="showTutorForm()">
          <!-- ~Change to webp format -->
          <picture>
            <source
              srcset="../assets/images/icons/personaTutor.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/icons/personaTutor.png"
              type="image/png"
            />
            <img src="../assets/images/icons/personaTutor.png" width="70%" />
          </picture>
          <div class="text"><p>Tutor</p></div>
        </button>
      </div>
      <div
        id="psicologo"
        class="col-md-3"
        data-toggle="tooltip"
        data-placement="top"
        title="Crie uma conta aqui se for psicólogo!"
      >
        <button id="btnPsic" @click="showPsicForm()">
          <!-- ~Change to webp format -->
          <picture>
            <source
              srcset="../assets/images/icons/psicologos.webp"
              type="image/webp"
            />
            <source
              srcset="../assets/images/icons/psicologos.png"
              type="image/png"
            />
            <img src="../assets/images/icons/psicologos.png" width="70%" />
          </picture>
          <div class="text"><p>Psicólogo</p></div>
        </button>
      </div>
    </div>

    <!-- secção de formulários -->
    <div id="formSection" class="mb-5">
      <!-- modal criar conta criança -->
      <my-modal-component v-show="showCriança" class="mt-5">
        <div class="container">
          <button
            type="button"
            id="btnClose"
            class="close mr-2 mt-3"
            @click="closeCriançaForm()"
          >
            &times;
          </button>
          <form
            @submit.prevent="handleRegister('child')"
            id="formCriancaTutorPsicologo"
          >
            <div class="row">
              <div class="col">
                <button style="border: none; background-color: transparent">
                  <!-- ~Change to webp format -->
                  <picture>
                    <source
                      srcset="../assets/images/icons/userImage.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="../assets/images/icons/userImage.png"
                      type="image/png"
                    />
                    <img
                      src="../assets/images/icons/userImage.png"
                      width="50%"
                    />
                  </picture>
                </button>

                <label class="mt-3" for="txtUsername">Nome de utilizador</label>
                <input
                  type="text"
                  id="txtUsername"
                  required
                  v-model="form.username"
                  style="width: 40%"
                />

                <label class="mt-3" for="sltGrau">Grau de autismo</label>
                <select
                  id="sltGrau"
                  required
                  v-model="form.autism_level"
                  style="width: 40%"
                >
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>

              <div class="col my-3">
                <label for="txtName" class="mt-3">Nome completo</label>
                <input
                  type="text"
                  id="txtName"
                  required
                  v-model="form.name"
                  style="width: 70%"
                />
                <label for="txtEmail" class="mt-3">Username do tutor</label>
                <input
                  type="text"
                  id="txtEmail"
                  required
                  v-model="form.leading_tutor"
                  style="width: 70%"
                />

                <label for="txtBirthDate" class="mt-3"
                  >Data de nascimento</label
                >
                <input
                  type="date"
                  id="txtBirthDate"
                  required
                  v-model="form.dob"
                  style="width: 70%"
                />

                <label for="sltGender" class="mt-3">Género</label>
                <select
                  id="sltGender"
                  required
                  v-model="form.gender"
                  style="width: 70%"
                >
                  <option value="male">masculino</option>
                  <option value="female">feminino</option>
                </select>

                <label for="txtPassword" class="mt-3">Palavra-passe</label>
                <input
                  type="password"
                  id="txtPassword"
                  required
                  v-model="form.password"
                  style="width: 70%"
                />
                <label for="txtConfirmPassword" class="mt-3"
                  >Confirmar palavra-passe</label
                >
                <input
                  type="password"
                  id="txtConfirmPassword"
                  required
                  style="width: 70%"
                />
                <input type="submit" value="Registar" class="mt-4" />
              </div>
            </div>
          </form>
        </div>
      </my-modal-component>

      <!-- modal criar conta tutor -->
      <my-modal-component v-show="showTutor" class="mt-5">
        <div class="container">
          <button
            id="btnClose"
            type="button"
            class="close mr-2 mt-3"
            @click="closeTutorForm()"
          >
            &times;
          </button>
          <form
            @submit.prevent="handleRegister('tutor')"
            id="formCriancaTutorPsicologo"
          >
            <div class="row">
              <div class="col">
                <button style="border: none; background-color: transparent">
                  <!-- ~Change to webp format -->
                  <picture>
                    <source
                      srcset="../assets/images/icons/userImage.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="../assets/images/icons/userImage.png"
                      type="image/png"
                    />
                    <img
                      src="../assets/images/icons/userImage.png"
                      width="50%"
                    />
                  </picture>
                </button>

                <label class="mt-3" for="txtUsername">Nome de utilizador</label>
                <input
                  type="text"
                  id="txtUsername"
                  required
                  v-model="form.username"
                  style="width: 40%"
                />

                <label class="mt-3" for="txtContact">Contacto</label>
                <input
                  type="tel"
                  id="txtContact"
                  required
                  v-model="form.phoneNumber"
                  style="width: 40%"
                />
              </div>
              <div class="col my-3">
                <label for="txtName" class="mt-3">Nome completo</label>
                <input
                  type="text"
                  id="txtName"
                  required
                  v-model="form.name"
                  style="width: 70%"
                />

                <label for="txtEmail" class="mt-3">Email</label>
                <input
                  type="email"
                  id="txtEmail"
                  required
                  v-model="form.email"
                  style="width: 70%"
                />

                <label for="txtBirthDate" class="mt-3"
                  >Data de nascimento</label
                >
                <input
                  type="date"
                  id="txtBirthDate"
                  required
                  v-model="form.dob"
                  style="width: 70%"
                />

                <label for="sltGender" class="mt-3">Género</label>
                <select
                  id="sltGender"
                  required
                  v-model="form.gender"
                  style="width: 70%"
                >
                  <option value="male">masculino</option>
                  <option value="female">feminino</option>
                </select>

                <label for="txtPassword" class="mt-3">Palavra-passe</label>
                <input
                  type="password"
                  id="txtPassword"
                  required
                  v-model="form.password"
                  style="width: 70%"
                />

                <label for="txtConfirmPassword" class="mt-3"
                  >Confirmar palavra-passe</label
                >
                <input
                  type="password"
                  id="txtConfirmPassword"
                  required
                  style="width: 70%"
                />

                <input type="submit" value="Registar" class="mt-4" />
              </div>
            </div>
          </form>
        </div>
      </my-modal-component>

      <!-- modal criar conta psicólogo -->
      <my-modal-component v-show="showPsic" class="mt-5">
        <div class="container">
          <button
            id="btnClose"
            type="button"
            class="close mr-2 mt-3"
            @click="closePsicForm()"
          >
            &times;
          </button>
          <form
            @submit.prevent="handleRegister('psychologist')"
            id="formCriancaTutorPsicologo"
          >
            <div class="row">
              <div class="col">
                <button style="border: none; background-color: transparent">
                  <!-- ~Change to webp format -->
                  <picture>
                    <source
                      srcset="../assets/images/icons/userImage.webp"
                      type="image/webp"
                    />
                    <source
                      srcset="../assets/images/icons/userImage.png"
                      type="image/png"
                    />
                    <img
                      src="../assets/images/icons/userImage.png"
                      width="50%"
                    />
                  </picture>
                </button>

                <label class="mt-3" for="txtUsername">Nome de utilizador</label>
                <input
                  type="text"
                  id="txtUsername"
                  required
                  v-model="form.username"
                  style="width: 40%"
                />

                <label class="mt-3" for="txtLicenciatura">Licenciatura</label>
                <input
                  type="text"
                  id="txtLicenciatura"
                  v-model="form.degree"
                  style="width: 40%"
                />
              </div>
              <div class="col my-3">
                <label for="txtName" class="mt-3">Nome completo</label>
                <input
                  type="text"
                  id="txtName"
                  required
                  v-model="form.name"
                  style="width: 70%"
                />

                <label for="txtEmail" class="mt-3">Email</label>
                <input
                  type="email"
                  id="txtEmail"
                  required
                  v-model="form.email"
                  style="width: 70%"
                />

                <label for="txtBirthDate" class="mt-3"
                  >Data de nascimento</label
                >
                <input
                  type="date"
                  id="txtBirthDate"
                  required
                  v-model="form.dob"
                  style="width: 70%"
                />

                <label for="sltGender" class="mt-3">Género</label>
                <select
                  id="sltGender"
                  required
                  v-model="form.gender"
                  style="width: 70%"
                >
                  <option value="male">masculino</option>
                  <option value="female">feminino</option>
                </select>

                <label for="txtPassword" class="mt-3">Palavra-passe</label
                ><br />
                <input
                  type="password"
                  id="txtPassword"
                  required
                  v-model="form.password"
                  style="width: 70%"
                />

                <label for="txtConfirmPassword" class="mt-3"
                  >Confirmar palavra-passe</label
                >
                <input
                  type="password"
                  id="txtConfirmPassword"
                  required
                  style="width: 70%"
                />

                <input type="submit" value="Registar" class="mt-4" />
              </div>
            </div>
          </form>
        </div>
      </my-modal-component>
    </div>
    <div v-if="!isHidden">
      <img width="100%" src="../assets/images/curvesBackground/Group 30.png" />
    </div>

    <NavBar></NavBar>
  </div>
</template>

<script>
import NavBar from "../components/NavBar.vue";
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {
    NavBar,
  },
  data() {
    return {
      form: {
        username: "",
        name: "",
        password: "",
        gender: "",
        dob: "",
        autism_level: 1,
        leading_tutor: "",
        degree: "",
        email: "",
        // phoneNumber: "",
        role: null,
      },
      showCriança: false,
      showTutor: false,
      showPsic: false,
      isHidden: false,
      successful: false,
      message: "",
      loading: false,
      errors: []
    };
  },
  created: function () {
    document.body.style.backgroundColor = "#CAF2F2";
  },
  destroyed: function () {
    document.body.style.backgroundColor = null;
  },
  computed: {
    ...mapGetters(["getMessage", "getLoggedIn"]),
    // ...mapGetters(["isUsernameAvailable"]),

    // ...mapGetters({
    //   arrayRecognizeEmotion: "getjogoRecognizeEmotion",
    //   loggedUser: "getLoggedUser",
    // }),
  },
  methods: {
    showCriançaForm() {
      this.showCriança = true;
      this.isHidden = true;
    },
    showTutorForm() {
      this.showTutor = true;
      this.isHidden = true;
    },
    showPsicForm() {
      this.showPsic = true;
      this.isHidden = true;
    },
    closeCriançaForm() {
      this.showCriança = false;
      this.isHidden = false;
    },
    closeTutorForm() {
      this.showTutor = false;
      this.isHidden = false;
    },
    closePsicForm() {
      this.showPsic = false;
      this.isHidden = false;
    },
    ...mapMutations(["SET_NEW_USER"]),

    // register(payload) {
    //   if (this.isUsernameAvailable(this.form.username)) {
    //     this.form.type = payload;

    //     if (payload == "crianca") {
    //       this.form.game = [];

    //       for (const emotion of this.arrayRecognizeEmotion) {
    //         this.form.game.push({
    //           emotion: emotion.name,
    //           right: 0,
    //           wrong: 0,
    //         });
    //       }
    //     }

    //     this.SET_NEW_USER(this.form);
    //     this.$router.push({ name: "Login" });
    //   } else {
    //     alert("Utilizador já existe! Tente de novo!");
    //   }
    // },

    async handleRegister(payload) {

      this.message = "";
      this.loading = true;
      this.successful = false;
      this.errors = [];
      this.form.role = payload

      if (this.form.username && this.form.password) {

        //makes request by dispatching an action
        try {
          if (payload == 'child') {
            // this.form.game = [];

            // for (const emotion of this.arrayRecognizeEmotion) {
            //   this.form.game.push({
            //     emotion: emotion.name,
            //     right: 0,
            //     wrong: 0,
            //   });
            // }
            await this.$store.dispatch("registerChild", this.form /*formData*/);
          }
          if (payload == 'tutor') {
            await this.$store.dispatch("registerTutor", this.form /*formData*/);
          }
          if (payload == 'psychologist') {
            await this.$store.dispatch("registerPsychologist", this.form /*formData*/);
          }
          

          this.message = this.$store.getters.getMessage;

          this.successful = true;
          this.$router.push({ name: "Login" });
        } catch (error) {
          this.message =
            (error.response && error.response.data) ||
            error.message || error.toString();
        } finally {
          this.loading = false;
        }
      } else {
        this.loading = false;
        if (!this.user.username) {
          this.errors.push("Username required.");
        }
        if (!this.user.password) {
          this.errors.push("Password required.");
        }
      }
    },
  },
};
</script>

<style>
#btnCriança,
#btnTutor,
#btnPsic {
  width: 200px;
  height: 200px;
  border-radius: 30px;
  border-style: none;
  opacity: 0.7;
  transition: all 0.4s ease-out;
  background-color: white;
}
#btnCriança:hover,
#btnTutor:hover,
#btnPsic:hover {
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
  /* position: relative; */
  background-color: rgba(255, 255, 255, 0.6);
  border: solid #62afaf 4px;
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
.container input,
select {
  width: 80px;
  height: 35px;
  border: solid #62afaf 1.5px;
  border-radius: 10px;
}
label {
  color: #606060;
}
.container input[type="submit"] {
  border: solid #62afaf 3px;
  font-family: Baloo_2 extrabold;
  color: #606060;
  background-color: transparent;
}
/* .container .col-sm-7 {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
    } */

#formCriancaTutorPsicologo .row .col {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>