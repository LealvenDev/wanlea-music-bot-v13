player.on('error', (queue, error) => {
    console.log(`Şarkı kuyruğu ile ilgili bir sorun oluştu! \n\nOluşan Hata: \`${error.message}\``);
});

player.on('connectionError', (queue, error) => {
    console.log(`Bağlanma sorunu yaşıyorum! \n\nOluşan Hata: \`${error.message}\``);
});

player.on('trackStart', (queue, track) => {
    if (!client.config.opt.loopMessage && queue.repeatMode !== 0) return;
    queue.metadata.send(`Başarıyla **${track.title}** isimli müzik <#${queue.connection.channel.id}> kanalında çalmaya başladı!`);
});

player.on('trackAdd', (queue, track) => {
    queue.metadata.send(`**${track.title}** isimli şarkı çalma listesine eklendi!`);
});

player.on('botDisconnect', (queue) => {
    queue.metadata.send('Bağlı olduğum ses kanalından birisi beni attı, bütün çalma listesi temizlendi!');
});

player.on('channelEmpty', (queue) => {
    queue.metadata.send('Bulunduğum sesli kanalda kimse olmadığı için ses kanalından ayrıldım!');
});

player.on('queueEnd', (queue) => {
    queue.metadata.send('Bütün eklenen ve çalınan müzik listesi bitti!');
});