# ⚡ Quick Deploy Reference

## 🎯 One-Page Deployment Guide

### Step 1: GitHub (2 minutes)
```bash
git init
git add .
git commit -m "Deploy ready"
git remote add origin https://github.com/YOUR_USERNAME/inventory-management.git
git push -u origin main
```

### Step 2: Backend - Render (5 minutes)
1. https://dashboard.render.com → New → Web Service
2. Connect GitHub repo
3. **Settings:**
   - Build: `cd backend && npm install`
   - Start: `cd backend && npm start`
4. **Env Vars:**
   ```
   NODE_ENV=production
   PORT=10000
   ALLOWED_ORIGINS=https://YOUR-FRONTEND.netlify.app
   ```
5. Deploy → **Save Backend URL** ⬇️

### Step 3: Frontend - Netlify (5 minutes)
1. https://app.netlify.com → Add site → Import from GitHub
2. **Settings:**
   - Base: `frontend`
   - Build: `npm run build`
   - Publish: `frontend/build`
3. **Env Var:**
   ```
   REACT_APP_API_URL=https://YOUR-BACKEND.onrender.com/api
   ```
4. Deploy → **Save Frontend URL** ⬇️

### Step 4: Update CORS (1 minute)
- Go back to Render backend
- Update `ALLOWED_ORIGINS` with your Netlify URL
- Redeploy

## ✅ Your URLs (Fill these in)

```
GitHub:     https://github.com/YOUR_USERNAME/inventory-management
Backend:    https://YOUR-BACKEND.onrender.com/api
Frontend:   https://YOUR-FRONTEND.netlify.app
Health:     https://YOUR-BACKEND.onrender.com/api/health
```

## 📧 Email Template (Copy & Fill)

```
Subject: Inventory Management System - Deployment Complete ✅

GitHub Repository:
https://github.com/YOUR_USERNAME/inventory-management

Live URLs:
- Frontend: https://YOUR-FRONTEND.netlify.app
- Backend API: https://YOUR-BACKEND.onrender.com/api
- Health Check: https://YOUR-BACKEND.onrender.com/api/health

Features:
✅ Product CRUD operations
✅ Search and filtering
✅ CSV Import/Export
✅ Inventory history tracking
✅ Responsive design

Thank you!
```

## 🧪 Test After Deployment

1. ✅ Visit: `https://YOUR-BACKEND.onrender.com/api/health` → Should show OK
2. ✅ Visit: `https://YOUR-FRONTEND.netlify.app` → Should load app
3. ✅ Try adding a product
4. ✅ Check browser console (F12) for errors

## 🆘 Quick Fixes

**CORS Error?**
→ Update `ALLOWED_ORIGINS` in Render with exact frontend URL

**Can't Connect?**
→ Check `REACT_APP_API_URL` in Netlify matches backend URL

**Backend Down?**
→ Render free tier spins down after 15min - first request may be slow

---

**Need more details?** See `DEPLOYMENT.md` for full guide.

