# 🔧 Backend Status: 502 Bad Gateway

## Current Status
- ✅ **Service exists**: https://skillwise-kqpm.onrender.com
- ❌ **Not running**: Getting 502 Bad Gateway error

## What 502 Means
The service is deployed but not responding. Common causes:

1. **Service is still building/deploying** (most common)
2. **Service crashed on startup**
3. **Configuration error** (wrong build/start commands)
4. **Service sleeping** (Render free tier - but should wake up)

## How to Fix

### Step 1: Check Render Dashboard
1. Go to: https://dashboard.render.com
2. Login to your account
3. Find your service: `skillwise-kqpm` (or check all services)
4. Check the **status**:
   - **Building** = Wait for it to finish
   - **Live** = Should be working (check logs if not)
   - **Failed** = Check logs for errors

### Step 2: Check Logs
In Render Dashboard:
1. Click on your service
2. Go to **"Logs"** tab
3. Look for errors like:
   - `Error: Cannot find module...`
   - `Port already in use`
   - `Database connection failed`
   - Any red error messages

### Step 3: Verify Build Settings
In Render Dashboard → Your Service → Settings:

**Build Command**: Should be `npm install` or `cd backend && npm install`
**Start Command**: Should be `npm start` or `cd backend && npm start`
**Root Directory**: Should be `backend` (if deploying from root) or empty

### Step 4: Check Environment Variables
In Render Dashboard → Your Service → Environment:

Required variables:
```
NODE_ENV=production
PORT=10000
```

Optional (but recommended):
```
ALLOWED_ORIGINS=https://your-frontend-url.netlify.app
DB_PATH=./inventory.db
```

### Step 5: Common Fixes

#### Fix 1: Wrong Root Directory
If your repo root has both `backend/` and `frontend/`:
- Set **Root Directory** to: `backend`
- Build Command: `npm install`
- Start Command: `npm start`

#### Fix 2: Missing Dependencies
If logs show "Cannot find module":
- Check `backend/package.json` exists
- Verify all dependencies are listed
- Try manual deploy: Click "Manual Deploy" → "Deploy latest commit"

#### Fix 3: Port Issue
If logs show port errors:
- Ensure environment variable: `PORT=10000`
- Render uses port 10000, not 5000

#### Fix 4: Database Path
If database errors:
- Add environment variable: `DB_PATH=./inventory.db`
- Or update code to use absolute path

### Step 6: Manual Redeploy
1. In Render Dashboard → Your Service
2. Click **"Manual Deploy"**
3. Select **"Deploy latest commit"**
4. Wait for build to complete
5. Check logs for success

## Quick Checklist

- [ ] Service exists in Render dashboard
- [ ] Status shows "Live" (not "Building" or "Failed")
- [ ] Logs show "Server is running on port 10000"
- [ ] Logs show "Connected to SQLite database"
- [ ] Build Command is correct
- [ ] Start Command is correct
- [ ] Root Directory is set correctly
- [ ] Environment variables are set
- [ ] No red errors in logs

## Test After Fix

Once fixed, test:
1. **Health Check**: https://skillwise-kqpm.onrender.com/api/health
   - Should return: `{"status":"OK","message":"Server is running"}`

2. **Products Endpoint**: https://skillwise-kqpm.onrender.com/api/products
   - Should return: `[]` (empty array) or product list

## Still Not Working?

If still getting 502 after checking everything:
1. **Delete and redeploy**:
   - Delete the service in Render
   - Create new service with correct settings
   - Deploy again

2. **Check GitHub**:
   - Verify code is pushed: https://github.com/Kancharla-Renuka/Skillwise
   - Check `backend/server.js` exists
   - Check `backend/package.json` exists

3. **Contact Support**:
   - Render support: https://render.com/docs/support
   - Check Render status page

## Expected Working State

When backend is working:
- ✅ Status: "Live" in Render dashboard
- ✅ Health endpoint returns JSON
- ✅ No errors in logs
- ✅ Can access `/api/products` endpoint

