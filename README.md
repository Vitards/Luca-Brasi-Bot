# Luca Brasi Bot

This is the admin bot code for the [/r/Vitards](https://reddit.com/r/vitards) subreddit.

## Installation

```bash
# Clone the repo:
git clone git@github.com:Vitards/Luca-Brasi-Bot.git

# Change to the directory
cd Luca-Brasi-Bot

# Install npm dependencies
npm install
```

## `.env` File

Secrets are stored in a `.env` file which is not tracked in git. In order for this to work, you will need to create this file in the root directory with the following content:

```
CLIENT_ID=[APP_CLIENT_ID]
CLIENT_SECRET=[APP_CLIENT_SECRET]
USERNAME=[REDDIT_USERNAME]
PASSWORD=[REDDIT_USER_PASSWORD]
```

You can copy the `.env.example` file to `.env` and change the values to the appropriate ones:

```bash
cp .env.example .env
```

## Prettier Setup

This project uses `prettier` for code formatting. Please be sure to install the prettier plugin for your editor, and be sure to have `Format on Save` enabled. Alternatively, you can run `npm run prettier:write` to format all project files.

- VSCode - https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode
- WebStorm - https://plugins.jetbrains.com/plugin/10456-prettier

## CircleCI

This project uses CircleCI as its CI platform. The config file is located in `.circleci/config.yml`. It will check that all files are formatted with prettier and will run the tests.
