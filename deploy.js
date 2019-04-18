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
  deleteRemote: true,
  forcePasv: true,
};

console.log(`Starting FTP deployment to ${ENV.FTP_HOST}`);

new FtpDeploy()
  .deploy(config, (err, res)=>{
    if(err){
      throw new Error('Deploy Error '+ err);
    }else{
      console.log(res);
    }
  });