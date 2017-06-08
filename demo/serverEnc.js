// Load the http module to create an http server.
var http = require('http'); 
var fs = require('fs');
var crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY', 
    iv = '60iP0h6vJoEa';
// Create a function to handle every HTTP request
function handler(req, res){
  var form = '';
  if(req.method == "GET"){   
    form = '<!doctype html> \
            <html lang="en"> \
            <head> \
                <meta charset="UTF-8">  \
                <title>Encrypt DEMO</title> \
            </head> \
            <body> \
              <p> \
                The following form will make one encyption of two inputs. \
              </p> \
              <form name="myForm" action="" onsubmit="return ajax();"method="post">\
                  <input type="text" name="A"> + \
                  <input type="text" name="B"> = \
                  <span id="result"></span> \
                  <br> \
                  <input type="submit" value="Submit"> \
              </form> \
              <script> \
                function ajax(){ \
                  var a = document.forms["myForm"]["A"]; \
                  var b = document.forms["myForm"]["B"]; \
                  var formdata = "A="+a+"&B="+b; \
                  \
                  xmlhttp = new XMLHttpRequest(); \
                  xmlhttp.onreadystatechange=function(){ \
                    if(xmlhttp.readyState==4 && xmlhttp.status==200){ \
                      document.getElementById("result").innerHTML=xmlhttp.responseText; \
                    }; \
                  }; \
                  xmlhttp.open("POST","",true); \
                  xmlhttp.send(formdata); \
                  return false; \
                } \
              </script> \
            </body> \
            </html>';
  //respond
  res.setHeader('Content-Type', 'text/html');
  res.writeHead(200);
  res.end(form); 
  } else if(req.method == 'POST'){

    //read form data
    req.on('data', function(chunk) {

      //grab form data as string
      var formdata = chunk.toString();
      //grab A and B values
      var a = formdata.split("&")[0];
      var b = formdata.split("&")[1];
      var c = a + b;
      var result = encrypt(c);
      //fill in the result and form values
      form = result.content;
      //respond
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(form)
    });
  } else {
    res.writeHead(200);
    res.end();
  };
}

//js functions running only in Node.JS

function encrypt(text) {
    var cipher = crypto.createCipheriv(algorithm,password,iv)
    var encrypted = cipher.update(text,'utf8','hex')
    encrypted += cipher.final('hex');
    var tag = cipher.getAuthTag();
    return {
      content: encrypted,
      tag: tag
    };
  }


// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8000, function(err){

  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:8000/ or http://localhost:8000/");
  };
});
