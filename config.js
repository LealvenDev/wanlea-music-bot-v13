module.exports = {
        px: '!',
        token: `BOTTOKEN`,
        creatureowner: "SAHİPID",
        botlinks: "[Add](https://discord.com/api/oauth2/authorize?client_id=774761103456206848&permissions=8&scope=applications.commands%20bot)・[Support](https://discord.gg/GjrKm3ue2Q)・V̶o̶t̶e̶",

    opt: {
        DJ: {
            enabled: false, //EĞER SADECE DJLER KULLANA BİLSİN İSTİYOR İSENİZ false yazanı true yapın.
            roleName: 'DJ', //DJ ROLÜNÜN İSMİ NE OLACAK İSE YAZIN SUNUCUNUZDA O ROLDEKİLER KULLANA BİLİR
            commands: ['back', 'clear', 'filter', 'loop', 'pause', 'resume', 'skip', 'stop', 'volume'] //DOKUNMA
        },
        maxVol: 250, //maximum ses seviyesi kaç olacak belirte bilirsiniz.
        loopMessage: false, //elleme
        discordPlayer: {
            ytdlOptions: {
                quality: 'highestaudio', //elleme
                highWaterMark: 1 << 25 //elleme
            }
        }
    }
};
