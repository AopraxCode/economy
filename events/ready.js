const client = require("../main");
const { Collection } = require("discord.js")
const fs = require("fs")

client.on("ready", () => {
console.log(`${client.user.tag} Bot Hazır`)
client.user.setActivity("Slenzy?")

client.commands = new Collection();
client.aliases = new Collection();
fs.readdir("./commands/", (err, files) => {
if (err) console.error(err);
console.log(`${files.length} Toplam Komutlar`);
files.forEach(f => {
let props = require(`../commands/${f}`);
    
console.log(`${props.help.name} Komutlar Yüklendi`);
    
client.commands.set(props.help.name, props);
props.conf.aliases.forEach(alias => {
client.aliases.set(alias, props.help.name);
});
});
});

});
