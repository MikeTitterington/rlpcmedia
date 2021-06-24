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
<div class="teamL" transition:fly="{{ x:-200, duration: 2000 }}">
    <img class="teamLogo" src={ leftLogo } alt="teamLogo1"/>
    <div class="teamName" use:textfit={
        {
          mode:"single", max:100,
          forceSingleModeWidth:false
        }
      }>{ leftName }</div>
    <div class="teamScore">{ leftScore }</div>
    <Player name="Name" goals="Goals" score="Score" assists="Assists" saves="Saves" demos="Demos" shots="Shots" top={100}/>
    {#each playersLeft as playerStats (playerStats.id) }
        <Player {...playerStats} top={75*playerStats.topPos/76 + 175}/>
    {/each}
</div>
<div class="teamR"  transition:fly="{{ x:200, duration: 2000 }}">
    <img class="teamLogo" src="{ rightLogo }" alt="teamLogo2"/>
    <div class="teamName" use:textfit={
        {
          mode:"single", max:100,
          forceSingleModeWidth:false
        }
      }>{ rightName }</div>
    <div class="teamScore">{ rightScore }</div>
    <Player name="Name" goals="Goals" score="Score" assists="Assists" saves="Saves" demos="Demos" shots="Shots" top={100}/>
    {#each playersRight as playerStats (playerStats.id) }
        <Player {...playerStats} top={75*playerStats.topPos/76 + 175}/>
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
            linear-gradient(135deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px),
            linear-gradient(225deg, #708090 21px, #d9ecff 22px, #d9ecff 24px, transparent 24px, transparent 67px, #d9ecff 67px, #d9ecff 69px, transparent 69px)0 64px;
            background-color:#708090;
            background-size: 64px 128px;
    }

    .teamL {
        height: 400px;
        width: 1200px;
        background-color: #252122;
        left: 130px;
        position: absolute;
        top: 16%;
        color: white;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        border: 2px solid #0b8cc0;
    }
    .teamR {
        height: 400px;
        width: 1200px;
        background-color: #252122;
        left: 490px;
        color: white;
        position: absolute;
        top: 56%;
        box-shadow: rgba(0, 0, 0, 0.56) 0px 22px 70px 4px;
        border: 2px solid #fc9c0c;
    }
    .teamLogo {
        position: absolute;
        left: 0%;
        top: 0%;
        width: 30%;
        height: 100%;
        object-fit: contain;
    }

    .teamName {
        position: absolute;
        top: 0;
        left: 30%;
        text-align: center;
        width: 60%;
        height: 100px;
        line-height: 100px;
    }

    .teamScore {
        position: absolute;
        top: 0;
        left: 90%;
        text-align: center;
        width: 10%;
        height: 100px;
        line-height: 100px;
        font-size: 100px;
    }
</style>
