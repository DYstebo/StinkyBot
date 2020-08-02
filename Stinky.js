const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready to stinky!');
});

client.on('message', message => {
    sentMessage = message.toString().toLowerCase();
    if(sentMessage.includes("gorney's grill") || sentMessage.includes("stinky")) {
        var stinky = "739315404757008484";
        message.react(stinky);
    }
});

client.login(config.botToken);