<script>
    import Player from "./Player.svelte";
    export let playersLeft;
    export let playersRight;
    export let leftScore;
    export let rightScore;
    export let leftLogo;
    export let rightLogo;
    export let leftName;
    export let rightName;
    import { textfit } from 'svelte-textfit';
    import { fly } from 'svelte/transition';
    import { fade } from 'svelte/transition';
</script>
<div class='test' transition:fly="{{ duration: 2000 }}"></div>
<div class="teamL" transition:fly="{{ x:-1000, duration: 1000, delay: 1000}}">
    <img class="teamLogo" src={ leftLogo } alt="teamLogo1"/>
    <div class="teamName" use:textfit={
        {
          mode:"single", max:100,
          forceSingleModeWidth:false
        }
      }>{ leftName }</div>
    <div class="teamScore">{ leftScore }</div>
    <Player name="Name" goals="Goals" score="Score" assists="Assists" saves="Saves" demos="Demos" shots="Shots" top={100} left={"left:30%;"}/>
    {#each playersLeft as playerStats (playerStats.id) }
        <Player {...playerStats} top={75*playerStats.topPos/76 + 175} left={"left:30%;"}/>
    {/each}
</div>
<div class="teamR"  transition:fly="{{ x:1000, duration: 1000, delay: 1000 }}">
    <img class="teamLogo" src="{ rightLogo }" alt="teamLogo2"/>
    <div class="teamName" use:textfit={
        {
          mode:"single", max:100,
          forceSingleModeWidth:false
        }
      }>{ rightName }</div>
    <div class="teamScore">{ rightScore }</div>
    <Player name="Name" goals="Goals" score="Score" assists="Assists" saves="Saves" demos="Demos" shots="Shots" top={100} left={"left:0;"}/>
    {#each playersRight as playerStats (playerStats.id) }
        <Player {...playerStats} top={75*playerStats.topPos/76 + 175} left={"left:0;"}/>
    {/each}
</div>

<style>

    .test {
        height: 1080px;
        width: 1920px;
        position: absolute;
        z-index: -2;
        top: 0%;
        left: 0%;
        background:
            radial-gradient(black 15%, transparent 16%) 0 0,
            radial-gradient(black 15%, transparent 16%) 8px 8px,
            radial-gradient(#23266b 15%, transparent 20%) 0 1px,
            radial-gradient(#23266b 15%, transparent 20%) 8px 9px;
            background-color:#23266b;
            background-size:16px 16px;
    }

    .teamL {
        height: 400px;
        width: 1200px;
        background-color: #252122;
        left: 130px;
        position: absolute;
        top: 17%;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        border: 2px solid #0b8cc0;
    }
    .teamR {
        height: 400px;
        width: 1200px;
        background-color: #252122;
        right: 130px;
        color: white;
        position: absolute;
        top: 57%;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        border: 2px solid #fc9c0c;
    }
    .teamL .teamLogo {
        position: absolute;
        left: 0%;
        top: 0%;
        width: 30%;
        height: 100%;
        object-fit: contain;
    }

    .teamL .teamName {
        position: absolute;
        top: 0;
        left: 30%;
        text-align: center;
        width: 60%;
        height: 100px;
        line-height: 100px;
    }

    .teamL .teamScore {
        position: absolute;
        top: 0;
        left: 90%;
        text-align: center;
        width: 10%;
        height: 100px;
        line-height: 100px;
        font-size: 100px;
    }
    .teamR .teamLogo {
        position: absolute;
        right: 0%;
        top: 0%;
        width: 30%;
        height: 100%;
        object-fit: contain;
    }

    .teamR .teamName {
        position: absolute;
        top: 0;
        right: 30%;
        text-align: center;
        width: 60%;
        height: 100px;
        line-height: 100px;
    }

    .teamR .teamScore {
        position: absolute;
        top: 0;
        right: 90%;
        text-align: center;
        width: 10%;
        height: 100px;
        line-height: 100px;
        font-size: 100px;
    }
</style>
