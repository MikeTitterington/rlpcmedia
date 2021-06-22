<script>
    export let name;
    export let speed;
    export let color;
    import { textfit } from 'svelte-textfit';
	import { fade } from 'svelte/transition';
</script>
<div class='playerCard' style="bottom:100px; left:50px; border: {color} 2px solid; background-color:{color};" transition:fade="{{ duration: 500 }}">
    <div class='pName' use:textfit={
        {
          mode:"single", max:40,
          forceSingleModeWidth:false
        }
      }>
        Scored By: {name}
    </div>
    <div class='pSpeed'>
        {speed} KPH
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
        opacity: .9;
    }
    .pName {
        position: absolute;
        color: white;
        top: 5px;
        text-align: center;
        font-family: NeuzeitGro Bol;
        width: 100%;
        z-index: 1;
        height: 50%;
    }

    .pSpeed {
        position: absolute;
        color: white;
        top: 50%;
        text-align: center;
        font-family: NeuzeitGro Bol;
        font-size: 40px;
        width: 100%;
        z-index: 1;
    }
        
        
</style>