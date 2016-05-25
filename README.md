express-parse-boolean
==================

> Convert query and body boolean strings to real booleans for express/connect applications.


## Installation

    npm install --save josiasmontag/express-parse-boolean


## Getting Started
The module will recursively attempt to parse every property in `req.query` and `req.body`.

Load it right after `bodyParser` and other middlewares:

```js
var boolParser = require('express-parse-boolean');

// [...]

app.use(bodyParser.json());
app.use(require('connect-multiparty'));
app.use(boolParser());
```

#### Without
```js
// ?a=true&b[c]=false
console.log(req.query);
// => { a: 'true', b: { c: 'false' } }
```

#### With
```js
// ?a=true&b[c]=false
console.log(req.query);
// => { a: true, b: { c: false } }
```


#### Without
```js
// <input name="b[c]" value="false"> 
console.log(req.body);
// => { b: { c: 'false' } }
```

#### With
```js
// <input name="b[c]" value="false"> 
console.log(req.body);
// => { b: { c: false } }
```

## License
Copyright (c) 2015 Marius Craciunoiu. Licensed under the MIT license.
