const Discord = require('discord.js');
const bot = new Discord.Client();

console.log('Bot Running');

var essence = 6;
var foi = 6;
var art = 3;
var is = 3;
var uw = 3;
var ancient= parseFloat(Math.round(18.91).toFixed(1));
var leg =parseFloat(Math.round(42.09).toFixed(1));
var frag = parseFloat((Math.round(8.4*2)/2).toFixed(1));
var pots = parseFloat(Math.round(7.2).toFixed(1));	
var artp = parseFloat((Math.round(2.4*2)/2).toFixed(1));
var total = (ancient+leg+frag+pots+artp+essence+foi+art+is+uw);

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
				if(x<93){
					rng.push(" T6 Ancient");
				}else if(x>=93 && x<121){
					rng.push(" T6 Legendary");
				}else if(x>=121 && x<621){
					rng.push(" T7 Ancient");
				}else if(x>=621 && x<771) {
					rng.push(" T7 Legendary");
				}else if(x>=771 && x<827){
					rng.push(" Fragments");
				}else if(x>=827 && x<867){
					rng.push(" Essence");
				}else if(x>=867 && x<915){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=915 && x<931){
					rng.push(" Artifact Fragments");
				}else if(x>=931 && x<971){
					rng.push(" Fragments of Infinity");
				}else if(x>=971 && x<981){
					rng.push(" **Artifact**");
				}else if(x>=981 && x<991){
					rng.push(" **Stone of Infinity**");
				}else{
					rng.push(" **Unique Weapon**");
				}
			}else{
				if(x<191){
					rng.push(" T7 Ancient");
				}else if(x>=191 && x<611) {
					rng.push(" T7 Legendary");
				}else if(x>=611 && x<696){
					rng.push(" Fragments");
				}else if(x>=696 && x<756){
					rng.push(" Essence");
				}else if(x>=756 && x<826){
					rng.push(" Empty Deluxe Flasks");
				}else if(x>=826 && x<851){
					rng.push(" Artifact Fragments");
				}else if(x>=851 && x<911){
					rng.push(" Fragments of Infinity");
				}else if(x>=911 && x<941){
					rng.push(" **Artifact**");
				}else if(x>=941 && x<970){
					rng.push(" **Stone of Infinity**");
				}else{
					rng.push(" **Unique Weapon**");
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
		message.channel.send("Wooing Sena :ballot_box_with_check:\nRich boye :ballot_box_with_check:\nRaising disappointment because cute :ballot_box_with_check:\nWants all the cute grills :ballot_box_with_check:\nChanging IGN depending on mood :ballot_box_with_check:\nWeeb room :ballot_box_with_check:\nSamurais :ballot_box_with_check: \nO MEGHAAA weebs :ballot_box_with_check: \nBuying figurines w/o looking at price :ballot_box_with_check: \nMUST BE NEO");
	}else if(message.content == '!moru'){
		message.channel.send("Never sleeps :ballot_box_with_check:\nShut in n33t :ballot_box_with_check:\n8,000 hours of dota :ballot_box_with_check:\nFockin weeb :ballot_box_with_check:\n Betraying people :ballot_box_with_check: \nHuge M :ballot_box_with_check: \nBiased :ballot_box_with_check: \n MUST BE MORU");
	}else if(message.content == '!help'){
		message.channel.send("Say ``!pull`` for a disappointment\n``!gm`` for gm facts\n``!sena`` for sena facts\n``!cyro`` for cyro facts\n``!flail`` for flail facts\n``!neo`` for neo facts");
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
})






bot.login('NDExMTYwMTE1MzcxMzExMTA0.DV3qaw.GUCZRJXymBQyV5UUiD2rJROfF5Q'); //bot login duh

