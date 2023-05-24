.PHONY: build
build:
	tyarn build
deploy: build
	rsync -av --delete dist/ tc:/app/dist