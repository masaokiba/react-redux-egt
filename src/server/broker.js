import winston from 'winston';

module.exports.run = function () {
  winston.log('info', 'SocketCluster Broker Started', {pid: process.pid});
};
