const Discord = require('discord.js')
const bot = new Discord.Client()

//instance
bot.on('ready', function () {
	bot.user.setActivity('!help', { type: 'WATCHING' }).catch(console.error)
})

bot.on('message', function (message) {
	if (message.content === '!help') {
		let tEmbed = new Discord.MessageEmbed()
			.setDescription('Commandes Disponibles')
			.setColor('#E8351D')
			.addField('!...', '!...')
			.setFooter('Owned™')
		message.channel.send(tEmbed)
	}

})



bot.login(process.env.TOKEN)

