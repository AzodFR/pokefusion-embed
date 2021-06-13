# pokefusion-embed

## About

Module for generating Discord's embed for 2 merged pokemon

## Installation

```sh-session
npm install pokefusion-embed
```

## usage

```js
const pfe = = require('pokefusion-embed');

pfe.gen();

pfe.genColor("Color");

```

Color = Any type of discord embed color (such as Blue, Black, etc...)

### Example
```js
const pfe = = require('pokefusion-embed')
const { MessageEmbed } = require("discord.js");

----

const embed = new MessageEmbed(pfe.gen());
message.channel.send(embed)

----

const embed = new MessageEmbed(pfe.genColor("BLUE"));
message.channel.send(embed)
```

![RED](https://i.imgur.com/7dKkyal.png)

![BLUE](https://i.imgur.com/VAzZ7W7.png)
