// Load the http module to create an http server.
var http = require('http'); 
var crypto = require('crypto'),
    algorithm = 'aes-256-gcm',
    password = '3zTvzr6n03OX02pxE54rIYu1545x4TlY', 
    iv = '91qX8z9qBoBp';

// Create a server that invokes the `handler` function upon receiving a request
http.createServer(handler).listen(8000, function(err){
  if(err){
    console.log('Error starting http server');
  } else {
    console.log("Server running at http://127.0.0.1:8000/ or http://localhost:8000/");
  };
});

// Create a function to handle every HTTP request
function handler(req, res){
  var form = '';
  var gibrish = encrypt("SOU_Computer_Science_Department_Class_of_2017");
  if(req.method == "GET"){  
    form = '<!doctype html> \
            <html lang="en"> \
            <head> \
                <meta charset="UTF-8">  \
                <title>DECRYPT DEMO</title> \
                <style> \
                    * {background-color: cyan; \
                       color: blue; \
                       font-family: \"Lucida Console\", Courier, monospace; \
                       font-size: 1.15em;} \
                    #result{font-size: 120%;} \
                </style> \
            </head> \
            <body> \
              <p> \
                  Decrypt the following Phrase (hint: we are part of it) \
              </p> \
              <form name="myForm" action="" onsubmit="return ajax();"method="post">\
                  <p id="bold"> ' + gibrish.content + ' </p> \
                  <p> <span id="result"></span> </p> \
                  <br> \
                  <p> \
                  <input type="submit" value="Submit"> \
                  </p> \
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
  } else if(req.method == 'POST') {
    //read form data
    req.on('data', function(chunk) {
      //grab form data as string
      var formdata = chunk.toString();
      //grab A and B values
      var a = formdata.split("&")[0];
      var b = formdata.split("&")[1];
      var c = a + b;
      var result = decrypt(gibrish);
      //fill in the result and form values
      form = result;
      //respond
      res.setHeader('Content-Type', 'text/html');
      res.writeHead(200);
      res.end(form);
    });
  } else {
    res.writeHead(200);
    res.end();
  };
};
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

  function decrypt(encrypted) {
    var decipher = crypto.createDecipheriv(algorithm,password,iv)
    decipher.setAuthTag(encrypted.tag);
    var dd = decipher.update(encrypted.content, 'hex', 'utf8')
    dd += decipher.final('utf8');
    return dd;
  }