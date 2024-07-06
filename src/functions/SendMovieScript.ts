import { Message, type Chat } from "whatsapp-web.js";
import fs from "node:fs";
import path from "node:path";
import { setTimeout } from "node:timers/promises";
import { DelayBetweenMessages, progressBar } from "./";

export type Movies = "Shrek" | "BeeMovie";

export async function SendMovieScript(
  chat: Chat,
  movie: Movies
): Promise<void> {
  const file = fs.readFileSync(
    path.join(process.cwd(), `src/assets/${movie}.txt`),
    {
      encoding: "utf-8",
    }
  );

  const lines = file
    .split(/[\n\t]+/)
    .map((line) => line.trim())
    .filter((line) => line);

  const bar = progressBar.create(lines.length, 0);
  bar.update({ movie, chat: (await chat.getContact()).name });

  const messages: Message[] = [];

  for (const line of lines) {
    await setTimeout(DelayBetweenMessages);
    bar.increment();
    const message = await chat.sendMessage(line);
    messages.push(message);
  }

  for (const message of messages) {
    await setTimeout(DelayBetweenMessages);
    message.delete();
  }
}
