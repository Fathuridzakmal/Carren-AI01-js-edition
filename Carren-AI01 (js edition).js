//start


//what we need :
//node.js
//discord.js 
//type "npm install discord.js" to install discord.js
 



//variables

const Discord = require('discord.js');

const client = new Discord.Client();

const prefix = ','; 
const fs = require('fs');

client.commands = new Discord.Collection();
client.event = new Discord.Collection();

['command_handler', 'event_handler'].forEach(handler =>{
    require(`./handLers/${handler}`)(client, Discord);
})

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));
for(const file of commandFiles){
    const command = require(`./commands/${file}`)

    client.commands.set(command.name, command);
}



//when bot ready print "Bot status : Online!"

client.once('ready', () => {
    console.log('Bot status : Online!');
});



//response message
client.on('message', message =>{
    if(message.content.startsWith(prefix) || message.author.bot) return;
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    //response command "-ping"
    if(command === 'ping') {
        message.channel.send(`Ping ${Date.now() - message.createdTimestamp}ms, API Latency is ${Math.round(client.ws.ping)}ms`);
    }

    //response command "-introduction"
    if(command === 'introduction') {
        message.channel.send('Hi! My Name is Carren-AI01 (js edition) I Created By Fathuridzakmal Using Javascript Programming Language ');
    }

    //response command "-jokes"
    if(command === 'jokes') {
        const Responses = [
           "sorong papan tarik papan, buah keranji dalam perahu, suruh ngeW dia gaskan, suruh tanggung jawab dia tak mau",
           "A Christian, a Jew, a Muslim, an atheist, and a Pagan all walk into a Starbucks, And they chat,enjoy coffe, laugh, become friends, and have a wonderful time. This isn't a joke,btw.it's just what happens when you're not a dickhead",
           "What are Atheist? A non-prophet organization",
           "Why can't atheist use exponents?, Because they don't believe in higher powers",
           "*A priest, an atheist,and a rabbit walk into a blood donor tent, The rabbit says 'I might be a type O'",
           
            `me : ok i will taubat and not do that's again
           satan : im a joke to you?`,
        ];
        
        const Response = Math.floor(Math.random() * Responses.length);
        
        message.channel.send(Responses[Response])
    
    }
    //response command"-clear"
    if(command === 'clear') {
        
        client.commands.get('clear').execute(message, args);
        
    }
    //response command "kick"
    if(command === 'kick'){
        client.commands.get('kick').execute(message, args);
    }
    //response commadn "ban"
    if(command === 'ban'){
        client.commands.get('ban').execute(message, args);
    
    }
    //response command "help_commands"
    if(command === 'help_commands'){
        message.channel.send(`commands : 
        ping : to see ur ping
        clear : to clear 1-100 chat
        kick : to kick member
        ban : to ban member
        jokes : i hope u enjoyed the joke❤
        introduction : introductions who is Carren-AI01 (js edition)
        help_commands : to see this commands
        mute : to mute member
        unmute : to unmute member

        note : You can use symbol | '!' | '-' | '.' | '?' | '~' | '+' | | '_' |for prefix

        example :
        |.(commands) | !(commands) | +(commands) | -commands | ~(commands) | ?(commands) | _(commands) |
        clear 1-100
        ban @member
        kick @member
        mute @member
        unmute @member
        `)
    }
    //response command "mute"
    if(command === 'mute'){
        client.commands.get('mute').execute(message, args);
    }
    //response command "unmute"
    if(command === 'unmute'){
        client.commands.get('unmute').execute(message, args);
    }
    //response commadn "meme"
    if(command === 'meme'){
        client.commands.get('meme').execute(message, args);
    }
        
    

});

















//this token is secret, make sure you not share to anyone
//to get this token go to https://discord.com/developers/

const TOKEN = 'ODI3NTc3MjU2MzEwMDc5NDk5.YGdDYQ.gYucOB3ETJfHftWnIDAuYzrahE0';






//this token is secret
client.login(TOKEN);




