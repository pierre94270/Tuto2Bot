const { SlashCommandBuilder } = require('@discordjs/builders');
const {
	CommandInteraction,
	MessageActionRow,
	MessageSelectMenu,
} = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('langage')
		.setDescription('Choisir ton langage de prédilection'),

	/** pour avoir autocomplétion
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		const row = new MessageActionRow().addComponents(
			new MessageSelectMenu()
				.setCustomId('select-langage')
				.setPlaceholder('Selectionne ton langage favori')
				.addOptions([
					{
						label: 'C#',
						description: 'Développeur .NET',
						value: 'C SHARP',
					},
					{
						label: 'JavaScript',
						description: 'Développeur WEB',
						value: 'JavaScript',
					},
				])
		);
		return interaction.reply({
			content: 'Quel est ton langage de programmation de prédilection ? ',
			components: [row],
		});
	},
};
