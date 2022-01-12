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
                <button class="btn rounded-circle" id="btnPause">▐ ▌</button>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        
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
        display: flex;
        justify-content: center;
    } #game {
        background-color: white;
        border-width: 2px;
        border-color: black;
    }
    #btnPause {
        border-width: 2px;
        border-color: black;
    }
</style>