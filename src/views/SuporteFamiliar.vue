<template>
    <div>

        <img src="../assets/images/SuporteFamiliar/introSuporte.svg" class="col-7">

        <div class="col mt-5 mr-5 align-self-center" id="container2">
            <img src="../assets/images/SuporteFamiliar/suporte02.svg" width="100%">
        </div>

        <div colspan=2 id="sectionFAQ">
            <h1 class="mt-5"><br> Perguntas frequentes</h1>
            
            <div id="FAQ" v-for="(question, index) in this.arrayFAQ" :key="index" class="m-2 col-8">

                <div id="opened" v-if="!question.opened">
                    <div id="divQuestion" style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px;">
                        <p class="m-2">{{question.question}}</p>
                        
                        <button class="btn m-2" id="openAnswer" @click="question.opened = !question.opened">+</button>
                    </div>
                </div>

                <div id="opened" v-else>
                    <div id="divQuestion">
                        <p class="m-2">{{question.question}}</p>
                        
                        <button class="btn m-2" id="openAnswer" @click="question.opened = !question.opened">―</button>
                    </div>
                    <div id="divAnswer">
                        <p>{{question.answer}}</p>
                    </div>
                </div>

            </div>
            
            <router-link to="/SaibaMais" class="mr-4">
                <button class="btn mt-2" id="btnSeeAll">Ver tudo</button>
            </router-link>
        </div>

        <div class="col mt-5 align-self-center" id="container3">
            <img src="../assets/images/SuporteFamiliar/infoSuporte.svg" width="90%">
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
                arrayFAQ: [],
            }
        },

        computed: {
            ...mapGetters({
                arrayRecognizeEmotion: 'getjogoRecognizeEmotion',
                getarrayFAQ: 'getarrayFAQ',
            }),
        },

        created () {
            for (let index = 0; index < 3; index++) {
                let question = this.getarrayFAQ[index]
                
                if (question.approved) {
                    this.arrayFAQ.push({
                        opened: false,
                        question: question.question,
                        answer: question.answer
                    })
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    #sectionFAQ {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    #FAQ, #opened {
        display: block;
        flex-direction: column;
        align-items: center;
    }

    #divQuestion {
        background-color: #E085BE;
        border-style: solid;
        border-width: 3px;
        border-color: #DD65B0;
        border-top-left-radius: 20px;
        border-top-right-radius: 20px;

        display: flex;
        justify-content: space-between
    } #divQuestion p {
        color: #FFFFFF;
    }

    #divAnswer {
        background-color: #FFFFFF;
        border-style: solid;
        border-width: 3px;
        border-right-color: #DD65B0;
        border-left-color: #DD65B0;
        border-bottom-color: #DD65B0;
        border-top-color: transparent;
        border-bottom-left-radius: 20px;
        border-bottom-right-radius: 20px;
    }

    #openAnswer {
        border-radius: 50px;
    } #openAnswer, #btnSeeAll {
        font-family: Baloo_2 extrabold;
        background-color: #FFFFFF;
        color: #DD65B0;
        border-color: #DD65B0;
    } #btnSeeAll:hover {
        background-color: #DD65B0;
        color: #FFFFFF;
        border-color: #DD65B0;
    }
</style>