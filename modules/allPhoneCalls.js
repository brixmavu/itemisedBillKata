exports.allPhoneCalls = function (bill, Provider) {
  // body...
  var mapped = [];
  for (var i = 0; i < bill.length; i++) {
    if(bill[i].provider === Provider && bill[i].provider !== undefined){
        mapped.push({
          'provider': bill[i].provider,
          'cellNum' : bill[i].cellNum,
          'duration' : bill[i].duration
        });
      }
  }
  //console.log(mapped);
  return mapped;
};
