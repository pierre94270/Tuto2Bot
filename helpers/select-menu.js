const { SelectMenuInteraction } = require('discord.js');

/** pour avoir autocomplétion
 *
 * @param {SelectMenuInteraction} interaction
 */

const handleSelectMenu = async (interaction) => {
	switch (interaction.customId) {
		case 'select-language':
			await interaction.update({
				content: `Tu as choisi ${interactionn.values[0]}`,
				components: [],
			});
			break;
		default:
			break;
	}
};

module.exports = handleSelectMenu;
