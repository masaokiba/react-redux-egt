import winston from 'winston';
import 'winston-loggly';

if (process.env.NODE_ENV === 'production') {
  winston.add(winston.transports.Loggly, {
    token: '727c0934-fe31-4a33-a59b-f9cf4c7e4b78',
    subdomain: 'eliteguard',
    tags: ['Winston-NodeJS', '4WFS'],
    json: true
  });
}

winston.log('info', 'Winston Configured', {NODE_ENV: process.env.NODE_ENV});
