module.exports = {
    name: 'support',
    aliases: ["supportserver","spserver"],
    utilisation: '{prefix}support',

    execute(client, message,) {

    message.channel.send(`Merhaba! değerli kullanıcı komutlarda hata görürsen veya yardımcı olmamız gereken konular için destek sunucumuza gelebilirsin!\n\nSupport Server: https://discord.gg/GjrKm3ue2Q`);
    },
};