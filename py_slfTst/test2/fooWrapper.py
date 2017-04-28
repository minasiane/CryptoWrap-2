from ctypes import cdll
lib = cdll.LoadLibrary('./libfoo.so')

class Foo(object):
	def __init__(self):
		self.obi = lib.Foo_main()


