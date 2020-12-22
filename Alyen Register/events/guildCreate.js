 const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

client.on('guildCreate', guild => {
    console.log(`${guild.name}`)
}) 