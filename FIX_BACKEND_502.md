# 🔧 Fix Backend 502 Bad Gateway Error

## The Problem
Your backend service exists but returns 502 Bad Gateway. This is usually a configuration issue.

## ✅ Solution: Update Render Settings

### Step 1: Go to Render Dashboard
1. Visit: https://dashboard.render.com
2. Login to your account
3. Find your service (likely named `skillwise-kqpm` or similar)

### Step 2: Check/Update Settings

Click on your service → Go to **"Settings"** tab

#### Critical Settings to Verify:

1. **Root Directory** ⚠️ **MOST IMPORTANT**
   - Set to: `backend`
   - This tells Render where your `package.json` and `server.js` are located

2. **Build Command**
   - Should be: `npm install`
   - (Not `cd backend && npm install` if Root Directory is set)

3. **Start Command**
   - Should be: `npm start`
   - (Not `cd backend && npm start` if Root Directory is set)

4. **Environment Variables** (Go to "Environment" tab)
   ```
   NODE_ENV = production
   PORT = 10000
   ```
   (Render uses port 10000, not 5000)

### Step 3: Save and Redeploy

1. Click **"Save Changes"**
2. Go to **"Events"** tab
3. Click **"Manual Deploy"** → **"Deploy latest commit"**
4. Wait for deployment (3-5 minutes)
5. Check **"Logs"** tab for:
   - ✅ `Server is running on port 10000`
   - ✅ `Connected to SQLite database`

### Step 4: Verify It's Working

After deployment completes:
- Visit: https://skillwise-kqpm.onrender.com/api/health
- Should return: `{"status":"OK","message":"Server is running"}`

---

## Alternative: If Root Directory Doesn't Work

If setting Root Directory to `backend` doesn't work, try:

1. **Build Command**: `cd backend && npm install`
2. **Start Command**: `cd backend && npm start`
3. **Root Directory**: Leave empty or set to `/`

---

## Common Issues & Fixes

### Issue 1: "Cannot find module"
**Fix**: Make sure Root Directory is `backend` so it finds `package.json`

### Issue 2: "Port already in use"
**Fix**: Set environment variable `PORT=10000` (Render requirement)

### Issue 3: "EADDRINUSE"
**Fix**: Render automatically assigns port, but ensure `PORT=10000` is set

### Issue 4: Database errors
**Fix**: Add environment variable `DB_PATH=./inventory.db`

---

## Quick Checklist

Before redeploying, verify:
- [ ] Root Directory = `backend`
- [ ] Build Command = `npm install`
- [ ] Start Command = `npm start`
- [ ] Environment variable: `NODE_ENV=production`
- [ ] Environment variable: `PORT=10000`
- [ ] Code is pushed to GitHub main branch

---

## Still Not Working?

1. **Check Logs Tab**:
   - Look for red error messages
   - Copy the error and check what it says
   - Common: missing dependencies, wrong paths, port issues

2. **Delete and Recreate**:
   - Delete the current service
   - Create new Web Service
   - Connect GitHub repo
   - Set Root Directory to `backend` from the start
   - Add environment variables
   - Deploy

3. **Check GitHub**:
   - Verify `backend/server.js` exists
   - Verify `backend/package.json` exists
   - Verify code is on `main` branch

---

## Expected Logs (When Working)

When backend is working correctly, you should see in logs:
```
> inventory-backend@1.0.0 start
> node server.js

Connected to SQLite database.
Server is running on port 10000
Access the API at http://localhost:10000/api
```

If you see these messages, your backend is working! ✅

