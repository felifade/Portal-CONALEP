#!/usr/bin/env bash
# deploy.sh — bump SW version, build MTHS + DEWE, commit y push
set -e

PORTAL="$(cd "$(dirname "$0")" && pwd)"
SW="$PORTAL/sw.js"

# ── 1. Bump versión del Service Worker ────────────────────────
CURRENT=$(grep -o 'conalep-portal-v[0-9]*' "$SW" | grep -o '[0-9]*$')
NEXT=$((CURRENT + 1))
sed -i '' "s/conalep-portal-v${CURRENT}/conalep-portal-v${NEXT}/" "$SW"
echo "SW: v${CURRENT} → v${NEXT}"

# ── 2. Build MTHS ─────────────────────────────────────────────
echo "Build MTHS..."
(cd "$PORTAL/conalep/MTHS" && npm run build --silent)

# ── 3. Build DEWE ─────────────────────────────────────────────
echo "Build DEWE..."
(cd "$PORTAL/conalep/DEWE" && npm run build --silent)

# ── 4. Commit y push ──────────────────────────────────────────
cd "$PORTAL"
git add sw.js conalep/MTHS conalep/DEWE
git commit -m "chore: deploy SW v${NEXT} — rebuild MTHS + DEWE

Co-Authored-By: Claude Sonnet 4.6 <noreply@anthropic.com>"
git push

echo "✓ Deploy completo — SW v${NEXT}"
