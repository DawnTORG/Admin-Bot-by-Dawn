const Discord = require('discord.js')
const client = new Discord.Client();

const prefix ="!";

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
		   mention.send ('```css\nHey! Der User ```' + message.author + '```css\n braucht einen Admin. Hier ist das Problem: ```\n' + mentionMessage);
		   message.author.send ('```css\nHallo! Deine Adminanfrage wird so schnell wie möglich bearbeitet. Viel Spaß noch auf dem Server!```' + 
		   '```css\nDas ist das Problem welches du geschrieben hast:```\n' + mentionMessage);
           message.reply('```css\n' + 'Ich habe dir Infos zu deiner Adminanfrage Privat geschrieben.' + '```');
		   console.log("Es wurde folgende Meldung von dem Spieler " + message.author + " gesendet: " + mentionMessage + " \n Die meldung ging an den Admin " + mention)
		   
	}
		   //!help 
    else if(message.content.toLowerCase() === prefix + 'help'){
		message.delete();
		message.author.send('```css\n' + 
		'Du kannst einen Admin über ein Problem das du hast informieren durch das eingeben von: !admin (der Gewünschte Admin) (der Grund)\nAussehen muss das zum Beispiel so: !admin @Dawn Test'		
		                           + '```');
								   console.log("\n\nEs wurde die Help-liste Aufgerufen")
	}

	
});

client.login(process.env.BOT_TOKEN);
