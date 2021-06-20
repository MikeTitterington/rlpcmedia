import App from './App.svelte';

const app = new App({
	target: document.body,
	props: {
		clockTime: '99:99',
		league: 'MAV',
		blueTeamName: 'Yellow Jackets',
		orangeTeamName: 'Lumberjacks',
		blueTeamRecord: '18-0',
		orangeTeamRecord: '0-18',
		blueTeamScore: '0',
		orangeTeamScore: '0',
		blueTeamLogo: 'https://cdn.discordapp.com/attachments/696962499177742476/771058781915578399/Centurions_Logo.png',
		orangeTeamLogo: 'https://cdn.discordapp.com/attachments/696962499177742476/771058781915578399/Centurions_Logo.png',
		scoreboardImage: 'https://rlpcmedia.s3.amazonaws.com/scoreboard.png'
	}
});

export default app;