<script>
	import { onMount } from 'svelte';
	import store from './store.js';
	import PlayerCard from './PlayerCard.svelte';
	import PlayerFocus from './PlayerFocus.svelte';
	import GoalScorer from './GoalScorer.svelte';
	import ScoreBug from './ScoreBug.svelte';
	import SeriesScene from './SeriesScene.svelte';
    import { textfit } from 'svelte-textfit';
	import { fly } from 'svelte/transition';

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
	export let playersFocus = {};
	export let showPlayers = false;
	export let showGoal = false;
	export let goalSpeed;
	export let goalScore;
	export let goalTeam;
	export let matchCreated;
	export let showSeries;
	let leftTop = 300;
	let scorebugPackage = {
		
	}
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
		store.matchCreated(currentMessage => {
			matchCreated = currentMessage;
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
		store.playersFocus(currentMessage => {
			playersFocus = currentMessage;
		})
		store.showPlayers(currentMessage => {
			showPlayers = currentMessage;
		})
		store.showGoal(currentMessage => {
			showGoal = currentMessage;
		})
		store.goalSpeed(currentMessage => {
			goalSpeed = currentMessage;
		})
		store.goalScore(currentMessage => {
			goalScore = currentMessage;
		})
		store.goalTeam(currentMessage => {
			goalTeam = currentMessage;
		})
		store.showSeries(currentMessage => {
			showSeries = currentMessage;
		})
	})
</script>

<main>
	<body>
		<div class="page-container">
			<ScoreBug scoreboardImage={scoreboardImage} blueTeamScore={blueTeamScore} blueTeamLogo={blueTeamLogo} blueTeamName={blueTeamName} blueTeamRecord={blueTeamRecord} clockTime={clockTime} league={league} orangeTeamName={orangeTeamName} orangeTeamRecord={orangeTeamRecord} orangeTeamLogo={orangeTeamLogo} orangeTeamScore={orangeTeamScore} blueTeamSeriesScore={blueTeamSeriesScore} orangeTeamSeriesScore={orangeTeamSeriesScore}/>
			{#if matchCreated}
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
				{#if showPlayers}
					<PlayerFocus name={playersFocus.name} goals={playersFocus.goals} assists={playersFocus.assists} saves={playersFocus.saves} boost={playersFocus.boost} color={playersFocus.color} />
				{/if}
				{#if showGoal}
					<GoalScorer name={goalScore} speed={goalSpeed} color={goalTeam} />
				{/if}
			{/if}
			{#if showSeries}
			<SeriesScene name={blueTeamName} position="30%" color="#0cb8fc" team={"left"} logo={blueTeamLogo} score={blueTeamSeriesScore}/>
			{/if}
			{#if showSeries}
				<SeriesScene name={orangeTeamName} position="51%" color="#fc9c0c" team={"right"} logo={orangeTeamLogo} score={orangeTeamSeriesScore}/>
			{/if}
			<video id='video-player' class='video' autoplay muted>
				<source src="./out.webm" type="video/webm">
			</video>
		</div>
	</body>
</main>
<style>

	@font-face {
		font-family: "Neuzeit Gro Bol";
		src: url("../NeuzeitGro-Bol.ttf");
	}
	@font-face {
		font-family: "Neuzeit Gro Reg";
		src: url("../NeuzeitGro-Reg.ttf");
	}

	body {
		position: absolute;
		top: 0;
		left: 0%;
		overflow: hidden;
		height: 1080px;
		width: 1920px;
	}

	.teammates.left {
		position: absolute;
		top: 10px;
		height: 100%;
		width: 100%;
		left: 0px;
	}

	.teammates.right {
		position: absolute;
		top: 10px;
		left: 0px;
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

	
	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>