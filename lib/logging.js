'use strict';

let Logger = require('bunyan');
let log;

module.exports = {

    getLogger: () => {
        if (!log) {
            log =  new Logger({
                name: 'node-code-test',
                stream: process.stdout,
                level: 'debug',
                serializers: Logger.stdSerializers
            })
        }

        return log;
  }
}
