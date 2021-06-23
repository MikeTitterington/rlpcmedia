<script>
    export let name;
    export let goals;
    export let assists;
    export let saves;
    export let boost;
    export let color;
    import { textfit } from 'svelte-textfit';
	import { fade } from 'svelte/transition';
</script>
<div class='playerCard' style="bottom:100px; left:50px; border: {color} 2px solid;" transition:fade="{{ duration: 500 }}">
    <div class='pName' use:textfit={
        {
          mode:"single", max:40,
          forceSingleModeWidth:false
        }
      }>
        {name}
    </div>
    <div class='pGoal' style='right:380px;'>
        <div class='t-text'>
            {goals}
        </div>
        <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/goal.svg' alt='goal'>
    </div>
    <div class='pAssist' style='right:250px;'>
        <div class='t-text'>
            {assists}
        </div>
        <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/assist.svg' alt='assist'>
    </div>
    <div class='pSave' style='right:120px;'>
        <div class='t-text'>
            {saves}
        </div>
        <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/save.svg' alt='save'>
    </div>
    <div class='pBoost'>
        <div class='t-text' style="right: 10px">
            {boost}
        </div>
        <div class='boostBar'>
            <div class='boostFill' style='width:{boost}%; background-color: {color};'></div>
        </div>
    </div>
</div>


<style>

    @font-face {
		font-family: "Neuzeit Gro Bol";
		src: url("../NeuzeitGro-Bol.ttf");
	}
	@font-face {
		font-family: "Neuzeit Gro Reg";
		src: url("../NeuzeitGro-Reg.ttf");
	}

    * {
        font-family: NeuzeitGro Bol
    }

    .playerCard{
        position: absolute;
        height: 100px;
        width: 450px;
        background-color: #252122;
        opacity: .9;
    }

    .boostBar {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
    }

    .pBoost .t-text{
        position: absolute;
        top: 0%;
        text-align: center;
        font-family: NeuzeitGro Bol;
        font-size: 50px;
        color: white;
        z-index: 1;
    }

    .boostFill {
        height: 100%;
        transition: width .1s;
    }

    .pName {
        position: absolute;
        color: white;
        top: 5px;
        text-align: center;
        font-family: NeuzeitGro Bol;
        font-size: 40px;
        width: 100%;
        height: 50%;
        z-index: 1;
    }

    .pGoal {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        bottom: 20px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 50px;
    }

    .pGoal img {
        position: absolute;
        top: 3px;
        left: 35px;
        height: 150%;
        width: 150%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
        

    .pAssist {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        bottom: 20px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 50px;
    }

    .pAssist img {
        position: absolute;
        top: 3px;
        left: 35px;
        height: 150%;
        width: 150%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
        

    .pSave {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        bottom: 20px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 50px;
    }

    .pSave img {
        position: absolute;
        top: 3px;
        left: 35px;
        height: 140%;
        width: 140%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }

    .flip {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
    }
        
        
</style>