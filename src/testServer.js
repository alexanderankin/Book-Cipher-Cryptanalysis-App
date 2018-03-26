import Pretender from 'pretender';

var server = new Pretender(function(){
  this.post('/api/runTest', function(request) {
    console.log("API CALL: /api/runTest");
    var response = { err: 'Unspecified error' };

    var body = JSON.parse(request.requestBody);
    if (Array.isArray(body['ciphertexts'])) {
      response = {
        status: 'success'
      };
    } else {
      response = { err: 'User not recognized' };
    }

    return new Promise(function(resolve) {
      setTimeout(function() {
        resolve([200, {"Content-Type": "application/json"}, JSON.stringify(response)]);
      }, 400);
    });
  });
});

export default server;