require('dotenv').config()
const { Client, Embed } = require("@guildedjs/guilded.js");
const axios = require('axios');

const client = new Client();

client.on('ready', () => console.log(`Bot is successfully logged in`));

client.on("messageCreate", async message => {
    if(message.content.toLowerCase() === "bhelp") {
        const embed = new Embed()
            .setTitle('List príkazov lol')
            .setDescription('`help`, `meme`, `matelkovic`, `pes`, `macka`, `rolujto`')
            .setFooter('som banan bot cc')
        return message.channel.send(embed);
    }

    if(message.content.toLowerCase() === "bmeme") {
        var buff = (await axios({
            method: "GET",
            url: new URL("https://api.hyrousek.tk/images/meme").toString(),
            responseType: "json"
        })).data;

        const embed = new Embed()
            .setTitle(buff.title)
            .setImage(buff.url)
            .setURL(buff.link)
            .setFooter('Upvotes ' + buff.upvotes)
        return message.channel.send(embed);
    }

    if(message.content.toLowerCase() === "bmatelkovic") {
        var buff = (await axios({
            method: "GET",
            url: new URL("https://matelkoapi.slenkston.repl.co/selficko").toString(),
            responseType: "json"
        })).data;

        const embed = new Embed()
            .setImage(buff.selficko)
        return message.channel.send(embed);
    }

    if(message.content.toLowerCase() === "bpes") {
        var buff = (await axios({
            method: "GET",
            url: new URL("https://api.hyrousek.tk/useless/reddit?reddit=puppy").toString(),
            responseType: "json"
        })).data;

        const embed = new Embed()
            .setTitle(buff.title)
            .setImage(buff.url)
            .setURL(buff.link)
            .setFooter('Upvotes ' + buff.upvotes)
        return message.channel.send(embed);
    }

    if(message.content.toLowerCase() === "bmacka") {
        var buff = (await axios({
            method: "GET",
            url: new URL("https://api.hyrousek.tk/useless/reddit?reddit=kitty").toString(),
            responseType: "json"
        })).data;

        const embed = new Embed()
            .setTitle(buff.title)
            .setImage(buff.url)
            .setURL(buff.link)
            .setFooter('Upvotes ' + buff.upvotes)
        return message.channel.send(embed);
    }

    if(message.content.toLowerCase() === 'brolujto') {
        let slots = ["🍋", "🍌", "🍒", "🍓", "🍈", "🍑"];
        let result1 = Math.floor((Math.random() * slots.length));
        let result2 = Math.floor((Math.random() * slots.length));
        let result3 = Math.floor((Math.random() * slots.length));

        if (slots[result1] === slots[result2] && slots[result2] === slots[result3]) {
            let wEmbed = new Embed()
                .addField('Vyhral si. fraer!', slots[result1] + slots[result2] + slots[result3], true)
            message.channel.send(wEmbed)
        } else {
            let embed = new Embed()
                .addField('prehral si ty jebo', slots[result1] + slots[result2] + slots[result3], true)
            message.channel.send(embed)
        }
    }})

client.login({
    email: process.env.email,
    password: process.env.pass
});