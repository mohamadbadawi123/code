#!/usr/bin/env bash
set -euo pipefail
cd "$(dirname "$0")/.."
PORT="${PORT:-8000}"
python3 -m http.server "$PORT" --bind 0.0.0.0