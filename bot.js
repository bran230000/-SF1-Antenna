const Discord = require('discord.js');
const bot = new Discord.Client();

bot.on('message',(message) => {
 
    if(message.content == "*application") {
        message.reply("https://forms.gle/Mu5YmmayJLzVujcb8");
    }
  
  
  
 });

 bot.on('message',(message) => {
 
    if(message.content == "*unit") {
        message.reply("https://units.arma3.com/unit/skillforceone");
    }
  
  
  
 });
 

bot.login('process.env.BOT_TOKEN')
