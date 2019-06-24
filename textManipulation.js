const fs = require('fs');

fs.readFile('./data/hp4.txt', function(err, data) {
    if(err) throw err;

    var lines = data.toString().split(/\n/);
    var outputText = [];
    for (var i = 0; i < lines.length; i++) {
      if (/\S/.test(lines[i])) {
        outputText.push('`' + lines[i].trim() + '`');
      }
    }
    fs.writeFile('./data/hp41.txt', `[${outputText}]`, (err) => {  
        if (err) throw err;    
        console.log('File saved!');
    });
});