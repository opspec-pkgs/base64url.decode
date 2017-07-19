var base64url = require('base64-url');

console.log(`decodedValue=${base64url.decode(process.env.encodedValue)}`);