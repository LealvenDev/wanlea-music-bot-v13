const { MessageEmbed } = require('discord.js');

module.exports = {
    name: 'queue',
    aliases: ['q',"liste"],
    utilisation: '{prefix}queue',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        if (!queue.tracks[0]) return message.channel.send(`${message.author}, geçerli olandan sonra sırada müzik yok!`);

        const embed = new MessageEmbed();
        //const methods = ['🔁', '🔂'];

        embed.setColor('1e009a');//${methods[queue.repeatMode]}

        embed.setAuthor(`${message.guild.name}`, client.user.displayAvatarURL({ size: 1024, dynamic: true }));

        const tracks = queue.tracks.map((track, i) => `${i + 1}. ${track.title} | ${track.author} (Başlatan: <@${track.requestedBy.id}>)`);
        const songs = queue.tracks.length;
        const nextSongs = songs > 5 ? `Ve **${songs - 5}** diğer şarkı!` : `Listede **${songs}** şarkı var!`;

        embed.addField(`Çalınan`,`${queue.current.title}`,true)

        embed.addField(`Sırada`,`${nextSongs}`,false)

        embed.addField(`Sıradakiler`,`${tracks.slice(0, 5).join('\n')}`,false)

        embed.setFooter(`${client.ws.ping}ms`, client.user.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};