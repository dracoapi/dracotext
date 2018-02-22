# Draconius Text

[![Greenkeeper badge](https://badges.greenkeeper.io/dracoapi/dracotext.svg)](https://greenkeeper.io/)

Text strings to display info when using [DracoNode API](https://github.com/dracoapi/nodedracoapi).  
You can get creature name and item types, but also warning message or buff description.  

```javascript

const strings = require('dracotext').load('english');

strings.get('key.system.application.name');
strings.getCreature('MONSTER_WATER_14');

```