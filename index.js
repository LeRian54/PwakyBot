const Discord = require("discord.js");
const { Server } = require("http");

const Client = new Discord.Client;

const prefix = "P/";

Client.on("ready", () => {
    console.log("bot opérationel");
});

Client.on("guildMemberAdd", member => {
    console.log( member.displayName + " est arrivé sur le serveur");
    member.guild.channels.cache.find(channel => channel.id === "532535409780064256").send(":tada: Bienvenue " + "**" + member.displayName + "**" + " amuse toi bien sur le serveur :video_game:");
})

Client.on("message", message => {
    if(message.author.bot) return;
    if(message.channel.type == "dm") return;

    if(message.member.hasPermission("ADMINISTRATOR")){
        if(message.content.startsWith(prefix + "ban")){
            let mention = message.mentions.members.first();
            if(mention == undefined){
                message.reply("Le membre est non ou mal mentionné")
            }
            else {
                if(mention.bannable){
                    mention.ban();
                    message.channel.send("**" + mention.displayName + "**" + " c'est bien fait ban, enfain tranquille :grin: ");
                    
                 }
                 else{
                    message.reply("Désolé mais je peux pas ban cette personne");
                 }
            }
        }
        else if(message.content.startsWith(prefix + "kick")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre est non ou mal mentionné");
            }
            else {
                if(mention.kickable){
                    mention.kick();
                    message.channel.send("**" + mention.displayName + "**" + " a bien été kick, bien fait pour sa poire :hugging: ");
                }
                else {
                    message.reply("Je ne peux pas kick cette personne");
                }
            }
        }
            
        else if(message.content.startsWith(prefix + "mute")){
            let mention = message.mentions.members.first();

            if(mention == undefined){
                message.reply("Le membre est non ou mal mentionné");
            }
            else {
                mention.roles.add("838374169610682408");
                message.channel.send("Chut! :shushing_face: " + "**" + mention.displayName + "**" + ", on veut plus t'entendre");
            }
            
        }
        
            
    }
   
   Client.on("message", message => {
       if(message.member.permissions.has("MANAGE_ROLES"))
   })
   
   
    if(message.content == "Salut Pwaky"){
        message.channel.send("Salut " + "**" + message.author.username + "**");
    }
    if(message.content == "ça va Pwaky ?"){
        message.channel.send("Très bien et toi " + "**" + message.author.username + "**" + " ?" );
    }
    if(message.content == "Pwaky que penses tu de Léo ?"){
        message.channel.send("C'est quelqu'un de bien et il est gentil et sympathique ");
    }
    if(message.content == "test"){
        message.channel.send("Je suis bien la");
    }
    if(message.content == "Alice est la meilleure"){
        message.channel.send("Je confirme Totalement ce que tu dis " + "**" + message.author.username + "**");
    }
    if(message.content == "Pwaky qui est ton créateur ?"){
        message.channel.send("Mon Créateur est LeRian (pov : c'est un bg pas comme cette pute d'Alexis)");
    }
    if(message.content == "Pwaky ton créateur est bg ?"){
        message.channel.send("Bien entendu qu'il est bg");
    }
    if(message.content == "haut haut bas bas gauche droite gauche droite B A start"){
        message.channel.send("**Mode Super Etoile Activé** :sparkles:");
    }
});



Client.login("Nzc5MDI0OTE3MDYwMTI0Njky.X7ahfQ.du0AKA8zqTNZ58Gdv-sHbqQs8CA");