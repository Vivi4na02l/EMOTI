<template>
    <div>
        <div id="pipi">
            <div id="criança">
                <button id="btnCriança"></button>
            </div>
            <div id="tutor">
                <button id="btnTutor"></button>
            </div>
            <div id="psicologo">
                <button id="btnPsic"></button>
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
    }
    
    #pipi {
        display: flex;
        justify-content: space-between;
        padding-top: 200px;
    }
</style>