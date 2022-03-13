const { MessageEmbed, ClientUser } = require('discord.js');

module.exports = {
    name: 'cstop',
    aliases: ['botdurdur',"adminstop","creaturestop"],
    showHelp: false,
    utilisation: '{prefix}cstop',

    execute(client, message, args) {
        if(message.author.id !== "774761103456206848") if(message.author.id !== "827597422389624874") return message.channel.send("Bu komutu kullanabilmek için yeterli yetkiye sahip değilsiniz!")
        console.log(`${message.author.tag} tarafından creature durduruldu!`)
        message.channel.send(`stoped...`)
        process.exit(0)
    },
};