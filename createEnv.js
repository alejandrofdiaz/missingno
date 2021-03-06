const dotEnvValues = require('dotenv').config();
const fs = require('fs');
const path = require('path');

const ENV = dotEnvValues.parsed;

const createEnvContent = () => Object.entries({
  ...process.env,
  ...ENV
})
  .reduce((prev, [attr, value])=> prev.concat([`${attr}=${value}`]),[])
  .join('\n');

function App(){
  const exists = fs.existsSync(path.join(__dirname, '.env'));
  let fileName = '.env';
  if(exists) fileName = '.envTest';

  return fs.writeFileSync(fileName, createEnvContent());
}

App();