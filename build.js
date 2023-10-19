/* eslint-disable @typescript-eslint/no-var-requires */
import crx3 from 'crx3';
import { join } from 'path';
import { existsSync, rmSync } from 'fs';
import packageJson from './package.json' assert { type: 'json' };

let manifestPath = join('./dist', 'manifest.json');
const name = packageJson.name;

console.log(`Building '${name}' with manifest from ${manifestPath}`);

try {
  const extensionPath = join('dist', name + '.crx');
  if (existsSync(extensionPath)) {
    rmSync(extensionPath);
  }
  crx3([manifestPath], {
    keyPath: join('secrets', 'private-key.pem'),
    crxPath: extensionPath,
  }).then(function () {
    console.log('Extension package written to ' + join('dist', name + '.crx'));
  });
} catch (errorMsg) {
  console.error(`Error: ${errorMsg}s`);
}
