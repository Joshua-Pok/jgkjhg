IMAGE_PREFIX = 018288985300.dkr.ecr.ap-southeast-1.amazonaws.com
IMAGE_NAME = $(IMAGE_PREFIX)/venti/data/deployment-service-frontend
VERSION = $(shell cat VERSION)
FOLDER_NAME = doc
OUTPUT_ZIP = info.zip

dev:
	npm install
	npm run pre-commit
	npm run dev


prod:
	npm install
	npm run pre-commit
	npm run build
	npm run start

docker-build:
	@echo "Copying shared-styles into frontend..."
	cp -r ../../shared-styles ./shared-styles-temp

	@echo "Building Docker image..."
	docker build \
		-t $(IMAGE_NAME):$(VERSION) \
		.

	@echo "Cleaning up..."
	rm -rf ./shared-styles-temp

docker-push:
	docker push \
		$(IMAGE_NAME):$(VERSION)

docker-run:
	docker run -it --rm \
		--network host \
		-p 3000:3000\
		$(IMAGE_NAME):$(VERSION)

docker-shell:
	docker run -it --rm \
		-p 3000:3000\
		--entrypoint=/bin/sh \
		$(IMAGE_NAME):$(VERSION)
