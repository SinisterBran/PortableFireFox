var fetch = require('node-fetch');
var exec = require('child_process').exec, child;
fetch('https://ffx.yodacode.repl.co/url/' + process.env.REPL_SLUG).then(res => res.text()).then(url => {
  console.log(url);
child = exec(`firefox -private ${url ? '-url ' : ''}${url} > ./logs.txt 2> ./logs.txt`,
    function (error, stdout, stderr) {
        console.log('stdout: ' + stdout);
        console.log('stderr: ' + stderr);
        if (error !== null) {
             console.log('exec error: ' + error);
        }
    });

// 
})
