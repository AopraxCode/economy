const slenzydb = require('croxydb');
const ms = require('ms')
const moment = require("moment");
exports.run = async (client, message, args) => {
  let kullanıcı = message.mentions.members.first()
  if (!kullanıcı) return message.reply("Lütfen bir kullanıcı etiketle!")
    if(message.author.id !== "1070795507082985524") return message.repy("Sen Kurucu Değilsin :wink:")
let miktar = args[1]
if (!miktar) return message.reply("Lütfen eklenecek para miktarı gir!")
message.reply("Başarıyla <@"+kullanıcı+"> Kullanıcısına **"+miktar+"** Miktar Para Eklendi!")
slenzydb.add(`para_${kullanıcı.id}`, miktar)

    }

  


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'para-ekle'
};