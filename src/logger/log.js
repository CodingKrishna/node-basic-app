var fs = require('fs');
const output = fs.createWriteStream('../../stdout.log');
const errorOutput = fs.createWriteStream('../../stderr.log');
// custom simple logger
const logger = new console.Console(output, errorOutput);
logger.log('[Start] Log message from logger component');
// use it like console
const count = 5;
logger.log('count: %d', count);
// in stdout.log: count 5
logger.log('[End] Log message from logger component');