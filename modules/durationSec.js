exports.durationSec = function(mapped) {
    // body...
    for (var i = 0; i < mapped.length; i++) {

      var seconds = mapped[i].duration
        seconds = seconds.split(/h|m|s/); // split it at the colons
         var seconds = seconds.filter(Boolean);

        var finalSec = (+seconds[0]) * 60 * 60 + (+seconds[1]) * 60 + (+seconds[2]);

        mapped.push({
          provider: mapped[i].provider,
          cellNum: mapped[i].cellNum,
          duration: finalSec
        });

        console.log({
          provider: mapped[i].provider,
          cellNum: mapped[i].cellNum,
          duration: finalSec
        })


    }
    //console.log(mapped[i].provider);
return mapped[i];
};
