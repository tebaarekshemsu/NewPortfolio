This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Telegram Contact Form Setup

To make the contact form work, you need to set up a Telegram Bot:

1.  **Create a Bot**:
    *   Open Telegram and search for **@BotFather**.
    *   Send the command `/newbot`.
    *   Follow the instructions to name your bot.
    *   Once created, you will get a **token** (e.g., `123456789:ABCdefGHIjklMNOpqrsTUVwxyz`).

2.  **Get your Chat ID**:
    *   Search for **@userinfobot** on Telegram.
    *   Click "Start" or send any message.
    *   It will reply with your ID (e.g., `987654321`).

3.  **Configure Environment Variables**:
    *   Create a `.env.local` file in the root of the project.
    *   Add the following variables:

```env
TELEGRAM_BOT_TOKEN=your_bot_token_here
TELEGRAM_CHAT_ID=your_chat_id_here
```

4.  **Restart the Server**:
    *   After adding the `.env.local` file, restart your development server for the changes to take effect.
