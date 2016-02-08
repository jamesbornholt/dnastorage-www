.PHONY: deploy

HOST := bornholt@recycle.cs.washington.edu
ROOT := public_html/dnastorage-asplos16/
RSYNC_ARGS := --compress --recursive --checksum --itemize-changes --filter='- .DS_Store' --filter='- Makefile' -e ssh

deploy:
	rsync $(RSYNC_ARGS) . $(HOST):$(ROOT)
