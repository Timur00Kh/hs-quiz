import { Telegraf, type Context as TelegrafContext } from "telegraf";
import { NextResponse, NextRequest } from "next/server";

const bot = new Telegraf(process.env.BOT_TOKEN!);

export async function handleOnMessage(ctx: TelegrafContext) {
  const { message } = ctx;

  if (!message) return;

  const isGroup =
    message?.chat.type === "group" || message?.chat.type === "supergroup";

  if (isGroup) {
    await ctx.reply("This bot is only available in private chats.");
    return;
  }

  const telegramUsername = message?.from?.username;
  const reply = "a message was sent";

  await ctx.reply(reply);
}

bot.on("message", async (ctx) => {
  await handleOnMessage(ctx);
});

export async function POST(request: NextRequest) {
  await bot.handleUpdate(await request.json());
  return new NextResponse();
}

export async function GET(request: Request) {
  const hook = `${request.headers.get("host")}/telegram-hook`;

  await bot.telegram.setWebhook(hook);
  return NextResponse.json("telegram-hook is set to: " + hook);
}
