require("dotenv").config();
const { AkairoClient, CommandHandler, InhibitorHandler, ListenerHandler } = require('discord-akairo');

class Client extends AkairoClient {

  constructor() {
    super({
      ownerID: process.env.OWNER_ID
    }, {
      // Options for discord.js goes here.
    });

    this.commandHandler = new CommandHandler(this, {
      directory: './src/commands/',
      prefix: '!'
    });

    this.inhibitorHandler = new InhibitorHandler(this, {
      directory: './src/inhibitors/'
  });

    this.listenerHandler = new ListenerHandler(this, {
        directory: './src/listeners/'
    });

    this.listenerHandler.setEmitters({
      commandHandler: this.commandHandler,
      inhibitorHandler: this.inhibitorHandler,
      listenerHandler: this.listenerHandler
    });

    this.commandHandler.loadAll();

    this.commandHandler.useInhibitorHandler(this.inhibitorHandler);
    this.inhibitorHandler.loadAll();  

    this.commandHandler.useListenerHandler(this.listenerHandler);
    this.listenerHandler.loadAll();
  }
}

const client = new Client();
client.login(process.env.DISCORD_TOKEN);