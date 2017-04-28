

test:  libfoo.so
	gcc -L/Downloads/CryptoWrap/py_slfTst/test2 -Wl,-rpath=/Downloads/CryptoWrap/py_slfTst/test2 -Wall -o test main.c -lfoo

foo.o: foo.c foo.h
	gcc -c -Wall -Werror -fpic foo.c

libfoo.so: foo.o
	gcc -shared -o libfoo.so foo.o

clean:
	rm *.o
	rm *.so

