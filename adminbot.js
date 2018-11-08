const Discord = require('discord.js')
const client = new Discord.Client();

const prefix ="!";

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});

client.on('ready', () => {
	console.log("Bot jetzt angeschaltet\n\n")
});

client.on('message', message => {
	
	if(message.author.bot) return;
	
	mention = message.mentions.users.first();
	//Die ausgabe an Admin und User
	if(message.content.startsWith(prefix + "admin")){
	   if (mention == null) { return; }
           message.delete();
		   mentionMessage = message.content.slice (6);
	
		   var embed = new Discord.RichEmbed()
		       .addField('Hey! Der User ' + message.author + ' braucht einen Admin. Hier ist das Problem:', 'Hier ist das Problem: ' + mentionMessage)
		       .setColor('RED')
		   mention.sendEmbed(embed)
		   
		   var embed = new Discord.RichEmbed()
		     .addField('Hallo! Deine Adminanfrage wird so schnell wie möglich bearbeitet. Viel Spaß noch auf dem Server!', 'Das ist das Problem welches du geschrieben hast: ' + mentionMessage)
		     .setColor('RED')
                   message.author.sendEmbed(embed)
		   
		   console.log("Es wurde folgende Meldung von dem Spieler " + message.author + " gesendet: " + mentionMessage + " \n Die meldung ging an den Admin " + mention)
		   
	}
	
});

client.login(process.env.BOT_TOKEN);
