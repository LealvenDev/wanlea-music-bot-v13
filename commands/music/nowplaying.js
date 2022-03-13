const { MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

module.exports = {
    name: 'nowplaying',
    aliases: ['np',"çalan"],
    utilisation: '{prefix}nowplaying',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, Şuanda çalan bir müzik yok!. ❌`);

        const track = queue.current;
        const embed = new MessageEmbed();
        const methods = ['Kapalı', 'track', 'queue'];
        const timestamp = queue.getPlayerTimestamp();
        const trackDuration = timestamp.progress == 'Sonsuza' ? 'Sonsuz (Canlı Yayın)' : track.duration;

        embed.setColor('1e009a');

        embed.setAuthor(track.title, track.thumbnail);

        embed.addField(`Ses`,`%${queue.volume}`,true)

        embed.addField(`Süre`,`${trackDuration}`,true)

        embed.addField(`Döngü Modu`,`${methods[queue.repeatMode]}`,true)

        embed.addField(`Filtre`,`Kapalı`,true)
        
        embed.addField(`Müziği Açan`,`${track.requestedBy}`,true)

        embed.addField(`Kanal`,`<#${queue.connection.channel.id}>`,true)


        embed.setFooter(`${client.ws.ping}ms`, client.user.displayAvatarURL({ dynamic: true }));


        message.channel.send({ embeds: [embed] });
    },
};