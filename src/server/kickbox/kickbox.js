import request from 'request';
import promisify from 'es6-promisify';
import querystring from 'querystring';
import winston from 'winston';

const pRequest = promisify(request);

const KICKBOX_URL = "https://api.kickbox.io/v2";
const KICKBOX_API_KEY = "ad4bf8527c1f9b6dc3333aedf25ac522b48bf7a6a78bf34ca5d5660bc641465d";

export async function verifyEmail(email) {
  const query = {
    email: email,
    apikey: KICKBOX_API_KEY
  };
  const stringifiedQuery = querystring.stringify(query);
  const verifyURL = `${KICKBOX_URL}/verify?${stringifiedQuery}`;

  winston.log('Verifying Email with kickbox', {email});

  let result = await pRequest(verifyURL);

  return JSON.parse(result[0].body);
}
