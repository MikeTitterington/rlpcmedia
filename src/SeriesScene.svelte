<script>
    export let name;
    export let color;
    export let position;
    export let team;
    export let score;
    export let logo;
    import { textfit } from 'svelte-textfit';
	import { fly } from 'svelte/transition';
</script>
{#if team == "left"}
    <div class='seriesScene' style="top:{position}; {team}: -2px; border: {color} 2px solid;" transition:fly="{{x: -1000, duration: 2000, delay: 1000 }}">
        <div class='teamScore' style='right: 0px'>
            {score}
        </div>
        <div class='teamName' style="left: 20%;" use:textfit={
            {
              mode:"single", max:140,
              forceSingleModeWidth:false
            }}>
            {name}
        </div>
        <div class='teamLogo'>
            <img src='{logo}' />
        </div>
    </div>
{/if}
{#if team == "right"}
    <div class='seriesScene' style="top:{position}; {team}: -2px; border: {color} 2px solid;" transition:fly="{{x: 1000, duration: 2000, delay: 1000 }}">
        <div class='teamScore' style='left: 0px'>
                {score}
        </div>
        <div class='teamName' style="right: 20%;" use:textfit={
            {
            mode:"single", max:140,
            forceSingleModeWidth:false
            }}>
            {name}
        </div>
        <div class='teamLogo' style="right: -80%;">
            <img src='{logo}' />
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
        font-family: NeuzeitGro Bol;
        color: white;
    }

    .seriesScene {
        position: absolute;
        height: 20%;
        width: 70%;
        background-color: #252122;
        overflow: hidden;
    }

    .teamScore {
        font-size: 140px;
        position: absolute;
        line-height: 216px;
        width: 10%;
        text-align: center;
    }

    .teamLogo {
        position: absolute;
        height: 100%;
        width: 100%;
    }

    .teamLogo img{
        position: absolute;
        top: -100%;
        height: 300%;
        width: 20%;
        object-fit: contain;
    }

    .teamName {
        position: absolute;
        line-height: 216px;
        text-align: center;
        width: 60%;
        height: 100%;
    }

</style>