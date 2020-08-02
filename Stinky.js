const Discord = require('discord.js');
const client = new Discord.Client();
const config = require('./config.json');

client.once('ready', () => {
	console.log('Ready to stinky!');
});

client.on('message', message => {
    sentMessage = message.toString().toLowerCase();
    if(sentMessage.includes("gorney's grill") || sentMessage.includes("stinky") || message.content.includes("734564767741771928") || message.content.includes("737102276170350692")) {
        var stinky = "739315404757008484";
        message.react('💩');
	message.react(stinky);
    }
    if(sentMessage.includes("ape") || sentMessage.includes("monkey")  || sentMessage.includes("monke") || sentMessage.includes("chimp") || message.content.includes("545994019088367636") || message.content.includes("673224954023510037") || message.content.includes("673736495885975552")) {
        var ooga = "735920050749440081";
        var chimp = '🐒';
        message.react(ooga);
        message.react(chimp);
    }
});
client.login(config.botToken);
