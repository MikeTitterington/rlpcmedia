<script>
    export let clockTime;
	export let blueTeamName;
	export let orangeTeamName;
	export let blueTeamRecord;
	export let orangeTeamRecord;
	export let blueTeamScore;
	export let orangeTeamScore;
	export let blueTeamLogo;
	export let orangeTeamLogo;
	export let blueTeamSeriesScore;
	export let orangeTeamSeriesScore;
    import { textfit } from 'svelte-textfit';
	import { fly } from 'svelte/transition';
    
</script>


<div class="scorebug"  transition:fly="{{ y:-200, duration: 1000 }}">
	<div class='scoreboard-image'>
		<img src="https://media.discordapp.net/attachments/827545087604162663/930824469390430228/Scoreboard.png?width=1920&height=1080" alt='scoreboard' />
	</div>
    <div class="main-scorebug-wrapper">
        <div class="team left">
            <div class="score">{blueTeamScore}</div>
            <div class="logo left">
                <img class='left' src='{blueTeamLogo}' alt='blue-team-logo'>
            </div>
			{#if blueTeamName == 'YELLOW JACKETS' || blueTeamName == 'TIDES(FT. TRAIL)' || blueTeamName == 'The Snowmen'}
				<div class="t-text left" use:textfit={
					{
					mode:"single", max:30,
					forceSingleModeWidth:false
					}
				}>{blueTeamName}</div>
			{:else}
				<div class="t-text left" use:textfit={
					{
					mode:"single", max:40,
					forceSingleModeWidth:false
					}
				}>{blueTeamName}</div>
			{/if}
            <div class="tickerv-wrap left">{blueTeamRecord}</div>
        </div>
        <div class="clock">{clockTime}</div>
        <div class="league">Series Score: {blueTeamSeriesScore}-{orangeTeamSeriesScore}</div>
        <div class='seriesScoreL'></div>
        <div class='seriesScoreR'></div>
        <div class="team right">
            <div class="name-tile right">
                <div class="bg right"></div>
                {#if orangeTeamName == 'YELLOW JACKETS' || orangeTeamName == 'TIDES(FT. TRAIL)' || orangeTeamName == 'The Snowmen'}
					<div class="t-text right" use:textfit={
						{
						mode:"single", max:30,
						forceSingleModeWidth:false
						}
					}>{orangeTeamName}</div>
				{:else}
					<div class="t-text right" use:textfit={
						{
						mode:"single", max:40,
						forceSingleModeWidth:false
						}
					}>{orangeTeamName}</div>
				{/if}
                <div class="tickerv-wrap right">{orangeTeamRecord}</div>
            </div>
            <div class="logo right">
                <img class='right' src='{orangeTeamLogo}' alt='orange-team-logo'>
            </div>
            <div class="score-outer right">
                <div class="bg"></div>
                    <div class="score">{orangeTeamScore}</div>
                </div>
        </div>
    </div>
</div>

<style>
    .main-scorebug-wrapper {
		height: 150px;
		width: 1009px;
		position: absolute;
		top: 0%;
		left: 460px;
    	font-family: Neuzeit Gro Bol;
	}

	.clock {
		position: absolute;
		left: 413px;
		top: 55px;
		font-size: 57px;
		color: white;
		width: 174px;
		height: 57px;
		line-height: 57px;
		text-align: center;
    	font-family: Neuzeit Gro Bol;
	}

	.league {
		position: absolute;
		left: 260px;
		top: -10px;
		font-size: 35px;
		color: white;
		width: 500px;
		height: 57px;
		line-height: 57px;
		text-align: center;
    	font-family: Neuzeit Gro Reg;
	}

	.team {
    	position: absolute;
    	width: 419px;
		height: 65px;
		top: 0%;
		color: white;
	}

	.team.left {
    	position: absolute;
		left: 0%;
	}

	.team.left .t-text {
		position: absolute;
		width: 240px;
		top: 44px;
		left: 80px;
		text-align: center;
		height: 88px;
		line-height: 88px;
	}

	.team.left .tickerv-wrap {
		position: absolute;
        font-size: 20px;
		width: 265px;
		top: 0%;
		left: 65px;
		text-align: center;
		height: 20px;
		line-height: 20px;
	}

	.team.left .score {
		position: absolute;
		right: 10px;
		top: 55px;
        font-size: 60px;
		height: 65px;
		line-height: 65px;
		width: 85px;
		text-align: center;
	}

	.team.right {
    	position: absolute;
		right: 0%;
	}

	.team.right .t-text {
		position: absolute;
		width: 240px;
		top: 44px;
		text-align: center;
		height: 88px;
		line-height: 88px;
		right: 90px;
	}

	.team.right .tickerv-wrap {
		position: absolute;
		font-size: 20px;
		width: 265px;
		top: 0%;
		right: 65px;
		text-align: center;
		height: 20px;
		line-height: 20px;
	}

	.team.right .score {
		position: absolute;
		left: 0%;
		top: 55px;
		font-size: 60px;
		height: 65px;
		line-height: 65px;
		width: 85px;
		text-align: center;
	}

	.team img {
		opacity: 1;
		height: 99px;
		width: 99px;
		object-fit: contain;
		position: absolute;
	}

	.team.left img{
		position: absolute;
		left: -19px;
		top:34px;
	}

	.team.right img{
		position: absolute;
		right: -10px;
		top: 34px;
	}

</style>
