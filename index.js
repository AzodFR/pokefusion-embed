const { MessageEmbed } = require("discord.js");

module.exports = {
  gen: function () {
    const a = getRandomInt(152);
    const b = getRandomInt(152);
    const embed = new MessageEmbed()
      .setImage(
        `https://images.alexonsager.net/pokemon/fused/${a}/${a}.${b}.png`
      )
      .setColor("RED");
    return embed;
  },

  genColor: function (color) {
    const a = getRandomInt(152);
    const b = getRandomInt(152);
    const embed = new MessageEmbed()
      .setImage(
        `https://images.alexonsager.net/pokemon/fused/${a}/${a}.${b}.png`
      )
      .setColor(color);
    return embed;
  },
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}
