const { MessageEmbed } = require('discord.js');
const { QueryType } = require('discord-player');

module.exports = {
    name: 'search',
    aliases: ['ara'],
    utilisation: '{prefix}search [song name]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Komutu yanlış kullandınız, doğru bir şekilde kullanabilmeniz için argümanları paylaşıyorum!\n\nDoğru Kullanım: \`!search [search]\``);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, aramanın sonucu bir türlü bulunamadı!`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        const embed = new MessageEmbed();

        embed.setColor('1e009a');
        embed.setAuthor(`${args.join(' ')}`);

        const maxTracks = res.tracks.slice(0, 10);

        embed.setDescription(`${maxTracks.map((track, i) => `**${i + 1}**. ${track.title} | ${track.author}`).join('\n')}\n\nArasından bir şarkı seçin **1** ile **${maxTracks.length}** arasında seçip yaz gönder veya **cancel** yaz ve seçimi iptal et!`);

        embed.setFooter(`${client.ws.ping}ms`, client.user.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });

        const collector = message.channel.createMessageCollector({
            time: 15000,
            errors: ['time'],
            filter: m => m.author.id === message.author.id
        });

        collector.on('collect', async (query) => {
            if (query.content.toLowerCase() === 'cancel') return message.channel.send(`${message.author}, arama iptal edildi!`) && collector.stop();

            const value = parseInt(query.content);

            if (!value || value <= 0 || value > maxTracks.length) return message.channel.send(`Komutu yanlış kullandınız, doğru bir şekilde kullanabilmeniz için argümanları paylaşıyorum!\n\nDoğru kullanım: \`[1/${maxTracks.length}\`] arasında seçip yaz gönder veya \`[cancel]\` yaz ve seçimi iptal et!`);

            collector.stop();

            try {
                if (!queue.connection) await queue.connect(message.member.voice.channel);
            } catch {
                await player.deleteQueue(message.guild.id);
                return message.channel.send(`${message.author} şuanda ses kanalına katılamıyorum, lütfen sonra tekrar deneyiniz!`);
            }

            await message.channel.send(`Parçanız yükleniyor, lütfen bekleyiniz!`);

            queue.addTrack(res.tracks[Number(query.content)-1]);
            if (!queue.playing) await queue.play();
           
        });

        collector.on('end', (msg, reason) => {
            if (reason === 'time') return message.channel.send(`${message.author}, şarkı arama süreniz sona erdi!`);
        });
    },
};