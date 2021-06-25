<script>
    export let name;
    export let score;
    export let goals;
    export let assists;
    export let saves;
    export let shots;
    export let demos;
    export let top;
    export let left;
    import { textfit } from 'svelte-textfit';
</script>

<div class='player' style='top: { top }px; {left}'>

    <div class='playerName' use:textfit={
        {
          mode:"single", max:30,
          forceSingleModeWidth:false
        }
      }>{ name }</div>
    <div class='playerScore'>{ score }</div>
    <div class='playerGoals'>{ goals }</div>
    <div class='playerAssists'>{ assists }</div>
    <div class='playerSaves'>{ saves }</div>
    <div class='playerShots'>{ shots }</div>
    <div class='playerDemos'>{ demos }</div>

</div>
<style>
    .player {
        position: absolute;
        height: 75px;
        width: 70%;
        line-height: 75px;
        text-align: center;
        color: white;
    }

    .playerName {
        height: 100%;
        width: 20%;
        float: left;
    }

    .playerScore {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }

    .playerGoals {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }

    .playerAssists {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }

    .playerSaves {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }

    .playerShots {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }

    .playerDemos {
        height: 100%;
        width: 13.33%;
        float: left;
        font-size: 30px;
    }
</style>