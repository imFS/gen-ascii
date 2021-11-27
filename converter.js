const { createCanvas, loadImage } = require("canvas");

/**
 * Converter.js
 * This module purpose is to convert a string/text to an binary formatted map.
 * The 'txt2Map' function takes the string/text input draws it as an image, and then goes over the pixels.
 * If an pixel has an alpha value above 0 its considered '1' otherwise '0'.
 * @darkSymbol takes the place of '1' while @lightSymbol takes the place '0'.
 *
 * Author: imFS (github.com/imFS)
 * Last update: 2021/11/27
 * License: MIT
 */

module.exports = {
  /**
   *
   * @param {*} txt Your text
   * @param {*} darkSymbol The symbol/emoji for '1'
   * @param {*} lightSymbol The symbol/emoji for '0'
   * @param {*} maxWidth TODO: Fix pixel iteration, only perfect squares work for now.
   * @param {*} maxHeight TODO: Fix pixel iteration, only perfect squares work for now.
   * @param {*} limitLines Allows to limit or skip lines, format: [row:flag]. The number in flag is the new length of the line, -1 skips the line.
   * @returns {string} Ready to c/p string.
   */
  txt2Map: function txt2Map(
    txt,
    darkSymbol,
    lightSymbol,
    maxWidth,
    maxHeight,
    limitLines
  ) {
    // Generate saturation/gamma map
    var r = "";

    const w = maxWidth;
    const h = maxHeight;

    const canvas = createCanvas(w, h);
    const ctx = canvas.getContext("2d");

    ctx.font = "8px Consolas";
    ctx.fillText(txt, 0, h / 2);

    let img = ctx.getImageData(0, 0, w, h);
    pixelLoop: for (let i = 0, p = 0; i < img.data.length; i += 4, p++) {
      //const r = img.data[i];
      //const g = img.data[i + 1];
      //const b = img.data[i + 2];
      const a = img.data[i + 3];
      const x = p % h;
      const y = (p - x) / h;
      let lw = w;

      for (l of limitLines) {
        if (l[0] == y) {
          if (l[1] == -1 || x >= l[1]) continue pixelLoop;
          else if (l[1] > 0) lw = l[1];
        }
      }

      //console.log(`Pixel: ${p} - x: ${x} | y: ${y} - `, r + g + b + a);

      let psymbol = lightSymbol;
      if (a > 0) {
        psymbol = darkSymbol;
      }

      if (x == lw - 1) {
        r += psymbol + "\n";
      } else r += psymbol;
    }

    return r;
  },
};
