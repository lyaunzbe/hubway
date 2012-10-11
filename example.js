var hubway = require('./lib/hubway.js')(process.argv[2], process.argv[3]);

hubway.api(function(err, data){
  if (err) console.log(err);

	console.log('API endpoint: ', JSON.stringify(data,true,2));
	console.log('.....................\n');
})
