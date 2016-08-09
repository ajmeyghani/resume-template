/**
 * Convert html resume to markdown.
 */

var child_process = require('child_process');
var fs = require('fs');
child_process.exec('pandoc -o ./dist/my-name-resume.md src/index.html', function (err, stdout, stderr){
    if (err) {
        console.log("child processes failed with error code: " +
            err.code);
    }
    fs.readFile('././dist/my-name-resume.md', 'utf-8', function (err, data) {
      var toWrite = data.replace(/<\/div>/g, '').replace(/<div[\s]*?.*/g, '').trim()
      .replace(/###(.*?)/g, function (i, m) { return '\n\n##' + m; })
      .replace(/\n{3}/g, '')
      .replace(/[\-]{3,}/g, '\n-----------')
      .replace(/<span\s*class="location">(.*?)<\/span>/g, function (input,match) {return match + '\n';})
      .replace(/<span\s*class="company-name">(.*?)<\/span>/g, function (input, match) {return match.trim();})
      .replace(/<span\s*?class="title"\s*?>(.*?\n.*|.*?)<\/span>/g, function (input, match) {
        return  '**' + match.replace('\n', ' ') + '**,';
      })
      fs.writeFile('./dist/my-name-resume.md', toWrite, function (err) {
        if (err) { return console.log(err);}
        console.log('Converted to markdown!');
      });
    });
});


