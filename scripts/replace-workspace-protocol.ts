const fs = require('fs');
const path = require('path');

function replaceWorkspaceProtocol(packagePath) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, 'utf8'));
  const workspaceRoot = path.resolve(__dirname, '..');

  ['dependencies', 'devDependencies'].forEach(depType => {
    if (packageJson[depType]) {
      Object.keys(packageJson[depType]).forEach(dep => {
        if (packageJson[depType][dep] === 'workspace:*') {
          const depPackageJson = JSON.parse(fs.readFileSync(path.join(workspaceRoot, 'packages', dep.split('/')[1], 'package.json'), 'utf8'));
          packageJson[depType][dep] = `${depPackageJson.version}`;
        }
      });
    }
  });

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

// Replace in all workspace packages
const packagesDir = path.join(__dirname, '..', 'packages');
fs.readdirSync(packagesDir).forEach(packageName => {
  const packageJsonPath = path.join(packagesDir, packageName, 'package.json');
  if (fs.existsSync(packageJsonPath)) {
    replaceWorkspaceProtocol(packageJsonPath);
  }
});