<template>
  <div class="login">
    <div></div>

    <table style="width: 100%">
      <tr>
        <td></td>
        <td rowspan="2">
          <div>
            <!-- ~Change to webp format -->
            <picture>
              <source
                srcset="../assets/images/curvesBackground/loginPinkCurve.webp"
                type="image/webp"
              />
              <source
                srcset="../assets/images/curvesBackground/loginPinkCurve.png"
                type="image/png"
              />
              <img
                src="../assets/images/curvesBackground/loginPinkCurve.png"
                width="90%"
                class="float-right"
              />
            </picture>
            <!-- ~Change to webp format -->
            <picture>
              <source
                srcset="../assets/images/curvesBackground/loginYellowCurve.webp"
                type="image/webp"
              />
              <source
                srcset="../assets/images/curvesBackground/loginYellowCurve.png"
                type="image/png"
              />
              <img
                src="../assets/images/curvesBackground/loginYellowCurve.png"
                width="90%"
                class="float-left"
              />
            </picture>
          </div>
        </td>
      </tr>
      <tr>
        <td colspan="2">
          <form id="formLogin" @submit.prevent="login">
            <div id="text">
              <h1>Bem-vindo, junte-se a nós!</h1>
            </div>

            <input
              type="text"
              id="txtUsername"
              placeholder="nome de utilizador"
              v-model="user.username"
              required
            />
            <br />
            <input
              type="password"
              id="txtPassword"
              placeholder="palavra-passe"
              v-model="user.password"
              required
            />
            <br>
            <div id="divRadios">
              <input type="radio" value="child" id="child" name="user" v-model="user.role" checked>
              <label for="child">Criança</label>
              <input type="radio" value="tutor" id="tutor" name="user" v-model="user.role">
              <label for="tutor">Tutor</label>
              <input type="radio" value="psychologist" id="psychologist" name="user" v-model="user.role">
              <label for="psychologist">Psicólogo</label>
            </div>

            <div id="divButtons">
              <input
                type="submit"
                value="INICIAR SESSÃO"
                class="btn mt-3 mr-3"
                id="btnIniciar"
              />
              <button
                type="button"
                class="btn mt-3 mr-3"
                id="btnRegistar"
                @click="$router.push({ name: 'Register' })"
              >
                <div class="m-1">CRIAR CONTA</div>
              </button>
            </div>

            <br /><br /><br /><br />
          </form>
        </td>
      </tr>
    </table>

    <NavBar></NavBar>
  </div>
</template>

<script>
// import { mapMutations } from "vuex";
import { mapGetters } from "vuex";
import NavBar from "../components/NavBar.vue";

export default {
  components: {
    NavBar,
  },

  data() {
    return {
      user: {
        username: "",
        password: "",
        role: ""
      },
      loading: false,
      message: "",
      errors: [],
    };
  },
  computed: {
    ...mapGetters(["getMessage", "getLoggedIn", "getLoggedUser"])
  },
  methods: {
    // ...mapMutations(["SET_LOGGED_USER"]),
    
    async login() {
      // this.$router.push({ name: "Mainpage" });
      // this.SET_LOGGED_USER(this.user.username);
      this.loading = true;
      this.errors = [];
      if (this.user.username && this.user.password && this.user.role) {
        try {
          console.log(this.user);
          await this.$store.dispatch("login", this.user);

           this.$router.push({ name: "Mainpage" });
          //console.log(this.$store.getters.getLoggedUser.role)
          // if successfull login, navigate to pages corresponding to logged user role
          // if (this.$store.getters.getLoggedUser.role == "admin")
          //   this.$router.push("/admin");
          // else
          //   this.$router.push("/user");
        } catch (error) {
          console.log(error)
          this.message =
            (error.response && error.response.data) ||
            error.message ||
            error.toString();
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
  background-color: #ffd167;
  color: #ffffff;
  border-radius: 14px;
}
#btnRegistar {
  font-family: Baloo_2 extrabold;
  background-color: #ffffff;
  color: #ffd167;
  border-width: 2px;
  border-color: #ffd167;
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

#divRadios {
  width: 400px;
  display: flex;
  flex-direction: row;
  align-items: baseline;
  margin-right: 40px
}

input[type="radio"] {
  margin-left: 30px;
}
</style>