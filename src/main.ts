import { Client, LocalAuth } from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { SendMovieScript } from "./functions";

const client = new Client({
  authStrategy: new LocalAuth(),
});

client.on("ready", () => {
  console.log(`Client Ready as ${client.info.pushname}!`);
});

client.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
});

client.on("message_create", async (message) => {
  const chat = await message.getChat();

  if (message.body === "!Shrek") {
    await SendMovieScript(chat, "Shrek");
  }

  if (message.body === "!BeeMovie") {
    await SendMovieScript(chat, "BeeMovie");
  }
});

client.initialize();
