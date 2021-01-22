# FancyDiscord: Language-specific requirements

## JavaScript
- Make sure you have a working `start` script in your package.json **OR** you can have Procfile configuration.

**JavaScript `Procfile` example (assuming your entry file is `index.js`)**:
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

**Python3 `Procfile` example (assuming your entry file is `bot.py`)**:
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



## Golang
- Go 1.12+ recommended although may work on lower versions
- You don't have to create Procfile configuration if you are not building something custom
- But if something fails and you feel you need one, here is an example

**Golang `Procfile` example (assuming your module name is `sample_go_bot`)**:
```go
web: bin/sample_go_bot
```
- Make sure you use an Environment Variable BOT_TOKEN in your app for your Bot token

**Golang example using environment variable BOT_TOKEN and discordgo**:
```go
package main

import (
	"fmt"
	"os"
	"os/signal"
	"syscall"

	"github.com/bwmarrin/discordgo"
)

func main() {

    // Please notice that we use BOT_TOKEN variable, 
    // you need exactly that variable name
	dg, err := discordgo.New("Bot " + os.Getenv("BOT_TOKEN"))

    // YOUR CODE
}
```
- That should be all for Go. Happy coding! If you have any issues, visit [Troubleshooting page](/docs/troubleshooting) 

