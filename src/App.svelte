<script>
	import { onMount } from 'svelte';
	import { current_component } from 'svelte/internal';
	import store from './store.js';
	import WsSubscribers from '../scripts/ws_subscriber.js';
	import PlayerCard from './PlayerCard.svelte';

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
	export let playersLeft = [];
	export let playersRight = [];
	let leftTop = 300;
	onMount(() => {
		store.clockTime(currentMessage => {
			clockTime = currentMessage;
		})
		store.blueTeamScore(currentMessage => {
			blueTeamScore = currentMessage;
		})
		store.orangeTeamScore(currentMessage => {
			orangeTeamScore = currentMessage;
		})
		store.blueTeamName(currentMessage => {
			blueTeamName = currentMessage;
		})
		store.orangeTeamName(currentMessage => {
			orangeTeamName = currentMessage;
		})
		store.blueTeamLogo(currentMessage => {
			blueTeamLogo = currentMessage;
		})
		store.orangeTeamLogo(currentMessage => {
			orangeTeamLogo = currentMessage;
		})
		store.blueTeamRecord(currentMessage => {
			blueTeamRecord = currentMessage;
		})
		store.orangeTeamRecord(currentMessage => {
			orangeTeamRecord = currentMessage;
		})
		store.blueTeamSeriesScore(currentMessage => {
			blueTeamSeriesScore = currentMessage;
		})
		store.orangeTeamSeriesScore(currentMessage => {
			orangeTeamSeriesScore = currentMessage;
		})
		store.league(currentMessage => {
			league = currentMessage;
		})
		store.playersLeft(currentMessage => {
			if (currentMessage == ''){
				playersLeft = [];
			}else {
				playersLeft = currentMessage;
			}
		})
		store.playersRight(currentMessage => {
			if (currentMessage == ''){
				playersRight = [];
			}else {
				playersRight = currentMessage;
			}
		})
	})


</script>

<main>
	<body>
		<div class="page-container">
			<div class='scoreboard-image'>
				<img src="{scoreboardImage}" alt='scoreboard'/>
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
						<div class="t-text left">{blueTeamName}</div>
						<div class="tickerv-wrap left">{blueTeamRecord}</div>
					</div>
					<div class="clock">{clockTime}</div>
					<div class="league">{league}</div>
					<div class='seriesScoreL'></div>
					<div class='seriesScoreR'></div>
					<div class="team right">
						<div class="name-tile right">
							<div class="bg right"></div>
							<div class="t-text right">{orangeTeamName}</div>
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
			<div class="teammates left">
				{#each playersLeft as player (player.id)}
					<PlayerCard name={player.name} goals={player.goals} assists={player.assists} saves={player.saves} topPos={player.topPos + "px"} team={"left"} boost={player.boost} color={player.color}/>
				{/each}
			</div>
			<div class="teammates right">
				{#each playersRight as player (player.id)}
					<PlayerCard name={player.name} goals={player.goals} assists={player.assists} saves={player.saves} topPos={player.topPos + "px"} team={"right"} boost={player.boost} color={player.color}/>
				{/each}
			</div>
			<div class='stinger-container' style="z-index: 5;">
				<video id='video-player' class='video' muted preload='metadata'>
					<source src="./out.webm" type="video/webm">
				  </video>
			</div>
		</div>
	</body>
</main>
<style>

	@font-face {
		font-family: "Neuzeit Gro Bol";
		src: url("../assets/fonts/NeuzeitGro-Bol.ttf");
	}
	@font-face {
		font-family: "Neuzeit Gro Reg";
		src: url("../assets/fonts/NeuzeitGro-Reg.ttf");
	}

	.teammates.left {
		position: absolute;
		top: 0px;
		height: 100%;
		width: 100%;
		left: -10px;
	}

	.teammates.right {
		position: absolute;
		top: 0px;
		left: -10px;
		height: 100%;
		width: 1920px;
	}

	.page-container {
		height: 1080px;
		width: 1920px;
		position: absolute;
		top: 0%;
		left: 0%;
	}

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
        font-size: 28px;
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
		font-size: 28px;
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

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>