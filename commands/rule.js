const components = require('../components/export');

async function rule(interaction) {
    switch (interaction.options.getString("rule")) {
        case "rule1":
            return interaction.reply(components.rule(
                "component", 16756224
            )
            );
        case "rule2":
            return interaction.reply(components.container(
                        '# 📖 🏴‍☠️ | RULE 5.03. - __"POST NOT OF YOUR OWN."__\n__Under **no** circumstances will AI GENERATED material (e.g. Viggle Memes) or AI \'ART\' showcases be tolerated in this community.__\n-# (See https://discord.com/channels/1140996822131802192/1371246052648161312/1486148821770698854 for the full rule).',
                        16756224
                        ));
        case "rule3":
            return interaction.reply(components.container(
                        '# 📖 🏴‍☠️ | RULE 67.03. - __"NO NERD TALK."__\n__Under **no** circumstances will NERD GENERATED material be tolerated in this community.__\n-# (source: trust me bro).',
                        16756224
                        ));
        default:
            return interaction.reply("This rule is unavailable at the moment.");
        
    }
    
}

module.exports = rule;