module.exports = {
    name: 'save',
    aliases: ['kaydet'],
    utilisation: '{prefix}save',
    voiceChannel: true,

    async execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        message.author.send(`**Creature Bot**\n\nKaydedilen parça: **${queue.current.title} - ${queue.current.author}**\n\nKaydedilen sunucu: **${message.guild.name}**`).then(() => {
            message.channel.send(`${message.author}, başarıyla size özelden kaydedilen şarkıyı gönderdim!`);
        }).catch(error => {
            message.channel.send(`${message.author}, size özel mesaj gönderilmiyor!`);
        });
    },
};