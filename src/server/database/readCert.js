import {readFileSync} from 'fs';
import {join} from 'path';

export const readCert = (file) => {
  const cert = readFileSync(join(__dirname, 'certs', file), 'utf8');
  return cert;
};
