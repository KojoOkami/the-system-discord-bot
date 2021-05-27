const { Command } = require("discord-akairo");

export default class Pong extends Command {
  constructor() {
    super("pong", {
      aliases: ["pong"],
      category: "Misc",
    });
  }

  exec(message) {
    if (message.author.id == process.env.LAV_ID) {
      return message.channel.send(`${message.author}`);
    }
  }
}
