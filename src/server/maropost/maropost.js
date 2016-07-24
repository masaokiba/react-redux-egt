import request from 'request';
import promisify from 'es6-promisify';
import moment from 'moment';
import winston from 'winston';

const pRequest = promisify(request);

const authToken = "9e20c74ef7bee811b5c03ddb8ee24d3bfa46daec";
const apiURL = "http://api.maropost.com/accounts/196";

function pick(o, ...fields) {
  return fields.reduce((a, x) => {
    if (o.hasOwnProperty(x)) a[x] = o[x];
    return a;
  }, {});
}

export async function createMaropostContact(listId, leadData) {
  const body = {
    contact: {
      email: leadData.email,
      custom_field: {
        jumptype: leadData.jumpType || null,
        uniqueid: leadData.id || null,
        optintime: moment().format(),
        source: leadData.source || null,
        keyword: leadData.keyword || null
      },
      remove_from_dnm: true
    }
  };

  const postOptions = {
    method: 'POST',
    url: `${apiURL}/lists/${listId}/contacts.json?auth_token=${authToken}`,
    headers: {
      'content-type': 'application/json',
      'accept': 'application/json'
    },
    body: body,
    json: true
  };

  winston.log('info', 'Creating Maropost contact', {
    postOptions
  });

  let result = await pRequest(postOptions);
  winston.log('info', 'Maropost Response', {resultBody: result[0].body});
  return result[0].body;
}
