module.exports = async (client) => {
    console.log(`Başarıyla ${client.user.tag} isimli hesapla giriş yapıldı!`);

    client.user.setStatus(`online`);
    client.user.setActivity(`!help`, { type: "LISTENING" });
};