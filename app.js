const http = require('http');

http.createServer(function(req, res) {

	res.write("On the way to being a full snack enginerr");
	res.end();

}
).listen(4000);

console.log("server started on port 3000")
