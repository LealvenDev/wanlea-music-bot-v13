module.exports = {
    name: 'pause',
    aliases: ["dur"],
    utilisation: '{prefix}pause',
    voiceChannel: true,

    execute(client, message) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        const success = queue.setPaused(true);

        return message.channel.send(success ? `**${queue.current.title}** isimli müzik durduruldu!` : `${message.author}, birşeyler yanlış gitti \`!support\` yazarak destek sunucumda bildirebilirmisin ?`);
    },
};