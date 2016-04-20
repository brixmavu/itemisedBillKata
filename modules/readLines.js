var fs = require('fs');


exports.readLines = function () {
  // body...
  var fileContent=fs.readFileSync('../ItemisedBill.csv','utf8');
  var list = fileContent.toString().split('\r').slice(1);

  var linesInFiles = list.map(function(row){
      var data = row.split(',');
      list.pop();
      return {
        date : data[0],
        provider:data[1],
        cellNum:data[2],
        duration:data[3]
      };

      console.log({
        date : data[0],
        provider:data[1],
        cellNum:data[2],
        duration:data[3]
      });
      });
  linesInFiles.pop();
  return linesInFiles;
};
