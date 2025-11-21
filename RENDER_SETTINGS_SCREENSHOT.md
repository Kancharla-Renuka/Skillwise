# 📸 Render Settings - What to Check

## Your Render Service Settings Should Look Like This:

### Settings Tab:

```
Name: skillwise-backend (or whatever you named it)
Environment: Node
Region: (your choice)
Branch: main
Root Directory: backend  ⚠️ THIS IS CRITICAL
Build Command: npm install
Start Command: npm start
Instance Type: Free (or paid)
```

### Environment Tab:

```
NODE_ENV = production
PORT = 10000
```

(Optional, add later after frontend is deployed):
```
ALLOWED_ORIGINS = https://your-frontend-url.netlify.app
```

---

## Step-by-Step Fix:

1. **Go to**: https://dashboard.render.com
2. **Click** on your service (skillwise-kqpm or similar)
3. **Click** "Settings" tab (left sidebar)
4. **Scroll down** to "Build & Deploy"
5. **Set Root Directory** to: `backend`
6. **Verify**:
   - Build Command: `npm install`
   - Start Command: `npm start`
7. **Click** "Save Changes"
8. **Go to** "Events" tab
9. **Click** "Manual Deploy" → "Deploy latest commit"
10. **Wait** 3-5 minutes
11. **Check** "Logs" tab - should see "Server is running"

---

## Visual Guide:

```
Render Dashboard
├── Your Service (skillwise-kqpm)
    ├── Settings
    │   ├── Root Directory: backend  ← SET THIS!
    │   ├── Build Command: npm install
    │   └── Start Command: npm start
    ├── Environment
    │   ├── NODE_ENV = production
    │   └── PORT = 10000
    ├── Events
    │   └── Manual Deploy ← CLICK THIS AFTER SAVING
    └── Logs
        └── Check here for "Server is running" message
```

---

## Quick Test After Fix:

Once you see "Server is running" in logs:
- Visit: https://skillwise-kqpm.onrender.com/api/health
- Should see: `{"status":"OK","message":"Server is running"}`

If you see that, your backend is fixed! ✅

