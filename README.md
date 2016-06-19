Start Server
------------

```
npm install
```

```
node server1.js  // will listen on 3000
node server2.js  // will listen on 3001
```

Examples
--------

1. Fetch json data from a different domain will fail:

Visit <http://localhost:3000/json.html> and click the button, 
and also open browser's console to see what happens.

2. Fetch data with jsonp and manually creating `script` tag:

Visit <http://localhost:3000/jsonp-script-tag.html> and click the button.

3. Fetch data with jsonp and use jquery simply:
   
   Visit <http://localhost:3000/jsonp-jquery.html> and click the button.

Documents
---------

- http://json-p.org/
- http://stackoverflow.com/questions/2067472/what-is-jsonp-all-about