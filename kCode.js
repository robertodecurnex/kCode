var kCode = {
  code: [38,38,40,40,37,39,37,39,66,65],
  listen: function(success) {
    kCode.success = success;
    document.addEventListener("keydown", kCode.inspect, false);
  }, 
  inspect:  function(event) {
    if(event.keyCode == kCode.expectation) {
      kCode.progress++;
      if(kCode.progress == 10) {
        kCode.progress = 0;        
        kCode.success();
      }
    } else {
      kCode.progress = 0;
    }
    kCode.expectation = kCode.code[kCode.progress];
  },
  expectation: 38,
  progress: 0 ,
  success: null
}

