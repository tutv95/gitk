var shell = require('shelljs');
var config = require('./config');

var git_exe = shell.which('git');
if (!git_exe) {
    console.log('Sorry, this script requires git');
    shell.exit(1);
}

var pull = shell.cd('E:/test_gitk').exec('git pull origin master', {silent: true});

if (pull.code !== 0) {
    console.log('Pull failed!');
} else {
    console.log('Pull success!');
}