/* 
https://npmjs.org/package/hpubjs 
https://npmjs.org/package/pdftohpubjs

*/

var fs = require('fs');
var path = require('path');
var mustache = require('mustache');
/*fs.writeFile("test.txt", "Hey there!", function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log("The file was saved!");
    }
}); 
*/
var page = fs.readFileSync("template.md", "utf8"); // bring in the HTML file
fs.readdir('./images/', function (err, files) {
 if (err)
    throw err;
 for (var index in files) {
    console.log(files[index]);
    var data = {
    paginaimg: 'images/' + files[index]
};
    var newFile = path.join('.', index + '.html');
    var html = mustache.to_html(page, data);
    fs.writeFile(newFile, html, function (err) {
  if (err) throw err;
  			console.log('It\'s saved!');
	});
 	}
 });


