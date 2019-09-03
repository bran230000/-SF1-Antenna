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
 

bot.login('NjE3ODY0NjYzNTA1NTY3NzQ1.XW2oFQ.rHhQamEoUQ_Lk73oKEyWitUKn1w')
