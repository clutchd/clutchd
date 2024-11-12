const fs = require("node:fs");
const path = require("node:path");

function replaceWorkspaceProtocol(packagePath) {
  const packageJson = JSON.parse(fs.readFileSync(packagePath, "utf8"));
  const workspaceRoot = path.resolve(__dirname, "..");

  for (const depType of ["dependencies", "devDependencies"]) {
    if (packageJson[depType]) {
      for (const dep of Object.keys(packageJson[depType])) {
        if (packageJson[depType][dep] === "workspace:*") {
          const depPackageJson = JSON.parse(
            fs.readFileSync(
              path.join(
                workspaceRoot,
                "packages",
                dep.split("/")[1],
                "package.json",
              ),
              "utf8",
            ),
          );
          packageJson[depType][dep] = `${depPackageJson.version}`;
        }
      }
    }
  }

  fs.writeFileSync(packagePath, JSON.stringify(packageJson, null, 2));
}

// Replace in all workspace packages
const packagesDir = path.join(__dirname, "..", "packages");
for (const packageName of fs.readdirSync(packagesDir)) {
  const packageJsonPath = path.join(packagesDir, packageName, "package.json");
  if (fs.existsSync(packageJsonPath)) {
    replaceWorkspaceProtocol(packageJsonPath);
  }
}
