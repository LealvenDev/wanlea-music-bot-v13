module.exports = {
    name: 'filter',
    aliases: ["filtre"],
    utilisation: '{prefix}filter [filter name]',
    voiceChannel: true,

    async execute(client, message, args) {

        
        const queue = player.getQueue(message.guild.id);

        if (!queue || !queue.playing) return message.channel.send(`${message.author}, şuanda çalan bir müzik yok!`);

        const actualFilter = queue.getFiltersEnabled()[0];

        if (!args[0]) return message.channel.send(`Komutu yanlış kullandınız, doğru bir şekilde kullanabilmeniz için argümanları paylaşıyorum!\n\nDoğru Kullanım: \`!filter [bassboost/8D/nightcore]\``);

        const filters = [];
        queue.getFiltersEnabled().map(x => filters.push(x));
        queue.getFiltersDisabled().map(x => filters.push(x));

        const filter = filters.find((x) => x.toLowerCase() === args[0].toLowerCase());
        //${queue.getFiltersEnabled().includes(filter) ? 'Aktif' : 'Aktif Değil'}
        if (!filter) return message.channel.send(`${message.author}, yazdığın isimde bir filtre bulamadım!`);

        const filtersUpdated = {};

        filtersUpdated[filter] = queue.getFiltersEnabled().includes(filter) ? false : true;

        await queue.setFilters(filtersUpdated);

        message.channel.send(`Başarıyla **${filter}** isimli filtre uygulandı!`);
    },
};