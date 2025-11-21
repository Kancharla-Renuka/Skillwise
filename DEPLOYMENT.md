# Deployment Guide

This guide will help you deploy the Inventory Management System to production.

## Prerequisites

1. GitHub account
2. Render/Railway account (for backend)
3. Netlify/Vercel account (for frontend)

## Step 1: Push to GitHub

1. Initialize git repository (if not already done):
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   ```

2. Create a new repository on GitHub

3. Push your code:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/inventory-management.git
   git branch -M main
   git push -u origin main
   ```

## Step 2: Deploy Backend (Render)

### Option A: Render

1. Go to [Render Dashboard](https://dashboard.render.com/)
2. Click "New +" → "Web Service"
3. Connect your GitHub repository
4. Configure:
   - **Name**: `inventory-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd backend && npm install`
   - **Start Command**: `cd backend && npm start`
   - **Root Directory**: Leave empty (or set to `backend` if deploying from subdirectory)

5. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=10000
   DB_PATH=./inventory.db
   ALLOWED_ORIGINS=https://your-frontend-url.netlify.app,https://your-frontend-url.vercel.app
   ```

6. Click "Create Web Service"
7. Wait for deployment to complete
8. Copy the service URL (e.g., `https://inventory-backend.onrender.com`)

### Option B: Railway

1. Go to [Railway Dashboard](https://railway.app/)
2. Click "New Project" → "Deploy from GitHub repo"
3. Select your repository
4. Add a new service → Select the `backend` folder
5. Railway will auto-detect Node.js
6. Add Environment Variables:
   ```
   NODE_ENV=production
   PORT=10000
   DB_PATH=./inventory.db
   ALLOWED_ORIGINS=https://your-frontend-url.netlify.app
   ```
7. Railway will automatically deploy
8. Copy the service URL from the settings

## Step 3: Deploy Frontend (Netlify)

### Option A: Netlify

1. Go to [Netlify Dashboard](https://app.netlify.com/)
2. Click "Add new site" → "Import an existing project"
3. Connect your GitHub repository
4. Configure build settings:
   - **Base directory**: `frontend`
   - **Build command**: `npm run build`
   - **Publish directory**: `frontend/build`

5. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```
   (Replace with your actual backend URL)

6. Click "Deploy site"
7. Wait for deployment
8. Copy the site URL (e.g., `https://inventory-app.netlify.app`)

### Option B: Vercel

1. Go to [Vercel Dashboard](https://vercel.com/)
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure:
   - **Framework Preset**: `Create React App`
   - **Root Directory**: `frontend`
   - **Build Command**: `npm run build`
   - **Output Directory**: `build`

5. Add Environment Variables:
   ```
   REACT_APP_API_URL=https://your-backend-url.onrender.com/api
   ```

6. Click "Deploy"
7. Wait for deployment
8. Copy the deployment URL

## Step 4: Update CORS Settings

After deploying frontend, update backend CORS:

1. Go to your backend service (Render/Railway)
2. Update the `ALLOWED_ORIGINS` environment variable:
   ```
   ALLOWED_ORIGINS=https://your-frontend-url.netlify.app,https://your-frontend-url.vercel.app
   ```
3. Redeploy the backend service

## Step 5: Update Frontend API URL

If you need to change the API URL after deployment:

1. Go to your frontend service (Netlify/Vercel)
2. Update the `REACT_APP_API_URL` environment variable
3. Trigger a new deployment

## Testing Deployment

1. **Backend Health Check**:
   Visit: `https://your-backend-url.onrender.com/api/health`
   Should return: `{"status":"OK","message":"Server is running"}`

2. **Frontend Application**:
   Visit your frontend URL and test:
   - Adding products
   - Editing products
   - Import/Export functionality
   - Inventory history

## Important Notes

### SQLite on Production

⚠️ **Warning**: SQLite may not persist data on some hosting services (like Render's free tier) because the filesystem is ephemeral. For production, consider:

1. **Render**: Use PostgreSQL (free tier available)
2. **Railway**: Use PostgreSQL plugin
3. **Alternative**: Use a cloud SQLite service or migrate to PostgreSQL

### Database Migration (Optional)

If you want to use PostgreSQL instead of SQLite:

1. Install `pg` package: `npm install pg`
2. Update database connection in `backend/server.js`
3. Update environment variables

### Free Tier Limitations

- **Render**: Free tier spins down after 15 minutes of inactivity
- **Railway**: Free tier has usage limits
- **Netlify**: Free tier is generous for static sites
- **Vercel**: Free tier is generous for static sites

## Troubleshooting

### Backend Issues

- **CORS Errors**: Make sure `ALLOWED_ORIGINS` includes your frontend URL
- **Database Errors**: Check if SQLite file is being created (may need PostgreSQL for production)
- **Port Issues**: Render uses port 10000, Railway auto-assigns

### Frontend Issues

- **API Connection Errors**: Verify `REACT_APP_API_URL` is set correctly
- **Build Errors**: Check build logs in deployment dashboard
- **404 Errors**: Ensure redirect rules are configured (included in config files)

## Support

For issues, check:
- Deployment platform documentation
- Application logs in deployment dashboard
- Browser console for frontend errors

