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
        client.setTimeout(function() {
            if(message.content.toLowerCase().split(' ')[5].startsWith("pc players"))
            {
                // PC message
                message.guild.channels.find(val => val.name == pcName).send(message.guild.defaultRole + " " + message.content.split(' ')[5]);
            }else if(message.content.toLowerCase().split(' ')[5].startsWith("xbox players"))
            {
            // xbox message
                message.guild.channels.find(val => val.name == xboxName).send(message.guild.defaultRole + " " + message.content.split(' ')[5]);

            }else{
            // General message
                message.guild.channels.find(val => val.name == generalName).send(message.guild.defaultRole + " " + message.content.split(' ')[5]);
            }
        }, waitTime);
    }
});

client.login(token);
