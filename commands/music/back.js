module.exports = {
    name: 'back',
    aliases: ['geri'],
    utilisation: '{prefix}back',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şu anda çalan müzik yok!`);

        if (!queue.previousTracks[1]) return message.channel.send(`${message.author}, zaten daha önce müzik çalmıyordu!`);

        await queue.back();

        message.channel.send(`Başarıyla bir önceki müzik oynatılıyor!`);
    },
};