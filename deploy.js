const dotEnvValues = require('dotenv').config();

const Ssh2SftpClient = require('ssh2-sftp-client');
const path = require('path');
const fs = require('fs');

const ENV = dotEnvValues.parsed;

const config = {
  username: ENV.FTP_USER,
  password: ENV.FTP_PASSWORD,
  host: ENV.FTP_HOST,
  port: ENV.FTP_PORT,
  localRoot: path.join(__dirname, ENV.LOCALPATH),
  remoteRoot: ENV.REMOTEPATH,
};

const fileToUpload = () => 
  fs.readdirSync(config.localRoot)
    .map(fileName => ({
      pathRemote: `${config.remoteRoot}/${fileName}`, 
      pathLocal: path.join(config.localRoot, fileName),
    }));

const client = new Ssh2SftpClient();

console.log('Deploying Assets');

client
  .connect(config)
  .then(res=>client.rmdir(ENV.REMOTEPATH, true))
  .then(()=>client.mkdir(ENV.REMOTEPATH, true))
  .then(()=>Promise
      .all(fileToUpload()
        .map(({pathLocal, pathRemote})=>client.put(pathLocal, pathRemote))
      ))
  .then(err=>client.end())
  .then(()=>console.log('Assets Deployed'));

  client.on('error', (err)=>{
    console.log(err);
    return client.end();
  });