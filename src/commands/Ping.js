const { Command } = require("discord-akairo");

export default class Ping extends Command {
  constructor() {
    super("ping", {
      aliases: ["ping"],
      category: "Misc",
    });
  }

  exec(message) {
    return message.channel.send("Pong!");
  }
}
