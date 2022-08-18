const { SlashCommandBuilder } = require('@discordjs/builders');
const { CommandInteraction } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('ping')
		.setDescription('Renvoie le nombre de ping'),

	/** pour avoir autocomplétion
	 *
	 * @param {CommandInteraction} interaction
	 */
	async execute(interaction) {
		await interaction.reply('Pong');

		//calcul du temps de reponse
		const message = await interaction.fetchReply();
		return interaction.editReply(
			`Le message a pris ${
				message.createdTimestamp - interaction.createdTimestamp
			} ms pour me parvenir et te revenir.\n Ton ping est de ${
				interaction.client.ws.ping
			} ms`
		);
	},
};
