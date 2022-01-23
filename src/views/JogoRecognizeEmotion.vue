<template>
    <div class="Jogo1">
        
        <div>
            <table><tr><td></td><td rowspan=2>

					<img src="../assets/images/curvesBackground/game1Blue.png" width="100%">

			</td></tr><tr>
			<td colspan=2>
                <div id="gameTitle">
					<h1>"Conheces esta expressão?"</h1>
                </div>
			</td></tr></table>
        </div>

        <div id="gameFrame" class="m-5">
            <div id="game" class="m-5">
                <div id="gameNav" class="m-2">
                    <a class="btn" id="btnPause">
                        <img src="../assets/images/jogo/pause.png" width="50%">
                    </a>
                    <div>
                        <p>1/10</p>
                    </div>
                </div>

                <div id="gameContent">
                    <div class="row">
                        <div class="col">
                            <p>Que emoção é esta?</p>
                        </div>
                        <div class="col">
                            <img :src="this.randomImageEmotion(this.arrayRecognizeEmotion).image" width="50%">
                        </div>
                    </div>

                    <div id="gameButtons" class="row my-2 mx-2">
                        <div class="col mx-1">
                            <button class="btn" id="btnAlegria" @click="checkButtonEmotion('alegria', emotion)"><div class="m-1">ALEGRIA</div></button>
                            <button class="btn mt-1" id="btnEspanto" @click="checkButtonEmotion('espanto', emotion)"><div class="m-1">ESPANTO</div></button>
                        </div>
                        <div class="col mx-1">
                            <button class="btn" id="btnAmor" @click="checkButtonEmotion('amor', emotion)"><div class="m-1">AMOR</div></button>
                            <button class="btn mt-1" id="btnMedo" @click="checkButtonEmotion('medo', emotion)"><div class="m-1">MEDO</div></button>
                        </div>
                        <div class="col mx-1">
                            <button class="btn" id="btnCansaco" @click="checkButtonEmotion('cansaço', emotion)"><div class="m-1">CANSAÇO</div></button>
                            <button class="btn mt-1" id="btnTristeza" @click="checkButtonEmotion('tristeza', emotion)"><div class="m-1">TRISTEZA</div></button>
                        </div>
                        <div class="col mx-1">
                            <button class="btn" id="btnEnojado" @click="checkButtonEmotion('enojado', emotion)"><div class="m-1">ENOJADO</div></button>
                            <button class="btn mt-1" id="btnRaiva" @click="checkButtonEmotion('raiva', emotion)"><div class="m-1">RAIVA</div></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import { mapGetters } from 'vuex';

    export default {
        data() {
            return {
                emotion: this.randomImageEmotion.emotion,
                image: '',


            }
        },

        computed: {
            ...mapGetters({
                arrayRecognizeEmotion: 'getjogoRecognizeEmotion'
            }),
            
            ...mapGetters(['getRandomImageEmotion', 'isEmotion'])
        },
            
        methods: {
            randomImageEmotion(arrayEmotion) {
                let emotion = Math.floor(Math.random() * (arrayEmotion.length-1))
                let image = Math.floor(Math.random() * (arrayEmotion[emotion].images.length-1))

                return {emotion: this.getRandomImageEmotion(emotion, image).emotion, image: this.getRandomImageEmotion(emotion, image).image}
            },

            checkButtonEmotion(btnEmotion, emotion) {
                if (this.isEmotion(btnEmotion, emotion)) {
                    // this.$store.commit("mutationLoggedUser", this.username)
                    // alert(`${this.username}'s account logged with success!`)
                    // this.$router.push({ name: "Home" });
                } else {
                    // oi
                }
            },
        },
    }
</script>

<style lang="scss" scoped>

    #gameTitle {
        display: flex;
        justify-content: center;
    }

    #gameFrame {
        background: linear-gradient(149.88deg, rgba(183, 231, 231, 0.3) 36.38%, rgba(183, 231, 231, 0) 99.69%);
        border-radius: 20px;
        border-style: dashed;
        border-width: 2px;
        border-color: #29ABE2;

    } #game {
        display: inline-block;
        background-color: white;
        border-style: solid;
        border-width: 1px;
        border-color: #606060;
    } #gameNav {
        display: flex;
        justify-content: space-between;
    } #gameContent {
        display: flex;
        flex-direction: column;
    }
    
    #gameButtons div {
        display: flex;
        flex-direction: column;
        padding: 0px;
    } #gameButtons button {
        font-family: Baloo_2 extrabold;
        background-color: #29ABE2;
        color: #FFFFFF;
    } #gameButtons button:hover {
        background-color: #FFFFFF;
        color: #29ABE2;
        border-style: solid;
        border-width: 1px;
        border-color: #29ABE2;
    } #gameButtons button:active {
        background-color: #FFFFFF;
        color: #29ABE2;
    }

</style>