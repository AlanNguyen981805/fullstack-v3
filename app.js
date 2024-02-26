const http = require('http');

http.createServer(function(req, res) {

	res.write("Hello word");
	res.end();

}
).listen(4000);

console.log("server started on port 3000")
