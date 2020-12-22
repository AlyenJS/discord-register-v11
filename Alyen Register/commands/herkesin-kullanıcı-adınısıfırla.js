const Discord = require('discord.js');

exports.run = async (client, message, args) => {
   //if (!message.member.hasPermission("ADMINISTRATOR")) return message.channel.send('Yetkin yok')
  message.channel.sendMessage("Kullanıcı adlarını sıfırlanma isteğini onaylıyormusun? (onay yazarak işlemi başlat)")
.then(() => {
  
  
message.channel.awaitMessages(a => a.author.id === message.author.id && a.content === "onay", {
    
    max: 1,
    time: 25000,
    errors: ['time'],
  })
    
  .then((collected) => {

  
  message.channel.send("İşlem Bitti." )
   
   message.guild.members.forEach(u => {
u.setNickname("")
})
  })
     .catch(() => {
      message.channel.sendMessage("Belirtilen sürede bir cevap vermediğin için işlem iptal edildi.");
    });
  
  })

}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 2
}

exports.help = {
    name: 'namedefault',
    description: 'Tüm üyelerin kullanıcı adlarını defult olarak ayarlar.',
}