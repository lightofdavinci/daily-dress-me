const favicon = require('serve-favicon');
const path = require('path');
const express = require('express');
const app = express();

app.use('/public', express.static(process.cwd() + '/public'));
app.use('/styles', express.static(process.cwd() + '/public/css'));
app.use('/images', express.static(process.cwd() + '/public/media'));
app.use('/scripts', express.static(process.cwd() + '/public/js'));
// app.use('/fonts', express.static(process.cwd() + '/public/fonts'));
app.use(favicon(path.join(__dirname,'public','favicon.ico')));

app.get('/', function(req, res){
			res.sendFile(process.cwd() + '/public/index.html');
		});

const port = process.env.PORT;
app.listen(port, function(){
	console.log('Node.js listening on port ' + port + '...');
});