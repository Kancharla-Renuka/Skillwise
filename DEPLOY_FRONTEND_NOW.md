# 🚀 Deploy Frontend Now - Complete Guide

## Your Backend is Ready!
**Backend URL**: https://skillwise-kqpm.onrender.com/api ✅

## Step-by-Step: Deploy Frontend to Netlify

### Step 1: Login to Netlify
1. Go to: https://app.netlify.com
2. Click **"Log in with GitHub"** (or your preferred method)
3. Authorize Netlify

### Step 2: Add New Site
1. Click **"Add new site"** button (top right)
2. Select **"Import an existing project"**

### Step 3: Connect GitHub
1. Click **"Deploy with GitHub"**
2. Authorize Netlify to access your GitHub (if first time)
3. Select repository: **`Kancharla-Renuka/Skillwise`**
4. Click **"Connect"**

### Step 4: Configure Build Settings ⚠️ IMPORTANT

**You MUST set these correctly:**

1. **Branch to deploy**: `main` (should be default)

2. **Base directory**: `frontend` ⚠️ **CRITICAL**
   - Click "Show advanced" if you don't see this
   - This tells Netlify where your React app is

3. **Build command**: `npm run build`
   - This builds your React app

4. **Publish directory**: `frontend/build`
   - This is where the built files are

### Step 5: Add Environment Variable

1. Still in "Show advanced" section
2. Click **"New variable"**
3. Add:
   - **Key**: `REACT_APP_API_URL`
   - **Value**: `https://skillwise-kqpm.onrender.com/api`
4. This connects your frontend to the backend

### Step 6: Deploy
1. Click **"Deploy site"** button
2. Wait 3-5 minutes for build to complete
3. Watch the build logs (you'll see progress)

### Step 7: Get Your Frontend URL
1. Once deployment completes, you'll see:
   - **Site URL**: `https://xxxxx-xxxxx-xxxxx.netlify.app`
2. **Copy this URL** - This is your main deployment link! 🎉

---

## Step 8: Update Backend CORS

After you have your Netlify URL:

1. Go to: https://dashboard.render.com
2. Login and open your backend service
3. Go to **"Environment"** tab
4. Click **"Add Environment Variable"** (if ALLOWED_ORIGINS doesn't exist)
   OR
   Click to edit existing `ALLOWED_ORIGINS`
5. Set:
   - **Key**: `ALLOWED_ORIGINS`
   - **Value**: `https://YOUR-NETLIFY-URL.netlify.app`
   (Replace with your actual Netlify URL)
6. Click **"Save Changes"**
7. Render will automatically redeploy (wait 2-3 minutes)

---

## Step 9: Test Your Complete Application

1. Visit your **Netlify URL** (your main deployment link)
2. The React app should load
3. Try these tests:
   - ✅ Click "Add New Product" - should work
   - ✅ Add a product - should save to backend
   - ✅ Search for products - should work
   - ✅ Edit a product - should work
   - ✅ View history - should work

---

## ✅ Final Result

After completing all steps, you'll have:

### Main Deployment Link (Frontend)
**URL**: `https://YOUR-NETLIFY-URL.netlify.app`

This is your **single deployment link** - users can access your full application here!

### Backend API (Behind the scenes)
**URL**: https://skillwise-kqpm.onrender.com/api

---

## 📧 Final Email Template

```
Subject: Inventory Management System - Deployment Complete ✅

GitHub Repository:
https://github.com/Kancharla-Renuka/Skillwise

Live Application (Main Link):
https://YOUR-NETLIFY-URL.netlify.app

Backend API:
https://skillwise-kqpm.onrender.com/api

Features:
✅ Product CRUD operations
✅ Search and filtering
✅ CSV Import/Export
✅ Inventory history tracking
✅ Responsive design

Thank you!
```

---

## 🆘 Troubleshooting

### Build Fails?
- Check Base directory is `frontend`
- Verify build command: `npm run build`
- Check build logs for errors

### Frontend Can't Connect to Backend?
- Verify `REACT_APP_API_URL` is set correctly
- Check backend CORS is updated with Netlify URL
- Wait for backend to wake up (30-60 seconds first time)
- Check browser console (F12) for errors

### CORS Errors?
- Make sure `ALLOWED_ORIGINS` in Render includes your exact Netlify URL
- Include `https://` protocol
- No trailing slash

---

## Quick Checklist

- [ ] Frontend deployed to Netlify
- [ ] Got Netlify URL
- [ ] Set `REACT_APP_API_URL` environment variable
- [ ] Updated backend `ALLOWED_ORIGINS` in Render
- [ ] Tested adding a product
- [ ] Everything works!

---

**Your main deployment link will be your Netlify URL!** 🎉

