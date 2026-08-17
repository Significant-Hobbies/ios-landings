#!/usr/bin/env bash
# Copy the Calorie landing snapshot into the public Calorie repo.
set -euo pipefail

ROOT="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)"
DEST="${1:-$ROOT/../calorie/marketing}"

if [[ ! -d "$ROOT/../calorie" ]]; then
  echo "calorie checkout not found next to ios-landings" >&2
  exit 1
fi

(cd "$ROOT" && PRODUCT=calorie pnpm exec astro build)
rm -rf "$DEST"
mkdir -p "$DEST"
rsync -a --delete "$ROOT/dist/calorie/" "$DEST/"
echo "Synced Calorie landing into $DEST"
