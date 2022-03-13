const { MessageEmbed, ClientUser } = require('discord.js');
const { version: discordjsVersion } = require('discord.js');
const os = require('os');

module.exports = {
    name: 'creatureinfo',
    aliases: ['botinfo',"cinfo","infobot"],
    showHelp: false,
    utilisation: '{prefix}creatureinfo',

    execute(client, message, args) {

        var ut_sec = os.uptime();
        var ut_min = ut_sec/60;
        var ut_hour = ut_min/60;
        ut_sec = Math.floor(ut_sec);
        ut_min = Math.floor(ut_min);
        ut_hour = Math.floor(ut_hour);
          
        ut_hour = ut_hour%60;
        ut_min = ut_min%60;
        ut_sec = ut_sec%60;

        var süre = `${ut_hour}:${ut_min}:${ut_sec}`;
        var os_uptime = `${süre}`;

        const stopemoji = client.emojis.cache.get('949584058885767168');

        const members = client.guilds.cache.reduce((users , value) => users + value.memberCount, 0)

        const memory = (process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)

        const embed = new MessageEmbed();

        const config = require(`../../config.js`)

        embed.setColor('1e009a');
        
        embed.setDescription(`${config.botlinks}`)
        
        embed.addField(`Developer`,`\`\`\`fix\nLealven#0565\`\`\``,true)

        embed.addField(`Location`,`\`\`\`fix\nHollanda\`\`\``,true)
        
        embed.addField(`Version`,`\`\`\`fix\n${discordjsVersion}\`\`\``,true)
        
        embed.addField(`Node`,`\`\`\`fix\n${process.version}\`\`\``,true)
        
        embed.addField(`Platform`,`\`\`\`fix\n${process.platform}\`\`\``,true)
        
        embed.addField(`Arch`,`\`\`\`fix\n${process.arch}\`\`\``,true)

        embed.addField(`Memory`,`\`\`\`fix\n${memory} MB\`\`\``,true)
        
        embed.addField(`Uptime`,`\`\`\`fix\n${süre}\`\`\``,true)
        
        embed.addField(`Ping`,`\`\`\`fix\n${client.ws.ping}ms\`\`\``,true)

        embed.addField(`Servers`,`\`\`\`fix\n${client.guilds.cache.size}\`\`\``,true)

        embed.addField(`Users`,`\`\`\`fix\n${members}\`\`\``,true)

        embed.addField(`Commands`,`\`\`\`fix\n${client.commands.size}\`\`\``,true)

        embed.setFooter(`${client.ws.ping}ms`, client.user.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
