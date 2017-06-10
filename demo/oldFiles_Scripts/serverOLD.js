

var http = require('http');
 var fs = require("fs");
var crypto = require('crypto'),
		algorithm = 'aes-256-gcm',
		password = '3zTvzr3p67VC61jmV54rIYu1545x4TlY', 
		iv = '60iP0h6vJoEa';
 
//;http.createServer(

function handler(request, response) {

	

	if (/^\/[a-zA-Z0-9\/]*.css$/.test(request.url.toString())){
   		sendFileContent(response, request.url.toString().substring(1), "text/css");
	} else  {
		sendFileContent(response, request.url.toString().substring(1), "text/html");
	}

	function sendFileContent(response, fileName, contentType){
		var form = '';
  		//fs.readFile(fileName, function(err, data){
    		//if(err){
      			//response.writeHead(404);
      			//response.write("Not Found!");

      		//} else {
				//response.setHeader('Content-Type', contentType);
				//response.writeHead(200);
      			//response.write(data);

						if(request.method == "GET") {
							form = '<!doctype html> \
									<html lang="en"> \
									<head> \
										<meta charset"UTF-8"> \
										<title>Encypt Form</title> \
									</head> \
									<body> \
										<form name"encForm" action"" onsubmit="return ajax();" method="post">\
											<input type="text" name="EncIn"> \
											<span id="result"><br><br></span> \
											<br> \
											<input type="submit" value="Submit"> \
										</form> \
										<script> \
											function ajax(){ \
												var encIn = document.forms[encForm]["EncIn"].value; \
												var formdata = "EncIn=" + encIn; \
												\
												xmlhttp = new XMLHttpRequest(); \
												xmlhttp.onreadystatechange=function(){ \
													if(xmlhttp.readyState==4 && xmlhttp.status==200){ \ 
														document.getElementById("result").innerHTML=xmlhttp.responseText; \
													}; \
												}; \
												xmlhttp.open("POST", "", true); \
												xmlhttp.send(formdata); \
												return false; \
											} \
										</script> \
									</body> \
								//</html>';
							// respond
							response.setHeader('Content-Type', 'text/html');
							response.writeHead(200);
							response.end(form);


						} else if(request.method = 'POST') {
							// read form data
							request.on('data', function(chunk){
								//grab form data as string
								var formdata = chunk.toString();

								console.log(formdata);

								//grab data value
								var encIn = eval(formdata.split("&")[0]);

								var result = encrypt(encIn);
								 commented out = used for testing
								 console.log(chunk.toString());
								 console.log(encIn);
								 console.log(result.content);

								// fill in result and form values
								form = result.toString();

								//respond
								response.setHeader('Content-Type', 'text/html');
								response.writeHead(200);
								response.end(form);
							});
						} else {
							response.writeHead(200);
							response.end();
						};
					};


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

http.createServer(handler).listen(3000. function(err){
	if(err){
		console.log('Error starting http server');
	} else {
		console.log("Server running at http://127.0.0.1:3000/ or http://localhost:3000/");
	};
});
}