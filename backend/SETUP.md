# PixFind Backend Setup Guide

## Prerequisites
- Node.js 18+
- Python 3.8+
- MongoDB (local or MongoDB Atlas)
- Cloudinary Account

## Installation Steps

### 1. Install Node.js Dependencies
```bash
cd backend
npm install
```

### 2. Install Python Dependencies
```bash
pip install torch torchvision clip-by-openai pillow requests numpy
```

### 3. Environment Configuration
Create `.env` file in backend directory:
```env
MONGO_URI=mongodb://localhost:27017/pixfind
CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
PORT=5000
FRONTEND_URL=http://localhost:5173
```

### 4. Database Setup
```bash
npm run seed
```

### 5. Start Development Server
```bash
npm run dev
```

## First Run Notes
- CLIP model (~400MB) will be downloaded automatically on first use
- Embedding generation takes 1-3 seconds per image
- Seed script will populate database with 100 sample products

## Production Deployment
- For Vercel: Python dependencies are handled via serverless functions
- CLIP models use mock embeddings in production due to size limits
- Environment variables must be set in deployment platform

## Troubleshooting
- If CLIP model fails to load, delete `clip_models/ViT-B-32.pt` and restart
- Ensure Python and pip are properly installed
- Check MongoDB connection string in `.env`