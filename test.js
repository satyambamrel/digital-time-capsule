const TimeCapsule = require('./index');
const capsule = new TimeCapsule();

capsule.addMessage("Hello future me!", "2025-12-31");
console.log(capsule.getMessages());

node test.js


