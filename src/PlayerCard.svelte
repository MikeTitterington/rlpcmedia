<script>
    export let name;
    export let goals;
    export let assists;
    export let saves;
    export let topPos;
    export let team;
    export let boost;
    export let color;
</script>
{#if team == "right"}
    <div class='playerCard' style="top:{topPos}; {team}:10px; border: {color} 2px solid;">
        <div class='pName'>
            {name}
        </div>
        <div class='pGoal' style='{team}:180px;'>
            <div class='t-text'>
                {goals}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/goal.svg' alt='goal'>
        </div>
        <div class='pAssist' style='{team}:110px;'>
            <div class='t-text'>
                {assists}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/assist.svg' alt='assist'>
        </div>
        <div class='pSave' style='{team}:40px;'>
            <div class='t-text'>
                {saves}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/save.svg' alt='save'>
        </div>
        <div class='pBoost'>
            <div class='t-text' style="left: 10px">
                {boost}
            </div>
            <div class='boostBar flip'>
                <div class='boostFill' style='width:{boost}%; background-color: {color};'></div>
            </div>
        </div>
    </div>
{:else}
    <div class='playerCard' style="top:{topPos}; {team}:10px; border: {color} 2px solid;">
        <div class='pName'>
            {name}
        </div>
        <div class='pGoal' style='{team}:40px;'>
            <div class='t-text'>
                {goals}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/goal.svg' alt='goal'>
        </div>
        <div class='pAssist' style='{team}:110px;'>
            <div class='t-text'>
                {assists}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/assist.svg' alt='assist'>
        </div>
        <div class='pSave' style='{team}:180px;'>
            <div class='t-text'>
                {saves}
            </div>
            <img src='https://rlpcmedia.s3.amazonaws.com/team_logos/save.svg'  alt='save'>
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
{/if}


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
        height: 74px;
        width: 300px;
        background-color: #252122;
    }

    .boostBar {
        position: absolute;
        top: 50%;
        left: 0;
        width: 100%;
        height: 10%;
    }

    .pBoost .t-text{
        position: absolute;
        bottom: 0%;
        text-align: center;
        font-family: NeuzeitGro Bol;
        font-size: 27px;
        color: white;
    }

    .boostFill {
        height: 100%;
        transition: width .1s;
    }

    .pName {
        position: absolute;
        color: white;
        top: 5px;
        left: 19px;
        text-align: center;
        font-family: NeuzeitGro Bol;
        font-size: 27px;
        width: 230px;
    }

    .pGoal {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        top: 43px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 30px;
    }

    .pGoal img {
        position: absolute;
        top: -6px;
        left: 20px;
        height: 140%;
        width: 140%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
        

    .pAssist {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        top: 43px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 30px;
    }

    .pAssist img {
        position: absolute;
        top: -6px;
        left: 20px;
        height: 140%;
        width: 140%;
        object-fit: contain;
        filter: brightness(0) invert(1);
    }
        

    .pSave {
        color: white;
        z-index: 1;
        position: absolute;
        height: 33px;
        top: 43px;
        object-fit: contain;
        z-index: 1;
        font-family: NeuzeitGro Bol;
        font-size: 30px;
    }

    .pSave img {
        position: absolute;
        top: -4px;
        left: 20px;
        height: 120%;
        width: 120%;
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