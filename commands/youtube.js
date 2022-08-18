const { SlashCommandBuilder } = require('@discordjs/builders');
//const {isMessageComponentButtonInteraction} = require('discord-api-types/utils/v9');
const {
	CommandInteraction,
	MessageActionRow,
	MessageButton,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('youtube')
		.setDescription('Donne le lien du tuto correspondant à la création'),

	/** pour avoir autocomplétion
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		const row = new MessageActionRow().addComponents(
			new MessageButton()
				.setLabel('Youtube')
				.setStyle('LINK')
				.setURL('https://www.youtube.com/watch?v=7gWsGFJKCGc')
		);
		await interaction.reply({
			content: 'Clique sur le boutton ci-dessous pour voir le tuto',
			components: [row],
		});
	},
};
