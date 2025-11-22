# 🚀 Final Deployment - Connect Frontend & Backend

## Current Status
- ✅ Backend: https://skillwise-kqpm.onrender.com/api (Working)
- ⏳ Frontend: Need to deploy to Netlify

## Step 1: Deploy Frontend to Netlify

### Go to Netlify
1. Visit: https://app.netlify.com
2. Login (or sign up with GitHub)

### Import Project
1. Click **"Add new site"** → **"Import an existing project"**
2. Click **"Deploy with GitHub"**
3. Authorize Netlify (if first time)
4. Select repository: **`Kancharla-Renuka/Skillwise`**

### Configure Build Settings
**IMPORTANT - Set these exactly:**

- **Branch to deploy**: `main`
- **Base directory**: `frontend` ⚠️ **CRITICAL**
- **Build command**: `npm run build`
- **Publish directory**: `frontend/build`

### Add Environment Variable
Click **"Show advanced"** → **"New variable"**:

- **Key**: `REACT_APP_API_URL`
- **Value**: `https://skillwise-kqpm.onrender.com/api`

### Deploy
1. Click **"Deploy site"**
2. Wait 3-5 minutes for build
3. **Copy your Netlify URL** (e.g., `https://skillwise-xxxxx.netlify.app`)

---

## Step 2: Update Backend CORS

After you get your Netlify URL:

1. Go to: https://dashboard.render.com
2. Open your backend service
3. Go to **"Environment"** tab
4. Add/Update environment variable:
   ```
   ALLOWED_ORIGINS = https://YOUR-NETLIFY-URL.netlify.app
   ```
   (Replace with your actual Netlify URL)
5. Click **"Save Changes"**
6. Render will auto-redeploy (wait 2-3 minutes)

---

## Step 3: Test Complete Application

1. Visit your **Netlify frontend URL**
2. Try adding a product
3. Check if it connects to backend
4. Verify all features work

---

## Final URLs

After deployment, you'll have:

**Frontend (Main Link)**: https://YOUR-NETLIFY-URL.netlify.app
**Backend API**: https://skillwise-kqpm.onrender.com/api
**Health Check**: https://skillwise-kqpm.onrender.com/api/health

---

## Email Template

```
Subject: Inventory Management System - Deployment Complete ✅

GitHub Repository:
https://github.com/Kancharla-Renuka/Skillwise

Live Application:
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

