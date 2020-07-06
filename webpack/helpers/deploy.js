const shell = require('shelljs');

shell.exec('cd build');
shell.exec('git init');
shell.exec('git add .');
shell.exec('git commit -m "build"');
shell.exec('git remote add origin https://github.com/edinliu/ts-todolist.git');
shell.exec('git push -u origin master');
