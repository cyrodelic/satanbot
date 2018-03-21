const Discord = require('discord.js');
const bot = new Discord.Client();

console.log('Bot Running');

var rng= [];
var i = 0;
bot.on('message',(message)=>{
	if(message.content == '!duo'){
		//message.reply('Hola'); reply to someone message
		message.channel.send('Hola');
	}
	else if(message.content == '!pull'){
		for(i=0;i<=10;i++){
			x= Math.floor(Math.random()*1000)+1;
			if(i<10){
				if(x<63){
					rng.push(" T6 Ancient");
				}else if(x>=63 && x<81){
					rng.push(" T6 Legendary");
				}else if(x>=81 && x<568){
					rng.push(" T7 Ancient");
				}else if(x>=568 && x<718) {
					rng.push(" T7 Legendary");
				}else if(x>=718 && x<758){
					rng.push(" 100 Fragments");
				}else if(x>=758 && x<774){
					rng.push(" 200 Fragments");
				}else if(x>=774 && x<814){
					rng.push(" 10 Essence");
				}else if(x>=814 && x<830){
					rng.push(" Artifact Fragments");
				}else if(x>=830 && x<878){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=878 && x<918){
					rng.push(" Fragments of Infinity");
				}else if(x>=918 && x<928){
					rng.push("** ( ͡° ͜ʖ ͡°)Artifact( ͡° ͜ʖ ͡°)**");
				}else if(x>=928 && x<938){
					rng.push("** ★Stone of Infinity★**");
				}else if(x>=938 && x<948){
					rng.push("** <>Unique Weapon<>**");
				}else if(x>=948 && x<978){
					rng.push(" ** -Class Unique Weapon-**");
				}else if(x>=978 && x<991){
					rng.push("** Common Treasure**");
				}else{
					rng.push("*** Unique Treasure***");
				}
			}else{
				if(x<124){
					rng.push(" T7 Ancient");
				}else if(x>=124 && x<462) {
					rng.push(" T7 Legendary");
				}else if(x>=462 && x<522){
					rng.push(" 100 Fragments");
				}else if(x>=522 && x<546){
					rng.push(" 200 Fragments");
				}else if(x>=546 && x<606){
					rng.push(" 10 Essence");
				}else if(x>=606 && x<630){
					rng.push(" Artifact Fragments");
				}else if(x>=630 && x<702){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=702 && x<762){
					rng.push(" Fragments of Infinity");
				}else if(x>=762 && x<792){
					rng.push("** ( ͡° ͜ʖ ͡°)Artifact( ͡° ͜ʖ ͡°)**");
				}else if(x>=792 && x<822){
					rng.push("** ★Stone of Infinity★**");
				}else if(x>=822 && x<852){
					rng.push("** <>Unique Weapon<>**");
				}else if(x>=852 && x<942){
					rng.push(" ** -Class Unique Weapon-**");
				}else if(x>=942 && x<971){
					rng.push("** Common Treasure**");
				}else{
					rng.push("*** Unique Treasure***");
				}
			}
		}
		var gmuw = Math.floor(Math.random()*10)+1;
		if(gmuw==1){
			rng.push(" ***~GM's Used Underwear~***");
		}

		message.reply("Congratulation you got : "+ rng);
		rng=[];
		i = 0;
	}else if(message.content == '!gm'){
		message.channel.send('hungry for girls :ballot_box_with_check:\nalways looking for drama :ballot_box_with_check:\nspontaneous kicks :ballot_box_with_check:\nfinding whales :ballot_box_with_check: \ngiant weeb :ballot_box_with_check:\nAfter pussies :ballot_box_with_check:\nPinning useless things :ballot_box_with_check:\nperverted af :ballot_box_with_check: \nflames ppl :ballot_box_with_check: \nfloofy af :ballot_box_with_check:\nscared of 1v1 pvp :ballot_box_with_check:\nArena cancer :ballot_box_with_check:\nBraindead strats :ballot_box_with_check:\ndumb fuck :ballot_box_with_check:\neasily triggered :ballot_box_with_check:\npassive aggressive scum :ballot_box_with_check:\nPruning chat needlessly :ballot_box_with_check:\nMUST BE GM');
	}else if(message.content == '!sena'){
		message.channel.send('osu :ballot_box_with_check: \ndiscord in class :ballot_box_with_check: \nstaying up late :ballot_box_with_check: \nfoodporn :ballot_box_with_check: \ngrowing harem :ballot_box_with_check: \ncollecting male butt mousepad :ballot_box_with_check: \ncatfishing ppl :ballot_box_with_check: \ngrabbing cats :ballot_box_with_check: \nbeing on top :ballot_box_with_check:\nForcing People to do bad things :ballot_box_with_check: \na huge S :ballot_box_with_check:\nMUST BE SENA');
	}else if(message.content == '!cyro'){
		message.channel.send("Changing name everyday :ballot_box_with_check:\nWorships Artemia :ballot_box_with_check:\nGives pattos :ballot_box_with_check: \nSurrounded by idiots :ballot_box_with_check:\nInto older women :ballot_box_with_check: \nHunting for waifus :ballot_box_with_check: \nMacro during work :ballot_box_with_check: \nLooking for new job :ballot_box_with_check: \nMUST BE CYRODELIC");
	}else if(message.content == '!flail'){
		message.channel.send("namedropper :ballot_box_with_check:\nHUEG burden :ballot_box_with_check: \n4 star gears :ballot_box_with_check: \nkeeps changing nickname :ballot_box_with_check: \nMust be Flaialaialail");
	}else if(message.content == '!neo'){
		message.channel.send("Wooing Sena :ballot_box_with_check:\nRich boye :ballot_box_with_check:\nRaising disappointment because cute :ballot_box_with_check:\nWants all the cute grills :ballot_box_with_check:\nChanging IGN depending on mood :ballot_box_with_check:\nWeeb room :ballot_box_with_check:\nSamurais :ballot_box_with_check: \nO MEGHAAA weebs :ballot_box_with_check: \nBuying figurines w/o looking at price :ballot_box_with_check:\nMHW all day :ballot_box_with_check: \nOne piece addict :ballot_box_with_check: \nMUST BE NEO");
	}else if(message.content == '!moru'){
		message.channel.send("Never sleeps :ballot_box_with_check:\nShut in n33t :ballot_box_with_check:\n8,000 hours of dota :ballot_box_with_check:\nFockin weeb :ballot_box_with_check:\n Betraying people :ballot_box_with_check: \nHuge M :ballot_box_with_check: \nBiased :ballot_box_with_check: \n MUST BE MORU");
	}else if(message.content == '!kagami'){
		message.channel.send("League all day :ballot_box_with_check: \nStays inside :ballot_box_with_check: \nSmol wrists :ballot_box_with_check: \nLikes to be dominated :ballot_box_with_check: \nDangerous :ballot_box_with_check: \nMakes YouTube videos :ballot_box_with_check: \nLit af :ballot_box_with_check: \nKekekek :ballot_box_with_check: \nMeta whore :ballot_box_with_check: \nCan control ppl :ballot_box_with_check: \nLike thicc :ballot_box_with_check: \nLikes lewd dominant women :ballot_box_with_check: \nCooks SPAGHETT :ballot_box_with_check: \nSpends money on cardboards :ballot_box_with_check:\nDed inside :ballot_box_with_check: \nReady to fite :ballot_box_with_check:\nToxic af :ballot_box_with_check: \nSavage :ballot_box_with_check: \nMUST BE KEKGAMI");
	}else if(message.content == '!help'){
		message.channel.send("Say ``!pull`` for a disappointment\n``!gm`` for gm facts\n``!sena`` for sena facts\n``!cyro`` for cyro facts\n``!flail`` for flail facts\n``!neo`` for neo facts\n``!moru`` for moru facts\n``!kagami`` for kagami facts");
	}else if(message.content == '!satan'){
		message.reply("Hi dipshit");
	}else if (message.content =='!testfor'){
		for(i=0;i<=10;i++){
			message.channel.send(i);
		}
	}else if(message.content=='!hue') {
		message.reply("hueuheuheu")
	}else if(message.content=='!botalive?') {
		message.reply("yeas")
	}
	//test
	//test commit 2
})






bot.login(process.env.BOT_TOKEN); //bot login duh

