# Notificator

### Node.js CLI task system notification tool

![Notificator](https://i.imgur.com/SyBz6S7.png)
![Notificator](https://i.imgur.com/vVkEqWs.png)

---

### Tech
Notificator uses several open source projects to work properly and for tests:

* [Node.js] - JavaScript runtime built on Chrome's V8 JavaScript engine
* [node-notifier] - A Node.js module for sending notifications on native Mac, Windows and Linux
* [prompt] - A beautiful command-line prompt for node.js
* [opn] - A better node-open. Opens stuff like websites, files, executables. Cross-platform

---

### Requirements

* Tested successfully on [Node.js](https://nodejs.org/) v6.9+
* Before the work initialize tasks.json with empty JS object (if it is not): {}
---

### Installation

* Download and extract the [latest version of Notificator](https://github.com/paratagas/notificator)
* Install all dependencies:
```sh
$ cd notificator
$ npm install
```

---

### Launching task watcher
```sh
$ npm start
```

---

### Adding task

```sh
$ npm run add
```

---

### Settings

App settings can be changed in "settings.js"

---

### Useful information on this topic

* [davidwalsh] - node-notifier API
* [paralint] - About Windows notification util: notifu
* [nodejitsu] - How Node.js prompt works
* [stackoverflow] - About time formatting using regex
---

### License

MIT

 [Node.js]: <https://nodejs.org/>
 [node-notifier]: <https://github.com/mikaelbr/node-notifier>
 [prompt]: <https://www.npmjs.com/package/prompt>
 [opn]: <https://www.npmjs.com/package/opn>
 
 [davidwalsh]: <https://davidwalsh.name/system-notifications-node>
 [paralint]: <http://www.paralint.com/projects/notifu/>
 [nodejitsu]: <https://docs.nodejitsu.com/articles/command-line/how-to-prompt-for-command-line-input/>
 [stackoverflow]: <https://stackoverflow.com/questions/12438092/match-a-24-hour-formatted-time-with-regex>
