var converter = require("./converter");

// League champ select, first msg line: 👀👀👀👀👀👀👀👀👀👀👀 (11)
// League champ select, emoji limit per line after first line: 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀 (16)
//👀🍉🍉🍉🍉👀👀👀👀🍉👀👀👀👀👀👀

// Champ select limits:
// First line truncated to 11chars
// Total allowed lines 6
// Total allowed char count: 6*16 ?
// Can't leave first line empty so but every char in first line reduces also the max width of the last line. Put an '0' character in first line.

module.exports = {
  lolascii: function leagueAscii(str, symbols) {
    r = converter.txt2Map(str, symbols[0], symbols[1], 16, 16, [
      [0, 1], // Limit line 0 to 1 width
      [1, -1], // Skip line 1
      [8, -1], // ...
      [9, -1],
      [10, -1],
      [11, -1],
      [12, -1],
      [13, -1],
      [14, -1],
      [15, -1],
    ]); // Limits line 0 to 11chars, and skips line 1,8~15
    console.log(r);
  },
};
