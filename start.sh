#!/bin/bash
cd /home/runner/workspace
npm run build 2>&1 | tail -5
HOST=0.0.0.0 PORT=5000 node dist/server/entry.mjs
