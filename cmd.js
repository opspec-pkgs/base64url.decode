const base64url = require('base64-url');
const fs = require('fs');

fs.writeFileSync('/decodedValue', base64url.decode(process.env.encodedValue));