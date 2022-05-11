<script>
    export let name;
    export let boost;
    export let color;
    import { textfit } from 'svelte-textfit';
	import { fade, fly } from 'svelte/transition';
</script>
<img src='https://media.discordapp.net/attachments/827545087604162663/930824468081836102/NamePlate.png?width=1920&height=1080' alt='name' transition:fade="{{ duration: 500 }}">
<div class='ext' style="background-color: {color};"></div>
<div class='playerCard' style="bottom:-28px; left:301px;" transition:fade="{{ duration: 500 }}">
    <div class='pName' use:textfit={
        {
          mode:"single", max:40,
          forceSingleModeWidth:false
        }
      }>
        {name}
    </div>
    <div class='pRLPC'>RLPC S17</div>
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
        font-family: Neuzeit Gro Bol
    }

    .ext {
        height: 10px;
        width: 750px;
        position: absolute;
        bottom: -2px;
    }

    .playerCard{
        position: absolute;
        height: 100px;
        width: 450px;
    }

    img {
        position: absolute;
        top: 0%;
        left: 0;
    }

    .boostBar {
        position: absolute;
        left: 0;
        width: 100%;
        height: 100%;
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
        font-family: Neuzeit Gro Bol;
        font-size: 40px;
        width: 100%;
        height: 60px;
        z-index: 1;
        line-height: 60px;
    }

    .pRLPC {
        position: absolute;
        color: white;
        top: 5px;
        text-align: center;
        font-family: Neuzeit Gro Bol;
        font-size: 40px;
        width: 100%;
        height: 60px;
        z-index: 1;
        left: -380px;
        line-height: 60px;
    }
        
        
</style>
