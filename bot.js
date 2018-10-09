const Discord = require("discord.js")
const client = new Discord.Client();

client.on('ready', () => {
    client.channels.find(c => c.id === '498284777326247936').join();
});

    client.on('ready', () => {
     client.user.setActivity("- BrawlhallaSK | Road To 4K .",{type: 'Playing'});

});



client.login(process.env.BOT_TOKEN);
