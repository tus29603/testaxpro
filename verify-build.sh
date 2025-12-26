#!/bin/bash
# Script to verify Next.js build output for GitHub Pages

echo "=== Verifying Build Output ==="
echo ""

# Check if out directory exists
if [ ! -d "out" ]; then
  echo "❌ ERROR: 'out' directory not found. Run 'npm run build' first."
  exit 1
fi

echo "✅ out/ directory exists"

# Check for required files
echo ""
echo "=== Checking Required Files ==="

if [ -f "out/.nojekyll" ]; then
  echo "✅ .nojekyll file exists"
else
  echo "❌ ERROR: .nojekyll file missing! This is required for GitHub Pages."
  exit 1
fi

if [ -f "out/CNAME" ]; then
  echo "✅ CNAME file exists: $(cat out/CNAME)"
else
  echo "⚠️  WARNING: CNAME file missing"
fi

if [ -f "out/index.html" ]; then
  echo "✅ index.html exists"
else
  echo "❌ ERROR: index.html missing!"
  exit 1
fi

# Check for _next directory
echo ""
echo "=== Checking _next Directory ==="

if [ -d "out/_next" ]; then
  echo "✅ _next/ directory exists"
  
  if [ -d "out/_next/static" ]; then
    echo "✅ _next/static/ directory exists"
    
    CSS_COUNT=$(find out/_next/static -name "*.css" | wc -l | tr -d ' ')
    JS_COUNT=$(find out/_next/static -name "*.js" | wc -l | tr -d ' ')
    
    echo "   Found $CSS_COUNT CSS files"
    echo "   Found $JS_COUNT JS files"
    
    if [ "$CSS_COUNT" -eq "0" ]; then
      echo "⚠️  WARNING: No CSS files found!"
    fi
    
    if [ "$JS_COUNT" -eq "0" ]; then
      echo "⚠️  WARNING: No JS files found!"
    fi
  else
    echo "❌ ERROR: _next/static/ directory missing!"
    exit 1
  fi
else
  echo "❌ ERROR: _next/ directory missing!"
  exit 1
fi

# Check asset paths in HTML
echo ""
echo "=== Checking Asset Paths in HTML ==="

if grep -q 'href="/_next/static' out/index.html; then
  echo "✅ HTML contains absolute paths (/_next/static/...)"
  echo "   These should work on GitHub Pages root domain"
else
  echo "⚠️  WARNING: No _next/static paths found in HTML"
fi

# Check for logo
if [ -f "out/logo.jpeg" ]; then
  echo "✅ logo.jpeg exists"
else
  echo "⚠️  WARNING: logo.jpeg missing"
fi

echo ""
echo "=== Build Verification Complete ==="
echo ""
echo "If all checks passed, your build should work on GitHub Pages."
echo "Make sure:"
echo "  1. GitHub Pages source is set to 'GitHub Actions'"
echo "  2. Custom domain is configured: testaxpro.com"
echo "  3. .nojekyll file is deployed (should be automatic)"

