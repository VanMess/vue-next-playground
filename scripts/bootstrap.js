const fs = require('fs');
const { spawn } = require('child_process');
const path = require('path');

function run() {
	const vnPkg = require(path.join(__dirname, '../vue-next/package.json'));
	const pkg = require(path.join(__dirname, '../package.json'));
	pkg.devDependencies = Object.assign(pkg.devDependencies || {}, vnPkg.devDependencies);
	fs.writeFileSync(path.join(__dirname, '../package.json'), JSON.stringify(pkg, null, 2));

	const cp = spawn('yarn', []);
	cp.stdout.pipe(process.stdout);
}

run();
