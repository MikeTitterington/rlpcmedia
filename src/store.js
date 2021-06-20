import { writable } from 'svelte/store'
import WsSubscribers from '../scripts/ws_subscriber.js';
const clockTime = writable('');
const blueTeamScore = writable('');
const orangeTeamScore = writable('');
const blueTeamName = writable('');
const orangeTeamName = writable('');
const blueTeamLogo = writable('');
const orangeTeamLogo = writable('');
const blueTeamRecord = writable('');
const orangeTeamRecord = writable('');
const blueTeamSeriesScore = writable('');
const orangeTeamSeriesScore = writable('');
const league = writable('');
const playersLeft = writable([]);
const playersRight = writable([]);

let teamMap = {
    "ascension": {
      "1": " #ffcf56",
      "2": " #18020c",
      "3": " #000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771051087062630430/Ascension_Logo.png"
    },
    "bulls": {
      "1": "#4c2719",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771051080858468363/Bulls_Logo.png"
    },
    "cobras": {
      "1": "#f49d37",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771051085514539048/Cobras_Logo.png"
    },
    "ducks": {
      "1": "#226f54",
      "2": "#f6aa1c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049884321054720/Ducks_Logo.png"
    },
    "eagles": {
      "1": "#0072bb",
      "2": "#9cf6f6",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049887906791464/Eagles_Logo.png"
    },
    "flames": {
      "1": "#f49d37",
      "2": "#18020c",
      "3": "#f72c25",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/679756528567451683/Flames_Logo.png"
    },
    "hawks": {
      "1": "#f42b03",
      "2": "#000001",
      "3": "#d3d5d7",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049891488464927/Hawks_Logo.png"
    },
    "kings": {
      "1": "#ffd046",
      "2": "#000001",
      "3": "#d3d5d7",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/648721158174146580/Kings_Logo.png"
    },
    "lions": {
      "1": "#d3d5d7",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049894517014578/Lions_Logo.png"
    },
    "lumberjacks": {
      "1": "#393a10",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049897256288266/Lumberjacks_Logo.png"
    },
    "panthers": {
      "1": "#f42b03",
      "2": "#890620",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049902117224468/Panthers_Logo.png"
    },
    "pirates": {
      "1": "#960200",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/641071922712412174/Pirates_Logo.png"
    },
    "sharks": {
      "1": "#1f487e",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049903723511888/Sharks_Logo.png"
    },
    "spartans": {
      "1": "#5f5aa2",
      "2": "#d3d5d7",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049907149865000/Spartans_Logo.png"
    },
    "storm": {
      "1": "#fcba04",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/402228472744902656/469553106393235466/dragon-01-1.png"
    },
    "whitecaps": {
      "1": "#c9f9ff",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771049910224814080/Whitecaps_Logo.png"
    },
    "bobcats": {
      "1": "#f42b03",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053393082318858/Bobcats_Logo.png"
    },
    "bulldogs": {
      "1": "#c7ccdb",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053399206264922/Bulldogs_Logo.png"
    },
    "dolphins": {
      "1": "#b8e1ff",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/648718145338736650/Dolphins_Logo.png"
    },
    "entropy": {
      "1": "#f49d37",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053405337681920/Entropy_Logo.png"
    },
    "geese": {
      "1": "#393a10",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053411755491328/Geese_Logo.png"
    },
    "heat": {
      "1": "#f49d37",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053416562032660/Heat_Logo.png"
    },
    "knights": {
      "1": "#18020c",
      "2": "#e9df00",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053345845674020/Knights_Logo.png"
    },
    "osprey": {
      "1": "#ee2e31",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053352686977064/Osprey_Logo.png"
    },
    "owls": {
      "1": "#4c230a",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/654074318631862282/Owls_Logo.png"
    },
    "pioneers": {
      "1": "#656839",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053359012642816/Pioneers_Logo.png"
    },
    "raiders": {
      "1": "#d3d5d7",
      "2": "#e9df00",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/654074118492389376/Raiders_Logo.png"
    },
    "thunder": {
      "1": "#e9df00",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053364338360340/Thunder_Logo.png"
    },
    "tigers": {
      "1": "#f49d37",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053370752106506/Tigers_Logo.png"
    },
    "trojans": {
      "1": "#18020c",
      "2": "#e9df00",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053378343927848/Trojans_Logo.png"
    },
    "tundra": {
      "1": "#2660a4",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/677666710169583647/Tundra_Logo.png"
    },
    "vipers": {
      "1": "#ff8c42",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771053385294020658/Vipers_Logo.png"
    },
    "avalanche": {
      "1": "#000001",
      "2": "#4ecdc4",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/667163655065829403/Avalanche_Logo.png"
    },
    "bandits": {
      "1": "#18020c",
      "2": "#000001",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055539521191997/Bandits_Logo.png"
    },
    "barracuda": {
      "1": "#2660a4",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/768905494941007882/Barracuda_Logo.png"
    },
    "dukes": {
      "1": "#18020c",
      "2": "#881600",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/663779106583740446/Dukes_Logo.png"
    },
    "falcons": {
      "1": "#5bc3eb",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/648727754711498793/Falcons_Logo.png"
    },
    "herons": {
      "1": "#a4af69",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771069879373660180/Herons_Logo.png"
    },
    "inferno": {
      "1": "#e57c04",
      "2": "#bf1a2f",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055542869295174/Inferno_Logo.png"
    },
    "jaguars": {
      "1": "#f42b03",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055545598869564/Jaguars_Logo_3.png"
    },
    "lightning": {
      "1": "#f7d002",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/768223943085129728/Lightning_Logo.png"
    },
    "lynx": {
      "1": "#18020c",
      "2": "#f7d002",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055549412409354/Lynx_Logo_2.png"
    },
    "mustangs": {
      "1": "#4c1c00",
      "2": "#000001",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055552147095602/Mustangs_Logo_2.png"
    },
    "pulsars": {
      "1": "#32936f",
      "2": "#387d7a",
      "3": "#2bc016",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055554603778068/Pulars2.png"
    },
    "pythons": {
      "1": "#ff8c42",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055558321111080/Pythons_Logo_3.png"
    },
    "voyagers": {
      "1": "#0c8346",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055561604595722/Voyagers_Logo_2.png"
    },
    "vultures": {
      "1": "#587291",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/663389725188423680/Vultures_Logo.png"
    },
    "warriors": {
      "1": "#7c238c",
      "2": "#7c72a0",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771055564604178442/Warriors_Logo_2.png"
    },
    "cardinals": {
      "1": "#a22c29",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/663392854227419136/Cardinals_Logo.png"
    },
    "cougars": {
      "1": "#f7b32b",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/696145820034269224/Cougars_Logo_2.png"
    },
    "embers": {
      "1": "#dc493a",
      "2": "#a22c29",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771072411239972904/Embers_Logo.png"
    },
    "eskimos": {
      "1": "#e3ebff",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/655261559970594826/Eskimos_Logo.png"
    },
    "genesis": {
      "1": "#4392f1",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/641101909658173450/genesisfinal2.png"
    },
    "gulls": {
      "1": "#f49d37",
      "2": "#000001",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/648718182772768768/Gulls_Logo.png"
    },
    "jesters": {
      "1": "#fed766",
      "2": "#2ab7ca",
      "3": "#fe4a49",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/654074080810631178/Jesters_Logo.png"
    },
    "leopards": {
      "1": "#f42b03",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771056600773165146/Leopards_Logo_2.png"
    },
    "miners": {
      "1": "#e8c547",
      "2": "#698f3f",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771056602873724938/Miners_Logo_3.png"
    },
    "pelicans": {
      "1": "#5c80bc",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/663779353095700530/Pelicans_Logo.png"
    },
    "rattlers": {
      "1": "#a2c7e5",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/654740981815574529/Rattlers_Logo.png"
    },
    "ravens": {
      "1": "#bd1e1e",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/663389781732098068/Ravens_Logo.png"
    },
    "stallions": {
      "1": "#d68c45",
      "2": "#e0e0ce",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/654074869943762955/Stallions_Logo.png"
    },
    "tempest": {
      "1": "#e6c229",
      "2": "#000001",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771056606829084702/Tempest_Logo_2.png"
    },
    "titans": {
      "1": "#698f3f",
      "2": "#c1b2ab",
      "3": "#18020c",
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/648720610704228362/Titans_Logo.png"
    },
    "wranglers": {
      "1": "#ff2e00",
      "2": "#18020c",
      "3": "#000001",
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771056608150290462/Wranglers_Logo.png"
    },
    "admirals": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058776466784286/Admirals_Logo.png"
    },
    "dragons": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058785246511175/Dragons_Logo.png"
    },
    "beavers": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/715361176707399741/Beavers_Logo.png"
    },
    "cyclones": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/717733534101668010/Cyclones_Logo.png"
    },
    "grizzlies": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058779232010250/Bears_Logo.png"
    },
    "centurions": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058781915578399/Centurions_Logo.png"
    },
    "yellow jackets": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/730457373126426654/Yellow_Jackets_logo.png"
    },
    "galaxy": {
      "logo": "https://cdn.discordapp.com/attachments/755840403080478832/767476330643193886/Galaxy_Logo.png"
    },
    "sockeyes": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058789113397268/Sockeyes_Logo.png"
    },
    "wolves": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058773192212496/Wolves_Logo.png"
    },
    "wildcats": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058794045767730/Wildcats_Logo.png"
    },
    "rhinos": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/734490021079548005/Rhinos_Logo.png"
    },
    "scorpions": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/730457572397678592/Scorpions_Logo.png"
    },
    "thrashers": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058791676117012/Thrashers_Logo.png"
    },
    "toucans": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/730457120654229584/Toucans_logo.png"
    },
    "wizards": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771058797326106694/Wizards_Logo.png"
    },
    "captains": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060591338061874/Captains_Logo.png"
    },
    "yetis": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060585554378762/Yetis_Logo.png"
    },
    "otters": {
      "logo": "https://cdn.discordapp.com/attachments/421796377303973888/755863732193591418/Otters_Logo.png"
    },
    "tides": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060583024820254/Tides_Logo.png"
    },
    "pandas": {
      "logo": "https://cdn.discordapp.com/attachments/324268285703094273/730511590088245268/Pandas_Logo.png"
    },
    "samurai": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060577840660490/Samurai_Logo.png"
    },
    "hornets": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060644685545512/Hornets_Logo.png"
    },
    "solar": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771075279300329512/Solar_Logo.png"
    },
    "piranhas": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060572245983303/Piranhas_Logo.png"
    },
    "terriers": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060579968090122/Terriers_Logo.png"
    },
    "jackrabbits": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060566437396500/Jackrabbits_Logo_2.png"
    },
    "zebras": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060588239126528/Zebras_Logo.png"
    },
    "camels": {
      "logo": "https://cdn.discordapp.com/attachments/394574231066640387/738138000264790106/Camels_Logo.png"
    },
    "raptors": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771079922302713856/Raptors_Logo.png"
    },
    "macaws": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771060569527681064/Macaws_Logo.png"
    },
    "mages": {
      "logo": "https://cdn.discordapp.com/attachments/696962499177742476/771077495772020751/Mages_Logo.png"
    }
  };

function secondsToTime(seconds, showMs) {
    return (new Date(seconds * 1000)).toISOString().substr(showMs ? 17 : 15, 4);
}

WsSubscribers.subscribe("ws", "open", function() {
    WsSubscribers.send("cb", "first_connect", {
        'name': 'Scorebug'
    });
    setInterval(function () {
        WsSubscribers.send("cb", "heartbeat", "heartbeat");
    }, 1000);
});

WsSubscribers.init(49322, false, [
    "game:update_state",
    "cb:heartbeat"
]);

WsSubscribers.subscribe("game", "update_state", (d) => {
    var gameTime = d['game']['time'];
    clockTime.set(secondsToTime(gameTime, false));
    blueTeamScore.set(d['game']['teams']["0"]['score']);
    orangeTeamScore.set(d['game']['teams']["1"]['score']);
    blueTeamName.set(d['game']['teams']["0"]['name']);
    orangeTeamName.set(d['game']['teams']["1"]['name']);
    let leftLower = d['game']['teams']["0"]['name'].toLowerCase();
    let rightLower = d['game']['teams']["1"]['name'].toLowerCase();
    if (teamMap.hasOwnProperty(leftLower)) {
        blueTeamLogo.set(teamMap[leftLower]['logo']);
    }

    if (teamMap.hasOwnProperty(rightLower)) {
        orangeTeamLogo.set(teamMap[rightLower]['logo']);
    }
    let left = [];
    let right = [];
    let countL = 0;
    let countR = 0;
    for (var player in d['players']) {
      if (d['players'][player]['team'] == '0'){
        d['players'][player]['topPos'] = 76 * countL + 0;
        d['players'][player]['color'] = "#0cb8fc";
        countL += 1;
        left.push(d['players'][player]);
      } else {
        d['players'][player]['topPos'] = 76 * countR + 0;
        d['players'][player]['color'] = "#fc9c0c";
        countR += 1;
        right.push(d['players'][player]);
      }
    }
    left = left.sort();
    right = right.sort();
    playersLeft.set(left);
    playersRight.set(right);
});

WsSubscribers.subscribe("game", "match_created", () => {
    showNoTimeInClock = false;
    blueTeamScore.set(d['game']['teams']["0"]['score']);
    orangeTeamScore.set(d['game']['teams']["1"]['score']);
    clockTime.set("5:00");
    blueTeamName.set(d['game']['teams']["0"]['name']);
    orangeTeamName.set(d['game']['teams']["1"]['name']);
    var url = "https://spreadsheets.google.com/feeds/cells/1mDV2D9MRoYX-7f4eBDlllvBq-kewCFQ6kRbCf3ML6uk/od6/public/basic?alt=json";
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            var obj = JSON.parse(this.response);
            var entry = obj['feed']['entry'];
            for (i = 0; i < entry.length; i++) {
                if (obj['feed']['entry'][i]['title']['$t'] == "J6") {
                    leftRecord = obj['feed']['entry'][i]['content']['$t'];
                    blueTeamRecord.set(leftRecord);
                } else if (obj['feed']['entry'][i]['title']['$t'] == "J7") {
                    rightRecord = obj['feed']['entry'][i]['content']['$t'];
                    orangeTeamRecord.set(rightRecord);
                } else if (obj['feed']['entry'][i]['title']['$t'] == "K6") {
                    leftColor = obj['feed']['entry'][i]['content']['$t'];
                } else if (obj['feed']['entry'][i]['title']['$t'] == "K7") {
                    rightColor = obj['feed']['entry'][i]['content']['$t'];
                } else if (obj['feed']['entry'][i]['title']['$t'] == "G5") {
                    league.set(obj['feed']['entry'][i]['content']['$t']);
                } else if (obj['feed']['entry'][i]['title']['$t'] == "C29") {
                    if (obj['feed']['entry'][i]['content']['$t'] > leftSeriesScore) {
                        leftSeriesScore = parseInt(obj['feed']['entry'][i]['content']['$t']);
                        blueTeamSeriesScore.set(leftSeriesScore);
                    }
                } else if (obj['feed']['entry'][i]['title']['$t'] == "C30") {
                    if (obj['feed']['entry'][i]['content']['$t'] > rightSeriesScore) {
                        rightSeriesScore = parseInt(obj['feed']['entry'][i]['content']['$t']);
                        orangeTeamSeriesScore.set(rightSeriesScore);
                    }
                }
            }
        }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
});

export default {
	clockTime: clockTime.subscribe,
    blueTeamScore: blueTeamScore.subscribe,
    orangeTeamScore: orangeTeamScore.subscribe,
    blueTeamName: blueTeamName.subscribe,
    orangeTeamName: orangeTeamName.subscribe,
    blueTeamLogo: blueTeamLogo.subscribe,
    orangeTeamLogo: orangeTeamLogo.subscribe,
    blueTeamRecord: blueTeamRecord.subscribe,
    orangeTeamRecord: orangeTeamRecord.subscribe,
    league: league.subscribe,
    blueTeamSeriesScore: blueTeamSeriesScore.subscribe,
    orangeTeamSeriesScore: orangeTeamSeriesScore.subscribe,
    playersLeft: playersLeft.subscribe,
    playersRight: playersRight.subscribe
}