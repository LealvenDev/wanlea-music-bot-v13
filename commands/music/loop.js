const { QueueRepeatMode } = require('discord-player');

module.exports = {
    name: 'loop',
    aliases: ['lp', 'döngü'],
    utilisation: '{prefix}loop <queue>',
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        if (args.join('').toLowerCase() === 'queue') {
            if (queue.repeatMode === 1) return message.channel.send(`${message.author}, ilk önce mevcut müziğin döngü modunu devre dışı bırakmalısınız!\n\nGereken Argüman: \`${client.config.px}loop\``);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.QUEUE : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Başarıyla döngü modu **${queue.repeatMode === 0 ? 'Kapalı' : 'Açık'}** haline getirildi tüm sıra durmadan tekrar edilecek!` : `${message.author}, birşeyler yanlış gitti \`!support\` yazarak destek sunucumda bildirebilirmisin ?`);
        } else {
            if (queue.repeatMode === 2) return message.channel.send(`${message.author}, döngü modunda önce mevcut kuyruğu devre dışı bırakmalısınız!\n\nGereken Argüma: \`${client.config.px}loop queue\``);

            const success = queue.setRepeatMode(queue.repeatMode === 0 ? QueueRepeatMode.TRACK : QueueRepeatMode.OFF);

            return message.channel.send(success ? `Başarıyla döngü modu **${queue.repeatMode === 0 ? 'Kapalı' : 'Açık'}** haline getirildi mevcut müzik durmadan tekrarlanacak!` : `${message.author}, birşeyler yanlış gitti \`!support\` yazarak destek sunucumda bildirebilirmisin ?`);
        };
    },
};