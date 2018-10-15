const Discord = require("discord.js")
const client = new Discord.Client();

    client.on('ready', () => {
     client.user.setActivity("Hii .",{type: 'Listening'});

});


client.login(process.env.BOT_TOKEN);
