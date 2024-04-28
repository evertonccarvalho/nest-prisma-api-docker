#!/bin/bash

npm install
npm run build
npm run start:dev


# WINDOWS
# attrib -r .\.docker\entrypoint.sh
# LINUX
# chmod +x .\.docker\entrypoint.sh
