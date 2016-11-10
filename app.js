
var express = require('express');
var compression = require('compression');
var app = express();

app.use(compression());
app.set('view engine','ejs')
//app.set('views',__dirname+'/myFolder') //custom folder

//auto folder is "views" folder and auto template is "ejs"
app.get('/', function (req, res) {	
  res.render('insenly-home'); //automaticall finds default.ejs in views folder
});

app.get('/insenly-about', function (req, res) {
  res.render('insenly-about'); //automaticall finds default.ejs in views folder
});
app.get('/insenly-portfolio', function (req, res) {
  res.render('insenly-portfolio'); //automaticall finds default.ejs in views folder
});

app.get('/insenly-services', function (req, res) {
  res.render('insenly-services'); //automaticall finds default.ejs in views folder
});

app.get('/insenly-contact', function (req, res) {
  res.render('insenly-contact'); //automaticall finds default.ejs in views folder
});

app.get('/insenly-blog', function (req, res) {
  res.render('insenly-blog'); //automaticall finds default.ejs in views folder
});

//must mention the static files // "/views" is for serving the static contents like css or jquery
app.use(express.static(__dirname + '/views'));

app.listen(process.env.PORT || 3000, function(){
  //console.log('listening on', http.address().port);
});

/*
app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});
*/