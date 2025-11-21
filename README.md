# Inventory Management System

A full-stack inventory management system built with Node.js, Express, SQLite (backend) and React (frontend).

## Features

- ✅ Product CRUD operations
- ✅ Search and filter products by name and category
- ✅ Inline editing of products
- ✅ Import/Export products via CSV
- ✅ Inventory history tracking
- ✅ Stock status indicators (In Stock/Out of Stock)
- ✅ Responsive design

## Project Structure

```
Skillwise/
├── backend/
│   ├── routes/
│   │   └── products.js
│   ├── uploads/
│   ├── server.js
│   ├── package.json
│   └── .env
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   ├── services/
│   │   └── config/
│   └── package.json
└── README.md
```

## Setup Instructions

### Backend Setup

1. Navigate to the `backend` folder:
   ```bash
   cd backend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. The `.env` file is already created with default settings. You can modify it if needed:
   ```
   PORT=5000
   DB_PATH=./inventory.db
   ```

4. Start the server:
   ```bash
   # Development mode (with nodemon)
   npm run dev

   # Production mode
   npm start
   ```

   The backend server will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the `frontend` folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the `frontend` folder (optional):
   ```
   REACT_APP_API_URL=http://localhost:5000/api
   ```
   If not set, it defaults to `http://localhost:5000/api`

4. Start the development server:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

## API Endpoints

### Products

- `GET /api/products` - Get all products (supports query params: category, search, page, limit, sort, order)
- `GET /api/products/search?name={query}` - Search products by name
- `GET /api/products/categories` - Get unique categories
- `GET /api/products/:id` - Get single product
- `POST /api/products` - Create new product
- `PUT /api/products/:id` - Update product
- `DELETE /api/products/:id` - Delete product
- `GET /api/products/:id/history` - Get inventory history for a product
- `POST /api/products/import` - Import products from CSV
- `GET /api/products/export` - Export products as CSV

## CSV Import Format

The CSV file should have the following columns (case-insensitive):
- `name` or `Name` (required)
- `unit` or `Unit`
- `category` or `Category`
- `brand` or `Brand`
- `stock` or `Stock` (defaults to 0)
- `status` or `Status`
- `image` or `Image`

Example CSV:
```csv
name,unit,category,brand,stock,status
Laptop,piece,Electronics,Dell,10,Active
Mouse,piece,Electronics,Logitech,25,Active
Keyboard,piece,Electronics,Logitech,15,Active
```

## Usage

1. **Add Product**: Click "Add New Product" button to create a new product
2. **Edit Product**: Click "Edit" button on any product row to edit inline
3. **Delete Product**: Click "Delete" button to remove a product
4. **View History**: Click "History" button to view inventory change history
5. **Search**: Use the search bar to filter products by name or brand
6. **Filter by Category**: Select a category from the dropdown
7. **Import**: Click "Import" to upload a CSV file with products
8. **Export**: Click "Export" to download all products as CSV

## Database

The SQLite database (`inventory.db`) is automatically created when the server starts. It contains two tables:

- `products`: Stores product information
- `inventory_history`: Tracks stock changes over time

## Development

### Backend Development
- Uses `nodemon` for auto-restart during development
- Database file is created automatically
- Uploads are stored in `backend/uploads/` directory

### Frontend Development
- Hot reload enabled by default
- API calls are configured in `src/services/api.js`
- Components are modular and reusable

## Deployment

### Backend Deployment (Render/Heroku/etc.)

1. Set environment variables:
   - `PORT`: Server port (usually set by hosting service)
   - `DB_PATH`: Path to database file

2. Update `package.json` start script if needed

3. Note: SQLite may not work well on some hosting services. Consider using PostgreSQL for production.

### Frontend Deployment (Netlify/Vercel)

1. Build the React app:
   ```bash
   npm run build
   ```

2. Update API URL in `src/config/api.js` or set `REACT_APP_API_URL` environment variable

3. Deploy the `build` folder

## Technologies Used

### Backend
- Node.js
- Express.js
- SQLite3
- Multer (file uploads)
- CSV Parser
- Express Validator
- CORS
- Dotenv

### Frontend
- React
- React Router DOM
- Axios
- CSS3 (Responsive Design)

## Deployment

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

### Quick Deploy

1. **Backend**: Deploy to [Render](https://render.com) or [Railway](https://railway.app)
2. **Frontend**: Deploy to [Netlify](https://netlify.com) or [Vercel](https://vercel.com)

See [DEPLOYMENT_QUICKSTART.md](./DEPLOYMENT_QUICKSTART.md) for a quick checklist.

## License

ISC

