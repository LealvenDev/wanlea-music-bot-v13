const maxVol = client.config.opt.maxVol;

module.exports = {
    name: 'volume',
    aliases: ['ses'],
    utilisation: `{prefix}volume [1-${maxVol}]`,
    voiceChannel: true,

    execute(client, message, args) {
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        const vol = parseInt(args[0]);

        if (!vol) return message.channel.send(`Komutu yanlış kullandınız, doğru bir şekilde kullanabilmeniz için argümanları paylaşıyorum!\n\nDoğru Kullanım: \`!volume [1/${maxVol}]\`\n\nMevcut Seviye: **%${queue.volume}**`);

        if (queue.volume === vol) return message.channel.send(`${message.author}, değiştirmek istediğiniz ses düzeyi zaten geçerli olan ses düzeyidir!`);

        if (vol < 0 || vol > maxVol) return message.channel.send(`${message.author}, belirttiğiniz ses seviyesi maximum **(${maxVol})** ses seviyesini geçmektedir!`);

        const success = queue.setVolume(vol);

        return message.channel.send(success ? `Başarıyla ses seviyesi ayarlandı!\n\nAyarlanan Seviye: **%${vol}**` : `${message.author}, birşeyler yanlış gitti \`!support\` yazarak destek sunucumda bildirebilirmisin ?`);
    },
};