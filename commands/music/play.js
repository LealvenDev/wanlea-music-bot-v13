const { QueryType } = require('discord-player');

module.exports = {
    name: 'play',
    aliases: ['p',"başlat"],
    utilisation: '{prefix}play [song name/URL]',
    voiceChannel: true,

    async execute(client, message, args) {
        if (!args[0]) return message.channel.send(`Komutu yanlış kullandınız, doğru bir şekilde kullanabilmeniz için argümanları paylaşıyorum!\n\nDoğru Kullanım: \`!play [search]\``);

        const res = await player.search(args.join(' '), {
            requestedBy: message.member,
            searchEngine: QueryType.AUTO
        });

        if (!res || !res.tracks.length) return message.channel.send(`${message.author}, malesef hiçbir yerde böyle bir sonuç bulamadım!`);

        const queue = await player.createQueue(message.guild, {
            metadata: message.channel
        });

        try {
            if (!queue.connection) await queue.connect(message.member.voice.channel);
        } catch {
            await player.deleteQueue(message.guild.id);
            return message.channel.send(`${message.author} şuanda ses kanalına katılamıyorum, lütfen sonra tekrar deneyiniz!`);
        }

        await message.channel.send(`${res.playlist ? 'Çalmalisteniz' : 'Parçanız'} yükleniyor, lütfen bekleyiniz.`);

        res.playlist ? queue.addTracks(res.tracks) : queue.addTrack(res.tracks[0]);

        if (!queue.playing) await queue.play();
    },
};