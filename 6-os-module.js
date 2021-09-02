const os = require("os");

//info about current user
const user = os.userInfo();
console.log(user);

//method returns the system uptime in h

console.log(`the system uptime ${os.uptime() / 3600}seconds`);

const currentOS = {
  name: os.type(),
  release: os.release(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
};
console.log(currentOS);
