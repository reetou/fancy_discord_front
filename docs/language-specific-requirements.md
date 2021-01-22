# FancyDiscord: Language-specific requirements

## JavaScript
- Make sure you have a working `start` script in your package.json **OR** you can have Procfile configuration.

**JavaScript Procfile example (assuming your entry file is `index.js`)**:
```js
web: node index.js
```
- Make sure you use an Environment Variable BOT_TOKEN in your app for your Bot token

**JavaScript example using environment variable BOT_TOKEN and Discord.js**:
```js
const Discord = require('discord.js');
const client = new Discord.Client();

// YOUR CODE HERE

// Please notice that we use BOT_TOKEN variable, 
// you need exactly that variable name
client.login(process.env.BOT_TOKEN);
```
- That should be all for JS. Happy coding! If you have any issues, visit [Troubleshooting page](/docs/troubleshooting) 



## Python
- Python 3 VERY recommended
- Make sure you have Procfile configuration.

**Python3 Procfile example (assuming your entry file is `bot.py`)**:
```python
web: python3 bot.py
```
- Make sure you use an Environment Variable BOT_TOKEN in your app for your Bot token

**Python3 example using environment variable BOT_TOKEN and discord.py**:
```python
import discord
import os

client = discord.Client()

// YOUR CODE HERE

// Please notice that we use BOT_TOKEN variable, 
// you need exactly that variable name

client.run(os.environ['BOT_TOKEN'])
```
- That should be all for Python. Happy coding! If you have any issues, visit [Troubleshooting page](/docs/troubleshooting) 

