#!/bin/bash
# Diagnostic script for GitHub Pages deployment issues

echo "=========================================="
echo "GitHub Pages Deployment Diagnostics"
echo "=========================================="
echo ""

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
  echo "❌ ERROR: Run this script from the project root directory"
  exit 1
fi

echo "1. Checking Next.js configuration..."
if grep -q "output: 'export'" next.config.js; then
  echo "   ✅ Static export is enabled"
else
  echo "   ❌ Static export NOT enabled in next.config.js"
fi

if grep -q "basePath: ''" next.config.js || grep -q "basePath:" next.config.js; then
  echo "   ✅ basePath is configured"
else
  echo "   ⚠️  basePath not explicitly set"
fi

echo ""
echo "2. Building the project..."
npm run build

echo ""
echo "3. Checking build output..."
if [ ! -d "out" ]; then
  echo "   ❌ out/ directory not found after build!"
  exit 1
fi

echo "   ✅ out/ directory exists"

# Check critical files
echo ""
echo "4. Checking critical files..."
CRITICAL_FILES=("out/.nojekyll" "out/index.html" "out/CNAME")
for file in "${CRITICAL_FILES[@]}"; do
  if [ -f "$file" ]; then
    echo "   ✅ $(basename $file) exists"
  else
    echo "   ❌ $(basename $file) MISSING!"
  fi
done

# Check _next directory
echo ""
echo "5. Checking _next directory..."
if [ -d "out/_next" ]; then
  echo "   ✅ _next/ directory exists"
  
  CSS_COUNT=$(find out/_next/static -name "*.css" 2>/dev/null | wc -l | tr -d ' ')
  JS_COUNT=$(find out/_next/static -name "*.js" 2>/dev/null | wc -l | tr -d ' ')
  
  echo "   📊 Found $CSS_COUNT CSS files"
  echo "   📊 Found $JS_COUNT JS files"
  
  if [ "$CSS_COUNT" -eq "0" ]; then
    echo "   ⚠️  WARNING: No CSS files found!"
  fi
  
  if [ "$JS_COUNT" -eq "0" ]; then
    echo "   ⚠️  WARNING: No JS files found!"
  fi
else
  echo "   ❌ _next/ directory MISSING!"
fi

# Check HTML for asset paths
echo ""
echo "6. Checking asset paths in HTML..."
if grep -q 'href="/_next/static' out/index.html; then
  echo "   ✅ HTML uses absolute paths (/_next/static/...)"
  echo "   ✅ These should work on GitHub Pages root domain"
else
  echo "   ⚠️  No _next/static paths found in HTML"
fi

# Check for logo
echo ""
echo "7. Checking public assets..."
if [ -f "out/logo.jpeg" ]; then
  echo "   ✅ logo.jpeg exists"
else
  echo "   ⚠️  logo.jpeg not found"
fi

echo ""
echo "=========================================="
echo "Diagnostics Complete"
echo "=========================================="
echo ""
echo "Next Steps:"
echo "1. Verify GitHub Pages settings:"
echo "   - Source should be 'GitHub Actions'"
echo "   - Custom domain: testaxpro.com"
echo ""
echo "2. Check GitHub Actions workflow:"
echo "   - Go to Actions tab"
echo "   - Verify latest workflow completed"
echo ""
echo "3. Test locally:"
echo "   cd out && python3 -m http.server 8000"
echo "   Visit http://localhost:8000"
echo ""
echo "4. Check deployed site:"
echo "   - Visit https://testaxpro.com"
echo "   - Open browser console (F12)"
echo "   - Look for 404 errors on /_next/static/ paths"
echo ""

