# 🚨 URGENT: Fix 502 Bad Gateway - Step by Step

## The Problem
Your backend service is returning 502 Bad Gateway. This means Render can't start your application.

## ✅ EXACT STEPS TO FIX (Do This Now)

### Step 1: Open Render Dashboard
1. Go to: https://dashboard.render.com
2. **Login** to your account
3. You should see your service listed (probably named something like `skillwise-kqpm`)

### Step 2: Click on Your Service
Click on the service name to open it

### Step 3: Go to Settings Tab
Click **"Settings"** in the left sidebar

### Step 4: Find "Build & Deploy" Section
Scroll down until you see "Build & Deploy"

### Step 5: Set Root Directory ⚠️ CRITICAL
Find the field labeled **"Root Directory"**

**Change it to**: `backend`

(If it's empty or says something else, this is likely your problem!)

### Step 6: Verify Build Commands
Make sure these are set:
- **Build Command**: `npm install`
- **Start Command**: `npm start`

### Step 7: Go to Environment Tab
Click **"Environment"** in the left sidebar

### Step 8: Add/Check Environment Variables
Click **"Add Environment Variable"** and add these:

**Variable 1:**
- Key: `NODE_ENV`
- Value: `production`

**Variable 2:**
- Key: `PORT`
- Value: `10000`

**Variable 3 (Optional for now):**
- Key: `DB_PATH`
- Value: `./inventory.db`

### Step 9: Save Changes
Click **"Save Changes"** button at the bottom

### Step 10: Manual Redeploy
1. Click **"Events"** tab in the left sidebar
2. Click the **"Manual Deploy"** button (usually at the top right)
3. Select **"Deploy latest commit"**
4. Click **"Deploy"**

### Step 11: Watch the Logs
1. Click **"Logs"** tab
2. Watch the deployment process
3. Look for these success messages:
   - ✅ `Connected to SQLite database.`
   - ✅ `Server is running on port 10000`
   - ✅ `Access the API at http://localhost:10000/api`

### Step 12: Wait for Deployment
- Wait 3-5 minutes for deployment to complete
- Status should change to **"Live"** (green)

### Step 13: Test
Visit: https://skillwise-kqpm.onrender.com/api/health

**Expected Result:**
```json
{"status":"OK","message":"Server is running"}
```

---

## 🔍 If Still Getting 502 After Above Steps

### Check Logs for Errors

Go to **"Logs"** tab and look for:

#### Error 1: "Cannot find module"
**Problem**: Root Directory not set correctly
**Fix**: Make sure Root Directory = `backend`

#### Error 2: "EADDRINUSE" or "Port already in use"
**Problem**: Port configuration issue
**Fix**: Make sure `PORT=10000` environment variable is set

#### Error 3: "ENOENT" or file not found
**Problem**: Wrong paths
**Fix**: Root Directory must be `backend`

#### Error 4: Database errors
**Problem**: SQLite path issue
**Fix**: Add `DB_PATH=./inventory.db` environment variable

#### Error 5: Build failed
**Problem**: Dependencies not installing
**Fix**: Check Root Directory is `backend` so it finds `package.json`

---

## 📋 Quick Checklist

Before asking for help, verify:

- [ ] Root Directory is set to `backend`
- [ ] Build Command is `npm install`
- [ ] Start Command is `npm start`
- [ ] Environment variable `NODE_ENV=production` exists
- [ ] Environment variable `PORT=10000` exists
- [ ] Service status shows "Live" (not "Building" or "Failed")
- [ ] Logs show "Server is running on port 10000"
- [ ] Code is pushed to GitHub main branch

---

## 🆘 Still Not Working?

### Option 1: Delete and Recreate Service

1. In Render Dashboard, click on your service
2. Go to **"Settings"** → Scroll to bottom
3. Click **"Delete Service"**
4. Click **"New +"** → **"Web Service"**
5. Connect GitHub → Select `Kancharla-Renuka/Skillwise`
6. **IMPORTANT**: Set Root Directory to `backend` immediately
7. Set Build Command: `npm install`
8. Set Start Command: `npm start`
9. Add environment variables:
   - `NODE_ENV=production`
   - `PORT=10000`
10. Click **"Create Web Service"**
11. Wait for deployment

### Option 2: Check GitHub Repository

Verify your code is correct:
1. Go to: https://github.com/Kancharla-Renuka/Skillwise
2. Check that `backend/server.js` exists
3. Check that `backend/package.json` exists
4. Verify you're on `main` branch

---

## ✅ Success Indicators

When backend is working, you'll see:

1. **In Render Dashboard:**
   - Status: "Live" (green)
   - Logs show: "Server is running on port 10000"

2. **In Browser:**
   - https://skillwise-kqpm.onrender.com/api/health
   - Returns: `{"status":"OK","message":"Server is running"}`

3. **No Errors:**
   - No 502 errors
   - No red error messages in logs

---

## 📞 Need More Help?

If you've done all the above and still getting 502:

1. **Copy the exact error** from the Logs tab
2. **Take a screenshot** of your Settings page
3. **Share** what you see

The most common fix is **setting Root Directory to `backend`** - make sure you've done that!

