# YoukeBox Makefile
#
# This program is free software; you can redistribute
# it and/or modify it under the terms of the GNU
# General Public License …

SHELL = /bin/sh

srcdir = .

NAME  = youkebox-frontend
DESCRIPTION = "YoukeBox Frontend, written in Vue.JS"
VERSION = 0.1.0
ARCH = noarch

all: compile

compile:
	npm install
	npm run build

TMPDIR := $(shell mktemp -d)
TARGET := $(TMPDIR)/var/vhosts/youkebox
package: compile
	mkdir -p $(TARGET)

	cp -r dist/* $(TARGET)
	
	for PKG in deb rpm; do \
		fpm -s dir -t $$PKG \
			--name $(NAME) \
			--description $(DESCRIPTION) \
			--version $(VERSION) \
			--architecture $(ARCH) \
			--chdir $(TMPDIR) \
			.; \
	done
	
	rm -R $(TMPDIR)

clean:
	rm -f youkebox*.deb
	rm -f youkebox*.rpm

.PHONY: clean
