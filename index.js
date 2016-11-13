
var Client = require('node-ssdp').Client
      , client = new Client();

    client.on('response', function (headers, statusCode, rinfo) {
      console.log(
        'Got a response to an m-search:\n%d\n%s\n%s',
        statusCode,
        JSON.stringify(headers, null, '  '),
        JSON.stringify(rinfo, null, '  '));
    });

    // search for a service type
    //client.search('urn:schemas-upnp-org:service:ContentDirectory:1');

    // Or get a list of all services on the network

    client.search('ssdp:all');


setTimeout(function() {
  client.stop();
}, 10000)
