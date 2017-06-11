# CryptoWrap

This project is to create a wrapper to utilize S4 library in JavaScript and Python.

For the Node.js the binding.gyp and json.package files are in the outside of the cryptowrap folder.  This will encorporate the ecc
sub portion of the tomcrypt source files for that were used for testing.

The Python test files are only in the slfTst folder as the c-types Python library was only able to get a install with no run-time errors, but still contained unsolved logic/conversion errors going up the pipe from the c-code to python.

When assembling the shared files (until the makefile is up and running) with gcc, the following must be done where file.c is the source code and filedir is the directory it is in:

  1) compile c-code: gcc -c -Wall -Werror -fpic file.c
  2) make shared file: gcc -shared -o libfile.so file.c
  3) link with shared library one of the following ways:
      
a) gcc -L/home/username/filedir -Wall -o file file.c -lfile 

export LD_LIBRARY_PATH=/home/username/filedir:$LD_LIBRARY_PATH   

b) gcc -L/home/username/filedir -Wl,rpath=/home/username/filedir -Wall -o file file.c -lfile

c) sudo cp /home/username/filedir/libfile.so /usr/lib

         sudo chmod 0755 /usr/lib/libfile.so
     
         ldconfig -p | grep file
         
         unset LD_LIBRARY_PATH
         
         gcc -Wall -o file file.c -lfile
   
  4) run it: ./file
