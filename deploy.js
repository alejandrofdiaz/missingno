const { parsed : ENV } = require('dotenv').config();
const FtpDeploy = require('ftp-deploy');
const path = require('path');

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

new FtpDeploy()
  .deploy(config)
  .then(console.log)
  .catch(err=>console.log('err', err));