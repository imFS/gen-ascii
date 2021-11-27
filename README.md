# Emoji wall gen
Random fun project from js beginner

### How does it work?
Draws the given text on a canvas to generate an image, then it iterates through the pixels and decides which symbol should be added to the generated string.
Text is in black and background is transparent, the decision if '1' or '0' is decided by the 'alpha' value of the pixel. Anything larger then zero is '1' and zero is '0'.
'1' represents the 'darkSymbol' 
'0' represents the 'lightSymbol'

### How to use
lol.js contains an example which calls the main function which does the work, demo.js calls the function defined in lol.js.
lol.js does apply some rules for league lobby chat, which results in string that can be copy/pasted and fits in the lobby chat of league.
The 'lolascii' function of lol.js takes 3 arguments; String, darkSymbol, lightSymbol.
The 'txt2Map' function of converter.js takes 6 arguments; String, darkSymbol, lightSymbol, w, h, lineFlags
w and h should always be equal/represent a square the reason for this is me not fixing the iteration loop.
The lineFlags parameter is simply an array which containes 2d arrays per line. 
2D array definition: [line, flag] if flag is -1 it skips the line otherwise it overwrites the width of the line.

## Issues
- Fix pixel iteration loop logic so it does not only work with squares
- Code cleanup, better notation/arg names.
