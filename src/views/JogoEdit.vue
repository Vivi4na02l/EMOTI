<template>
    <div class="JogoEdit">

        <div>
            <table><tr><td></td><td rowspan=2>

					<img src="../assets/images/curvesBackground/game1Blue.png" width="100%">

			</td></tr><tr>
			<td colspan=2>
                <div id="gameTitle">
					<h1><span>Editar jogo: </span>"Conheces esta expressão?"</h1>
                </div>
			</td></tr></table>
        </div> 
        
        <div id="divEmotionsRoller" class="row">

            <router-link to="/Jogo" id="linkReturn">
                <button class="btn mx-2" id="btnReturn">
                    ⇦ VOLTAR <br> AO JOGO
                </button>
            </router-link>

            <div class="col-6 mx-5" id="divEditEmotion">
                <p class="mt-1">Edite uma emoção!</p>

                <div v-if="selectedEmotion == ''">
                    <img src="../assets/images/jogo/imagemDefault.png" class="mx-3 mt-5 mb-2 ol-3">
                </div>

                <div v-else>
                    <div id="divEmotionSelected">
                        <button id="btnBgLess">
                            <h1>﹤</h1>
                        </button>

                        <div id="divImages"> <!-- class="row row-cols-3" -->
                            <img v-for="(image, index) in this.getSelectedImgs()" :key="index" :src="image.image" class="mx-3 mt-5 mb-2 col-3" style="background-color: transparent"
                                 data-toggle="tooltip" data-placement="top" title="Clique para eliminar a imagem!">
                        </div>

                        <button id="btnBgLess">
                            <h1>﹥</h1>
                        </button>
                    </div>
                </div>

                <div class="mt-3 mb-5">
                    <span id="spanForm">
                        <div v-if="selectedEmotion != ''" class="mt-3 mb-5">
                            <form>
                                <label for="txtEmotion">Emoção: </label>
                                <input type="text" id="txtEmotion" :value="selectedEmotion" class="mx-2"
                                       data-toggle="tooltip" data-placement="top" title="Mude o nome da emoção!">
                                <button type="submit">Guardar</button>
                            </form>
                        </div>

                        <div>
                            <label for="sltEmotions" class="mr-2">Selecione uma emoção para editar:</label>
                            <select id="sltEmotions" v-model="selectedEmotion">
                                <option value="">--</option>
                                <option v-for="(emotion, index) in this.arrayRecognizeEmotion" :key="index" @click="editEmotion()">
                                    {{emotion.name}}
                                </option>
                            </select>
                        </div>
                    </span>
                </div>
            </div>

        
            <div class="col-3 mx-5" id="divAddEmotion">
                <span>
                    <p class="mt-1">Adicione uma emoção!</p>
                </span>

                <div>
                    <button id="btnBgLess" @click="openDialogAddEmotion = true">
                        <h1>+</h1>
                    </button>
                </div>
            </div>
            
            <dialog :open="openDialogAddEmotion" class="mt-5" id="dialogAddEmotion" style="width:50%">
                <button type="button" class="close" @click="openDialogAddEmotion = false">&times;</button><br><br>
                    <form @submit.prevent="addEmotion()">
                        <div>
                            <label for="txtNewEmotion" class="mr-2">Nome da nova emoção: </label>
                            <input type="text" id="txtNewEmotion" v-model="form.txtNewEmotion">
                        </div>

                        <div class="mt-5">

                            <label for="urlImage">Link imagem: </label>

                            <span v-for="(image, index) in newEmotionImages" :key="index">
                                <!-- Meramente para visual: -->
                                <br v-if="index >= 1">
                                <label v-if="index >= 1" style="visibility: hidden">Link imagem: </label>

                                <img :src="image.image" class="col-1">
                                <input type="url" id="urlImage" v-model="image.image" class="mr-2" required>
                                <button type="button" @click="addNewImage(image.image)" :disabled="index + 1 != newEmotionImages.length" class="btn" id="btnPlus">[ + ]</button>
                                <br><br>
                            </span>

                        </div>

                        <button class="btn" type="submit" id="btnSubmit">Criar emoção</button>
                    </form>

                    <br>
            </dialog>
        </div>

        <NavBar></NavBar>
        <Footer></Footer>

    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import NavBar from '../components/NavBar.vue'
    import { mapGetters } from 'vuex';

    export default {
        components:{
			Footer,
            NavBar
		},

        data() {
            return {
                openDialogAddEmotion: false,

                selectedEmotion: '',

                form: {
                    txtNewEmotion: ''
                },

                newEmotionImages: [
                    { addedBy: 'user', image: 'imagens/jogo/imagemDefault.png' },
                ],
            }
        },

        created () {
            this.newEmotionImages = [{ addedBy: 'user', image: 'imagens/jogo/imagemDefault.png' }]
            // https://pbs.twimg.com/profile_images/1217489036207697920/OhvYh68w_400x400.png
            // https://images.emojiterra.com/google/android-oreo/512px/1f922.png
        },
        
        computed: {
            ...mapGetters({
                arrayRecognizeEmotion: 'getjogoRecognizeEmotion'
            }),
        },

        methods: {
            addNewImage(image) {
                if (image == 'imagens/jogo/imagemDefault.png') {
                    alert('Imagem inválida! Insire um url.')
                } else {
                    this.newEmotionImages.push({ addedBy: 'user', image: 'imagens/jogo/imagemDefault.png' })
                }
            },

            addEmotion() {
                let newEmotion = {
                    name: this.form.txtNewEmotion,
                    images: this.newEmotionImages
                }

                this.$store.commit("MUTATE_ARRAY_EMOTIONS", newEmotion)
            },

            editEmotion() {
                alert(this.selectedEmotion)
            },

            getSelectedImgs() {
                if (this.arrayRecognizeEmotion.find(pos => pos.name == this.selectedEmotion)) {
                    return this.arrayRecognizeEmotion.find(pos => pos.name == this.selectedEmotion).images
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .JogoEdit {
        background-color: #CAF2F2;
        display: flex;
        flex-direction: column;
    }

    h1 span {
        color: #5EA0B7
    }

    #dialogAddEmotion {
        background-color: #ffffffe8;
        border-style: solid;
        border-width: 3px;
        border-color: #29ABE2;
    }

    #divEmotionsRoller {
        justify-content: center;
    } #divEditEmotion, #divAddEmotion {
        background-color: rgba(255, 255, 255, 0.6);
    } #linkReturn {
        display: flex;
        flex-direction: column;
        justify-content: center;
    } #divEmotionsRoller div {
        border-radius: 20px;
    } #divEditEmotion {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } #divEmotionsRoller div div {
        display: flex;
        flex-direction: row;
        align-items: center;
    }

    #divAddEmotion span {
        display: flex;
        flex-direction: column;
    } #divAddEmotion div {
        height: 90%;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    #btnReturn {
        font-family: Baloo_2 extrabold;
        background-color: #FFFFFF;
        color: #29ABE2;
        border-color: #29ABE2;
    } #btnReturn:hover {
        background-color: #29ABE2;
        color: #FFFFFF;
    }

    #divEmotionSelected {
        display: flex;
        flex-direction: row;
        align-items: center;
        background-color: transparent;
    }

    #btnBgLess {
        background-color: transparent;
        border: transparent;
    }

    #spanForm {
        display: flex;
        flex-direction: column;
    }

    #btnPlus, #btnSubmit {
        font-family: Baloo_2 extrabold;
        background-color: #FFFFFF;
        color: #29ABE2;
        border-color: #29ABE2;
    } #btnPlus:hover, #btnSubmit:hover {
        background-color: #29ABE2;
        color: #FFFFFF;
    }
</style>