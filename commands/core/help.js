const { MessageEmbed, ClientUser } = require('discord.js');

module.exports = {
    name: 'help',
    aliases: ['h',"yardım","y"],
    showHelp: false,
    utilisation: '{prefix}help',

    execute(client, message, args) {
        const embed = new MessageEmbed();
        const config = require(`../../config.js`)

        embed.setColor('1e009a');
        
        embed.setDescription(`
        ${config.botlinks}
        
        **Music Command**

        \`!play\` - \`!stop\` - \`!back\` - \`!skip\` - \`!resume \` - \`!loop\` - \`!nowplaying\` - \`!pause\` - \`!progress\` - \`!queue\` - \`!save\` - \`!search\` - \`!clear\` - \`!filter\`

        **Premium** (the moment is free)

        \`bassboost\` - \`8D\` - \`nightcore\`

        **İnformation**

        \`!creatureinfo\` - \`!commandsinfo\`
        `);

        embed.setFooter(`${client.ws.ping}ms`, client.user.displayAvatarURL({ dynamic: true }));

        message.channel.send({ embeds: [embed] });
    },
};
