# Project Description

# Tools

## Webassembly / emscripten

- Signal processing code is written in C
- The C code is then translated to Webassembly with the help of emsctipten

> download: https://emscripten.org/docs/getting_started/downloads.html

> getting started: https://developer.mozilla.org/en-US/docs/WebAssembly/C_to_wasm

> cwarp syntax for easy c-function calls: https://emscripten.org/docs/porting/connecting_cpp_and_javascript/Interacting-with-code.html

Example:

> \> emcc processing/functions.c -o processing/functions.js -O3 -s WASM=1 -s "EXTRA_EXPORTED_RUNTIME_METHODS=['cwarp']"
>
> -> include functions.js
>
> -> make sure the wasm file is loaded before you try to use the funtions (cp. processing/wasm_helper.js and io/microphone_process.js)

## p5.js

- p5.js is a beginner friendly JavaScript library for ceative coding
- p5.js can be included via a content delivery networt (cdn) (cp. index.html)

> alternatively it can be downloaded: https://p5js.org/download/

> getting started: https://p5js.org/learn/

## Visual studio code

You can use any editor you like but vscode has a "live server" extension that enables you to test the web application locally.

> download vscode at: https://code.visualstudio.com/Download
>
> or compile it yourself without windows telemetry: https://vscodium.com/
>
> get the "live server" extension https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer

In order to get access to the microphone over the browser the site needs to support https. This means we will have to generate key and a certificate.

> Follow these instructions: https://gist.github.com/prof3ssorSt3v3/edb2632a362b3731274cfab84e9973f9
>
> You can get openssl via cygwin. Just follow these instructions: https://stackoverflow.com/a/62982416
