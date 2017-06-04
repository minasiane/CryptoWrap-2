1st incarnation = simple server that serves a simple form that accepts two inputs, combines them together
and outputs an encrypted string (in hex)

Will build upon this to look nicer, have a decryption part and demo will be done

To run, must have node installed as well as the required crypto libraries, simply run by entering 'node server.js' from the command
line within the correct directory (if no PATH or shortcuts made).  Once the server is up (will see an positive message on the command
line), either access with 127.0.0.1:8000 or localhost:8000 in a browser.  This incarnation will only run once and output.

Note: thought this would be super simple and it actually took me about two days to get this working... lol.

2nd incarnation = two separate scripts for encrypt and decrypt web demo with almost no flash

Got Decrypt done about an hour.  For simplicity I kept the enc and dec separate.  I made the serverEnc.js be the encrypt and the serverDec.js be the decrypt.  I changed up some values on the decrypt and enctypted the text and put a button on the screen, after a guess attempted, can push the button to decrypt the text.
