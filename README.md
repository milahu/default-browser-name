# default-browser-name
node.js script to get name of default browser

## demo
```js
const dbn = require('default-browser-name');

console.log(dbn());
console.log(dbn({raw:1}));
```
sample result on linux
```
firefox
userapp-Firefox-PJ6A5Z.desktop
```
sample result on darwin (apple macos)
```
safari
com.apple.safari
```
sample result on windows 10
```
chrome
ChromeHTML
```
sample result on windows xp
```
launcher
C:\Program Files (x86)\Opera\launcher.exe
```

## install
in your node.js project
```bash
npm install https://github.com/milahu/default-browser-name.git
```

## related
[jakub-g/x-default-browser](https://github.com/jakub-g/x-default-browser) and
[sindresorhus/default-browser](https://github.com/sindresorhus/default-browser)  
do the same job in a [50 KB bundle](https://bundlephobia.com/result?p=default-browser@2.0.1), we only need 2.5 KB

## todo
* test with different platforms and browsers
* maybe remove `| findstr` in win32 code

## license

project license is [CC0-1.0](https://spdx.org/licenses/CC0-1.0.html)
