// 根据命令行输入(`npm run pre-analyz projectName`)获取工程名
let projectName = process.argv[2];
if (!projectName) {
  projectName = require('./project').name;
  if (projectName === 'undefined' || !projectName) {
    const chalk = require('chalk');
    console.log(chalk.red('请输入要分析的工程名'));
    process.exit(1);
  }
} else {
  const { writeFileSync } = require('fs');
  const { resolve } = require('path');
  writeFileSync(resolve(__dirname, './project.js'), `exports.name = '${projectName}';\n`);
}

const exec = require('child_process').execSync;
exec('npm run analyz', { stdio: 'inherit' });
