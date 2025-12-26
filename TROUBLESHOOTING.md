# GitHub Pages Troubleshooting Guide

## If CSS/JS Still Not Loading

### Step 1: Verify GitHub Pages Settings

1. Go to your repository on GitHub
2. Click **Settings** → **Pages**
3. **Source** should be set to **"GitHub Actions"** (NOT "Deploy from a branch")
4. **Custom domain** should be set to `testaxpro.com`
5. Click **Save**

### Step 2: Check GitHub Actions Deployment

1. Go to **Actions** tab in your repository
2. Check if the latest workflow run completed successfully
3. If it failed, check the error logs
4. If it succeeded, check the deployment logs

### Step 3: Verify Files Are Deployed

After deployment, check these URLs (replace with your actual domain):

- `https://testaxpro.com/.nojekyll` - Should return empty (200 OK)
- `https://testaxpro.com/_next/static/css/` - Should list CSS files (not 404)
- `https://testaxpro.com/_next/static/chunks/` - Should list JS files (not 404)

### Step 4: Check Browser Console

1. Open your site: `https://testaxpro.com`
2. Press F12 to open Developer Tools
3. Go to **Console** tab
4. Look for errors like:
   - `Failed to load resource: the server responded with a status of 404`
   - `Refused to load the stylesheet`
   - Any CORS errors

### Step 5: Clear Cache

1. **Hard refresh**: Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Or use incognito/private window**: This bypasses cache
3. **Or clear browser cache**: Settings → Clear browsing data

### Step 6: Manual Verification

If automated deployment isn't working, try manual deployment:

```bash
# Build the site
npm run build

# Verify the build
npm run verify-build

# The out/ folder should contain:
# - index.html
# - .nojekyll
# - CNAME
# - _next/ folder with all assets
# - logo.jpeg

# Then manually push to gh-pages branch or use GitHub Actions
```

### Step 7: Check GitHub Pages Logs

1. Go to repository → **Settings** → **Pages**
2. Scroll down to see deployment history
3. Check for any error messages

### Common Issues and Solutions

#### Issue: 404 errors on `/_next/static/...`

**Solution**: 
- Ensure `.nojekyll` file exists in `out/` directory
- Verify GitHub Pages source is "GitHub Actions"
- Check that `_next` folder is being deployed (not ignored)

#### Issue: CSS loads but styles don't apply

**Solution**:
- Clear browser cache
- Check for CSS conflicts
- Verify Tailwind CSS is compiled correctly

#### Issue: JavaScript errors in console

**Solution**:
- Check browser console for specific errors
- Verify all JS chunks are being loaded
- Check for CORS issues

#### Issue: Site works locally but not on GitHub Pages

**Solution**:
- Verify `.nojekyll` is deployed
- Check that paths are absolute (starting with `/`)
- Ensure GitHub Actions workflow completed successfully

### Still Not Working?

If none of the above works:

1. **Check the actual deployed files**:
   - Visit `https://testaxpro.com/_next/static/css/` directly
   - If you see a 404, the files aren't being deployed

2. **Verify GitHub Actions workflow**:
   - Check that the workflow is running
   - Verify it's uploading the `out/` folder correctly
   - Check for any errors in the workflow logs

3. **Try a different deployment method**:
   - Use `gh-pages` package instead of GitHub Actions
   - Or manually copy `out/` contents to `gh-pages` branch

4. **Contact GitHub Support**:
   - If everything looks correct but still not working
   - There might be a GitHub Pages configuration issue

### Quick Test

Run this locally to test if the build works:

```bash
cd out
python3 -m http.server 8000
# Or: npx serve .
```

Then visit `http://localhost:8000` - if it works locally but not on GitHub Pages, it's a deployment issue.

