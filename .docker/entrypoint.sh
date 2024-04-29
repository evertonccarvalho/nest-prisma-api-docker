#!/bin/bash

npm install
npm run build

npx prisma migrate dev
npx prisma generate

npm run start:dev

