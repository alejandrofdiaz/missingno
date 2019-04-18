const dotEnvValues = require('dotenv').config();

const FtpDeploy = require('ftp-deploy');
const path = require('path');

const ENV = dotEnvValues.parsed;

const config = {
  user: ENV.FTP_USER,
  password: ENV.FTP_PASSWORD,
  host: ENV.FTP_HOST,
  port: 21,
  localRoot: path.join(__dirname, ENV.LOCALPATH),
  remoteRoot: ENV.REMOTEPATH,
  include: ['*'],
  deleteRemote: true
};

console.log('Starting FTP deployment');

new FtpDeploy()
  .deploy(config)
  .then(console.log)
  .catch(err=>{
    throw new Error('Deploy Error', err);
  });