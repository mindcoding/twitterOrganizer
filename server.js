const Discord = require('discord.js');

const client = new Discord.Client();
const config = require('./config.json');

const token = config.token;

const twitChannelName = config.twitName;

const generalName = config.generalName;

const pcName = config.pcName;

const xboxName = config.xBoxName;

const waitTime = config.time;

client.on('message', message =>
{
    if(message.channel.name == twitChannelName)
    {
        if(message.content.toLowerCase().startsWith("pc players"))
        {
            // PC message
            message.guild.channels.find(val => val.name == pcName).send(message.guild.defaultRole + " " + message.content);

        }else if(message.content.toLowerCase().startsWith("xbox players"))
        {
            // xbox message
            message.guild.channels.find(val => val.name == xboxName).send(message.guild.defaultRole + " " + message.content);

        }else{
            // General message
            message.guild.channels.find(val => val.name == generalName).send(message.guild.defaultRole + " " + message.content);

        }
    }
});

client.login(token);
