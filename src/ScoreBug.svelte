<script>
    export let clockTime;
	export let league;
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
	export let scoreboardImage;
    import { textfit } from 'svelte-textfit';
	import { fly } from 'svelte/transition';
    
</script>

<div class='scoreboard-image'>
    <img src="{scoreboardImage}" alt='scoreboard' />
</div>
<div class="scorebug">
    <div class='extensions'>
        <div class='eLeft'></div>
        <div class='eRight'></div>
    </div>
    <div class="main-scorebug-wrapper">
        <div class="team left">
            <div class="score">{blueTeamScore}</div>
            <div class="logo left">
                <img class='left' src='{blueTeamLogo}' alt='blue-team-logo'>
            </div>
            <div class="t-text left" use:textfit={
                {
                  mode:"single", max:40,
                  forceSingleModeWidth:false
                }
              }>{blueTeamName}</div>
            <div class="tickerv-wrap left">{blueTeamRecord}</div>
        </div>
        <div class="clock">{clockTime}</div>
        <div class="league">{blueTeamSeriesScore}-{orangeTeamSeriesScore}</div>
        <div class='seriesScoreL'></div>
        <div class='seriesScoreR'></div>
        <div class="team right">
            <div class="name-tile right">
                <div class="bg right"></div>
                <div class="t-text right" use:textfit={
                    {
                      mode:"single", width:265, height:63, max:40,
                      forceSingleModeWidth:false
                    }
                  }>{orangeTeamName}</div>
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

	.eLeft {
		position: absolute;
		height: 62px;
		width: 130px;
		background-color: #252122;
		top: 0%;
		left: 400px;
		z-index: -1;
		border: 2px solid #0cb8fc;
	}

	.eRight {
		position: absolute;
		height: 62px;
		width: 130px;
		background-color: #252122;
		top: 0%;
		right: 400px;
		z-index: -1;
		border: 2px solid #fc9c0c;
	}

	.clock {
		position: absolute;
		left: 419px;
		top: 0%;
		font-size: 57px;
		color: white;
		width: 174px;
		height: 57px;
		line-height: 57px;
		text-align: center;
    	font-family: Neuzeit Gro Reg;
	}

	.league {
		position: absolute;
		left: 482px;
		top: 53px;
		font-size: 20px;
		color: black;
		width: 45px;
		height: 57px;
		line-height: 57px;
		text-align: center;
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
		width: 265px;
		top: 0%;
		left: 65px;
		text-align: center;
		height: 63px;
		line-height: 63px;
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
		right: 0%;
		top: 0%;
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
		width: 265px;
		top: 0%;
		right: 65px;
		text-align: center;
		height: 63px;
		line-height: 63px;
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
		top: 0%;
		font-size: 60px;
		height: 65px;
		line-height: 65px;
		width: 85px;
		text-align: center;
	}

	.team img {
		opacity: 1;
		height: 62px;
		width: 60px;
		object-fit: contain;
		position: absolute;
	}

	.team.left img{
		position: absolute;
		left: -58px;
		top: 2px;
	}

	.team.right img{
		position: absolute;
		right: -47px;
		top: 2px;
	}

</style>