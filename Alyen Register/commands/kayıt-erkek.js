const Discord = require('discord.js');
const db = require('quick.db')
module.exports.run = async (bot, message, args, member, client, level) => {
  const alyenemoji = bot.emojis.find(emoji => emoji.name === "tepki olarak verilcke emoji");
  if (!message.member.hasPermission("ADMINISTRATOR"))
  if (!message.member.hasPermission("MANAGE_ROLES"))
  if (!message.member.roles.find('name', 'Alyen')) return message.channel.send('Yetkin yetmiyor.');
  let user = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if (!user) return message.reply("**Etiket Atmayı Unuttun!**");
  user.addRole('758987998456709130')  ///verilicek rol
  user.removeRole('758988001660895242')   //alınıcak rol
const alyen = new Discord.RichEmbed()
        .setAuthor(message.author.tag, message.author.avatarURL)
        .setDescription(`${user}, **Adlı üyenin __kayıt__ işlemi başarılı bir şekilde yapıldı.**`)
        .setColor('BLACK')
        .setTimestamp()
        message.channel.send(alyen)
        message.react(alyenemoji)
  
} 
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [
      
    ],
    permLevel: 0
}
exports.help = {
    name: 'e',
}