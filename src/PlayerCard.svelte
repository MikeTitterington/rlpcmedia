<script>
    export let name;
    export let topPos;
    export let team;
    export let boost;
    export let color;
    import { textfit } from 'svelte-textfit';
	import { fly } from 'svelte/transition';
    
</script>
{#if team == "right"}
    {#if topPos == "0"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824468367044608/Orange_Name_1.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:200, duration: 2000 }}">
        <div class='playerCard' style="top:8px; {team}:0px;" transition:fly="{{ x:200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }
            }>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar flip'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {:else if topPos == "76"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824468849377300/Orange_Name_2.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:200, duration: 2000 }}">
        <div class='playerCard' style="top:58px; {team}:0px;" transition:fly="{{ x:200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }
            }>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar flip'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {:else if topPos == "152"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824469080055888/Orange_Name_3.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:200, duration: 2000 }}">
        <div class='playerCard' style="top:108px; {team}:0px;" transition:fly="{{ x:200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }
            }>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar flip'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {/if}
{:else}
    {#if topPos == "0"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824469675638834/Blue_Name_1.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:-200, duration: 2000 }}">
        <div class='playerCard' style="top:8px; {team}:0px; " transition:fly="{{ x:-200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }}>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {:else if topPos == "76"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824467591069716/Blue_Name_2.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:-200, duration: 2000 }}">
        <div class='playerCard' style="top:58px; {team}:0px; " transition:fly="{{ x:-200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }}>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {:else if topPos == "152"}
        <img src='https://media.discordapp.net/attachments/827545087604162663/930824467846946926/Blue_Name_3.png?width=1920&height=1080' alt='b name 2' transition:fly="{{ x:-200, duration: 2000 }}">
        <div class='playerCard' style="top:108px; {team}:0px; " transition:fly="{{ x:-200, duration: 2000 }}">
            <div class='pName' use:textfit={
                {
                mode:"single", max:24,
                forceSingleModeWidth:false
                }}>
                {name.toUpperCase().replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi, '')}
            </div>
            <div class='pBoost'>
                <div class='boostBar'>
                    <div class='boostFill' style='width:{boost}%; background-color: {color}; border-radius: 25px;'></div>
                </div>
            </div>
        </div>
    {/if}
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
        font-family: Neuzeit Gro Bol
    }

    .playerCard{
        position: absolute;
        height: 31px;
        width: 280px;
    }

    img {
        position: absolute;
        top: 0;
        left: 0;
    }

    .boostBar {
        position: absolute;
        top: 24.35px;
        left: 0px;
        width: 262px;
        height: 7px;
        left:10px;
    }

    .boostFill {
        height: 100%;
        transition: width .1s;
    }

    .pName {
        position: absolute;
        color: white;
        left: 19px;
        text-align: center;
        font-family: Neuzeit Gro Bol;
        width: 230px;
        height: 37px;
        top: -1px;
    }

    .flip {
        -moz-transform: scale(-1, 1);
        -webkit-transform: scale(-1, 1);
        -o-transform: scale(-1, 1);
        -ms-transform: scale(-1, 1);
        transform: scale(-1, 1);
        left:7px;
    }
        
        
</style>
