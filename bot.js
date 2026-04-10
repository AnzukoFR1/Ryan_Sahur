const { Client, GatewayIntentBits } = require("discord.js");

const TOKEN = process.env.DISCORD_TOKEN;
const TARGET_USER_ID = "1260404500964048938";

const INSULTES = [
  "tg",
  "ftg",
  "t'es con",
  "la ferme",
  "t'es nul",
  "casse-toi",
  "t'es bête ou quoi",
  "vas te coucher",
  "t'as rien à dire",
  "personne t'a demandé",
  "t'es vraiment lourd",
  "tu sers à rien",
  "t'es une catastrophe",
  "ferme ta bouche",
  "t'es ridicule",
  "dégage",
  "t'es pathétique",
  "arrête de parler",
  "t'es insupportable",
  "t'as pas honte",
  "t'es chiant",
  "la paix",
  "t'es naze",
  "tu m'énerves",
  "t'es vraiment con",
  "va te cacher",
  "t'es inutile",
  "quel boulet",
  "t'as l'air bête",
  "t'es une honte",
  "tais-toi",
  "t'es lourd à mourir",
  "t'es pénible",
  "quel idiot",
  "t'as pas de cerveau",
  "t'es vraiment nul",
  "personne t'aime",
  "t'es un boulet",
  "arrête de respirer mon air",
  "t'es trop bête",
  "quelle nullité",
  "t'es agaçant",
  "va jouer ailleurs",
  "t'es lamentable",
  "t'es une erreur",
  "la honte de la famille",
  "t'es vraiment pénible",
  "t'as rien compris",
  "t'es une déception",
  "franchement t'es con",
];

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});

client.once("ready", () => {
  console.log(`Bot connecté : ${client.user.tag}`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) return;
  if (message.author.id === TARGET_USER_ID) {
    const insulte = INSULTES[Math.floor(Math.random() * INSULTES.length)];
    message.channel.send(insulte);
  }
});

client.login(TOKEN);
