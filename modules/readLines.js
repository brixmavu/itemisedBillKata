var fs = require('fs');
exports.readLines = function (filename) {
  // body...
  var fileContent=fs.readFileSync(filename,'utf8');
  var list = fileContent.toString().split('\r').slice(1);

  var linesInFiles = list.map(function(row){
      var data = row.split(',');
      return {
        date : data[0],
        provider:data[1],
        cellNum:data[2],
        duration:data[3]
      };
      });
  linesInFiles.pop();
  return linesInFiles;

};
