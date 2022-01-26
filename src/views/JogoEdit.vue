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

            <div class="col-6 mx-5">
                <div v-if="selectedEmotion == ''">
                    <img src="../assets/images/jogo/imagemDefault.png" class="mx-3 mt-5 mb-2 ol-3">
                </div>

                <div v-else id="divEmotionSelected">
                    <button id="btnBgLess">
                        <h1>﹤</h1>
                    </button>

                    <img :src="getSelectedImgs()" class="mx-3 mt-5 mb-2 ol-3">

                    <button id="btnBgLess">
                        <h1>﹥</h1>
                    </button>
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
            </div>

            <div class="col-3" mx-5>
                <button id="btnBgLess" @click="addEmotion()">
                    <h1>+</h1>
                </button>
            </div>
        </div>

        <Footer></Footer>

    </div>
</template>

<script>
    import Footer from '../components/Footer.vue'
    import { mapGetters } from 'vuex';

    export default {
        components:{
			Footer
		},

        data() {
            return {
                selectedEmotion: '',
            }
        },
        
        computed: {
            ...mapGetters({
                arrayRecognizeEmotion: 'getjogoRecognizeEmotion'
            }),
        },

        methods: {
            editEmotion() {
                alert(this.selectedEmotion)
            },

            getSelectedImgs() {
                if (this.arrayRecognizeEmotion.find(pos => pos.name == this.selectedEmotion)) {
                    return this.arrayRecognizeEmotion.find(pos => pos.name == this.selectedEmotion).images[0].image
                } else {
                    return '../assets/images/jogo/imagemDefault.png'
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

    #divEmotionsRoller {
        justify-content: center;
    } #linkReturn {
        display: flex;
        flex-direction: column;
        justify-content: center;
    } #divEmotionsRoller div {
        background-color: rgba(255, 255, 255, 0.6);
        
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    } #divEmotionsRoller div div {
        display: flex;
        flex-direction: row;
        align-items: flex-start;
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
    }

    #btnBgLess {
        background-color: transparent;
        border: transparent;
    }
</style>