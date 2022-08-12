/* eslint-disable @typescript-eslint/no-var-requires */
var crx3 = require('crx3'),
  path = require('path'),
  fs = require('fs'),
  packageJson = require('./package.json');

let manifestPath = path.join('./dist', 'manifest.json');
const name = packageJson.name;

console.log(`Building '${name}' with manifest from ${manifestPath}`);

try {
  const extensionPath = path.join('dist', name + '.crx');
  if (fs.existsSync(extensionPath)) {
    fs.rmSync(extensionPath);
  }
  crx3([manifestPath], {
    keyPath: path.join('secrets', 'private-key.pem'),
    crxPath: extensionPath,
  }).then(function () {
    console.log(
      'Extension package written to ' + path.join('dist', name + '.crx')
    );
  });
} catch (errorMsg) {
  console.error(`Error: ${errorMsg}s`);
  return 1;
}
