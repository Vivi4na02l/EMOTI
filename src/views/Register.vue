<template>
    <div>
        <div class="group">
            <div id="criança" class="col-md-3">
                <button id="btnCriança">
                    <img src="../assets/images/icons/personaCrianca.png" width="70%">
                    <div class="text"><p>Criança</p></div>
                </button>
            </div>
            <div id="tutor" class="col-md-3">
                <button id="btnTutor">
                    <img src="../assets/images/icons/personaTutor.png" width="70%">
                    <div class="text"><p>Tutor</p></div>
                    
                </button>
            </div>
            <div id="psicologo" class="col-md-3">
                <button id="btnPsic">
                    <img src="../assets/images/icons/psicologos.png" width="70%">
                    <div class="text"><p>Psicólogo</p></div>
                </button>
            </div>
        </div>
        <div>
            <img width="100%" src="../assets/images/curvesBackground/Group 30.png">
        </div>
    </div>
</template>

<script>
    export default {
        created: function () {
            document.body.style.backgroundColor = "#CAF2F2"
        },
        destroyed: function () {
            document.body.style.backgroundColor = null;
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
        transition: all 0.5s ease-out;
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

</style>