# Quick Start Guide

## Step 1: Install Backend Dependencies

```bash
cd backend
npm install
```

## Step 2: Install Frontend Dependencies

```bash
cd ../frontend
npm install
```

## Step 3: Start Backend Server

In the `backend` directory:
```bash
npm run dev
```

The server will start on `http://localhost:5000`

## Step 4: Start Frontend Development Server

In a new terminal, navigate to `frontend` directory:
```bash
npm start
```

The app will open automatically at `http://localhost:3000`

## Step 5: Test the Application

1. **Add a Product**: Click "Add New Product" and fill in the form
2. **Import Sample Data**: Click "Import" and select `sample-products.csv` from the root directory
3. **Edit a Product**: Click "Edit" on any product row
4. **View History**: Click "History" to see inventory changes
5. **Search/Filter**: Use the search bar and category filter
6. **Export**: Click "Export" to download products as CSV

## Troubleshooting

### Backend won't start
- Make sure port 5000 is not in use
- Check that all dependencies are installed: `npm install`
- Verify Node.js version (recommended: v14 or higher)

### Frontend can't connect to backend
- Ensure backend server is running on port 5000
- Check browser console for CORS errors
- Verify `REACT_APP_API_URL` in frontend `.env` file (if created)

### Database errors
- The database file (`inventory.db`) is created automatically
- Make sure the backend directory has write permissions
- Delete `inventory.db` to reset the database

## Next Steps

- Review the main `README.md` for detailed documentation
- Check API endpoints in `backend/routes/products.js`
- Customize styling in component CSS files
- Add authentication (see bonus tasks in main README)

