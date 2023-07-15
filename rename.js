const path = require('path');
const fs   = require('fs');

const version = process.env.ELECTRON_VERSION;
const short   = version.substr(0, version.lastIndexOf('.'));

const bin = 'node_modules/sqlite3/bin';

fs.readdirSync(bin).forEach((dirName) => {
  const [ platform, arch ] = dirName.split('-');
  const dir = path.join(`sqlite3-${platform}`, `electron-v${short}-${platform}-${arch}`);

  fs.mkdirSync(dir, { recursive: true });

  const src = path.join(bin, dirName, 'sqlite3.node');
  const dest = path.join(dir, 'node_sqlite3.node');

  console.log('copy', src);
  console.log('to', dest);

  fs.cpSync(src, dest);
});
