# FancyDiscord: Get Started
> Please be aware that documentation is a work in progress. If you noticed something is incorrect, feel free to contact via [Contacts page](/docs/contacts)

## About

**FancyDiscord** allows you to deploy without worrying about paying a relatively high price for vps hosting and configuring it. **Create App and press Deploy** - it should be exactly like that.

Service is currently free while it's in an alpha stage. Our resources are limited hence deployments *older than 4 hours* are automatically destroyed to clean up space for actively maintained bots and prevent abuse. 

**You can safely deploy your bot again if your deployment was destroyed.**  

#### Supported languages:
- JavaScript (Discord.js, Eris.js and others)
- Golang (discordgo)
- Python (discord.py)

#### General project requirements:
- Your project should be accessible via git repository (github, gitlab, bitbucket, etc)
- Repository should be public (working with private repos is in progress)
- You need a Bot token (You can get one on the [Discord Developer portal](https://discord.com/developers/applications))
- Your code should work :)
- If you are migrating from Heroku or similar service, please visit [Migrating from other services](/docs/migrating) page
- For language-specific project requirements and configuration please visit [Language-specific Requirements](/docs/language-specific-requirements) page

## Creating app
- [Sign In](/login) if you haven't yet.
- Visit [apps page](/apps)
- Press **Create app** button
- Fill necessary fields: 
  * Repo URL - your git repository URL, example: `https://github.com/myusername/myproject`
  * Bot token - token you have generated on the [Discord Developer portal](https://discord.com/developers/applications)
  * Project name - anything, visible only for you
  * Default branch - your main branch where you push your production code, probably `main` or `master`
  * Type - choose your preferred language. It cannot be changed later.
- Press **Submit**
- You're good! You will be redirected to [apps page](/apps) page. Press **Open** on a newly created app
- Press **Initialize app** and wait for it to complete (up to 10 minutes depending on available resources) and then you can deploy.

## Deploying your app
### Checks
- Make sure you have created and initialized your app successfully.
- If you are migrating from another hosting service, make sure you have configured your project following [Migrating from other services](/docs/migrating) page. If you just created your bot and want to deploy it, just proceed.
- Make sure you have `Procfile` with `web=%your_start_script%` or you have configured it following  [Language-specific Requirements](/docs/language-specific-requirements) page.
- Make sure you have removed `.buildpacks` file to avoid any compatibility errors
### Deploy process
- Press **Deploy** button
- Wait for it to complete (usually 5 minutes but may be up to 1 hour depending on available resources)
- Ensure your job finished with `Success` status
- Your bot should be online and working!
- If something is not right:
  * Visit our [Troubleshooting page](/docs/troubleshooting)
  * If your issue is not on the list or you think it's related to something else - free to contact via [Contacts page](/docs/contacts)
