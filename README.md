# 🎯 PixFind - AI-Powered Visual Product Search

<div align="center">

  ![PixFind Logo](https://img.shields.io/badge/PixFind-AI%20Visual%20Search-blue?style=for-the-badge&logo=search&logoColor=white)
  
  <img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black" alt="React"/>
  <img src="https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white" alt="Node.js"/>
  <img src="https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white" alt="MongoDB"/>
  <img src="https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=white" alt="Python"/>
  <img src="https://img.shields.io/badge/TailwindCSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind"/>
  <img src="https://img.shields.io/badge/CLIP-FF6F00?style=for-the-badge&logo=openai&logoColor=white" alt="CLIP"/>

</div>

<div align="center">
  <h3>🔍 Find visually similar products using deep learning and CLIP embeddings</h3>
  <p>Upload an image and discover matching fashion items with AI-powered visual search</p>
  
  > *"Upload any product image and find visually similar items instantly"*
  
</div>

---## ✨ Features



---🎨 **Visual Search Engine**

- Upload images or paste URLs for instant similarity matching

## 🎯 What is PixFind?- AI-powered analysis using CLIP (Contrastive Language-Image Pre-training)

- Real-time similarity scoring with percentage match

PixFind is an **AI-powered visual search engine** that revolutionizes how users discover products. By leveraging OpenAI's CLIP model, it understands images at a deep level and finds visually similar products with remarkable accuracy.

🎯 **Smart Filtering System**

### 🌟 Core Capabilities- Filter by gender, color, category

- Adjustable similarity threshold (0-100%)

| Feature | Description |- Live filtering without page refresh

|---------|-------------|

| 🖼️ **Visual Search** | Upload images or paste URLs to find similar products |🌙 **Modern UI/UX**

| 🎨 **AI Analysis** | CLIP model generates 512-dimensional embeddings |- Beautiful dark/light theme toggle

| ⚡ **Real-time Results** | Lightning-fast similarity matching |- Fully responsive design for all devices

| 🎛️ **Smart Filters** | Gender, color, category, and similarity threshold |- Smooth animations with Framer Motion

| 🌙 **Dual Themes** | Beautiful dark/light mode with smooth transitions |- Clean, modern interface

| 📱 **Responsive** | Perfect experience across all devices |

⚡ **Performance Optimized**

---- Cloudinary integration for fast image delivery

- MongoDB with indexed embeddings

## 🏗️ Architecture Overview- Efficient CLIP model processing

- Optimized search algorithms

```mermaid

graph TD## 🛠️ Tech Stack

    A[User Upload] --> B[Frontend React App]

    B --> C[Express.js Backend]### Frontend

    C --> D[Python CLIP Service]- **React 18** - Modern UI library with hooks

    D --> E[Vector Embeddings]- **Vite** - Fast build tool and dev server

    E --> F[MongoDB Search]- **Tailwind CSS** - Utility-first styling framework

    F --> G[Similarity Results]- **Framer Motion** - Animation library

    G --> H[Cloudinary Images]- **Lucide React** - Icon library

    H --> B

```### Backend

- **Node.js** - JavaScript runtime

### 📚 Technology Stack- **Express.js** - Web application framework

- **MongoDB** - NoSQL database

<table>- **Mongoose** - MongoDB object modeling

<tr>- **Multer** - File upload handling

<td align="center"><strong>Frontend</strong></td>- **Cloudinary** - Image CDN and processing

<td align="center"><strong>Backend</strong></td>

<td align="center"><strong>AI/ML</strong></td>### AI & Machine Learning

<td align="center"><strong>Database</strong></td>- **CLIP (ViT-B/32)** - Vision transformer model

</tr>- **PyTorch** - Deep learning framework

<tr>- **Python** - CLIP model execution

<td>- **Vector Similarity** - Cosine similarity matching



- React 18### DevOps & Tools

- Vite- **Nodemon** - Development server

- Tailwind CSS- **CORS** - Cross-origin resource sharing

- Framer Motion- **dotenv** - Environment variable management

- Lucide Icons

## 🚀 Quick Start

</td>

<td>### Prerequisites

```bash

- Node.jsNode.js 18+

- Express.jsPython 3.8+

- MulterMongoDB

- CORSCloudinary Account

- dotenv```



</td>### Installation

<td>

1. **Clone Repository**

- CLIP (ViT-B/32)```bash

- PyTorchgit clone <repository-url>

- Python 3.8+cd PixFind

- Vector Similarity```

- Cosine Distance

2. **Install Python Dependencies**

</td>```bash

<td>cd backend/utils

pip install torch torchvision clip-by-openai pillow requests numpy

- MongoDB```

- Mongoose

- Cloudinary3. **Install Node.js Dependencies**

- Vector Indexing```bash

- Data Optimization# Backend

cd ../

</td>npm install

</tr>

</table># Frontend

cd ../frontend

---npm install

```

## 🚀 Quick Start Guide

4. **Environment Configuration**

### 🔧 Prerequisites

Backend `.env`:

```bash```env

✅ Node.js 18.0+MONGO_URI=mongodb://localhost:27017/pixfind

✅ Python 3.8+CLOUDINARY_CLOUD_NAME=your_cloud_name

✅ MongoDB 6.0+CLOUDINARY_API_KEY=your_api_key

✅ GitCLOUDINARY_API_SECRET=your_api_secret

✅ Cloudinary Account (Free tier works)PORT=5000

```FRONTEND_URL=http://localhost:5173

```

### ⚡ Installation

Frontend `.env`:

#### 1️⃣ **Clone & Navigate**```env

```bashVITE_BACKEND_URL=http://localhost:5000

git clone https://github.com/your-username/pixfind.git```

cd pixfind

```5. **Database Setup**

```bash

#### 2️⃣ **Python Dependencies**cd backend

```bashnode utils/seedProducts.js

cd backend/utils```

pip install torch torchvision clip-by-openai pillow requests numpy

```6. **Start Application**

```bash

#### 3️⃣ **Node.js Dependencies**# Terminal 1 - Backend

```bashcd backend

# Install backend dependenciesnpm run dev

cd ../

npm install# Terminal 2 - Frontend

cd frontend

# Install frontend dependencies  npm run dev

cd ../frontend```

npm install

```7. **Access Application**

```

#### 4️⃣ **Environment Setup**Frontend: http://localhost:5173

Backend: http://localhost:5000

Create `backend/.env`:```

```env

# Database## � How It Works

MONGO_URI=mongodb://localhost:27017/pixfind

1. **Image Upload** - Drag & drop image or paste URL

# Cloudinary Configuration2. **AI Processing** - CLIP model generates 512-dimensional embeddings

CLOUDINARY_CLOUD_NAME=your_cloud_name3. **Vector Search** - Compare embeddings using cosine similarity

CLOUDINARY_API_KEY=your_api_key4. **Results Display** - Show matched products with similarity scores

CLOUDINARY_API_SECRET=your_api_secret5. **Smart Filtering** - Apply filters for refined results



# Server Configuration## 🎨 UI Features

PORT=5000

FRONTEND_URL=http://localhost:5173### Theme System

FRONTEND_PROD_URL=https://your-domain.com- **Dark Mode** - Sleek dark interface (default)

```- **Light Mode** - Clean light interface

- **Smooth Transitions** - Animated theme switching

Create `frontend/.env`:- **Persistent Preference** - Saves user choice

```env

VITE_BACKEND_URL=http://localhost:5000### Responsive Design

```- **Mobile First** - Optimized for mobile devices

- **Tablet Ready** - Perfect tablet experience

#### 5️⃣ **Database Initialization**- **Desktop Enhanced** - Rich desktop interface

```bash- **Touch Friendly** - Intuitive touch interactions

cd backend

node utils/seedProducts.js## 📊 Project Structure

```

```

#### 6️⃣ **Launch Application**PixFind/

```bash├── frontend/                 # React application

# Terminal 1: Start Backend│   ├── src/

cd backend && npm run dev│   │   ├── components/      # Reusable components

│   │   ├── utils/           # Utility functions

# Terminal 2: Start Frontend  │   │   ├── App.jsx          # Main app component

cd frontend && npm run dev│   │   └── main.jsx         # Entry point

```│   ├── public/              # Static assets

│   └── package.json         # Dependencies

#### 7️⃣ **Access Application**├── backend/                 # Node.js server

- 🌐 **Frontend**: http://localhost:5173│   ├── controllers/         # Request handlers

- 🔧 **Backend**: http://localhost:5000│   ├── models/              # Database models

│   ├── routes/              # API routes

---│   ├── config/              # Configuration

│   ├── utils/               # Utilities & AI

## 💡 How It Works│   └── index.js             # Server entry

├── data/                    # Dataset and scripts

<div align="center">└── README.md               # Documentation

```

```mermaid

sequenceDiagram## 🔧 API Reference

    participant U as User

    participant F as Frontend### Search Products

    participant B as Backend```http

    participant C as CLIP ModelPOST /api/products/search

    participant D as DatabaseContent-Type: multipart/form-data

    

    U->>F: Upload Image{

    F->>B: Send Image + Filters  "file": <image-file>,

    B->>C: Generate Embeddings  "imageUrl": "https://example.com/image.jpg",

    C->>B: Return 512D Vector  "filters": {

    B->>D: Search Similar Vectors    "gender": "Men|Women|Unisex",

    D->>B: Return Matched Products    "baseColour": "Black|White|Blue|...",

    B->>F: Send Results    "category": "Footwear|Apparel|Accessories",

    F->>U: Display Products    "similarity": 0-100

```  }

}

</div>```



### 🔄 Processing Pipeline**Response:**

```json

1. **Image Upload** → User uploads image or provides URL[

2. **Preprocessing** → Image optimization via Cloudinary  {

3. **Embedding** → CLIP model generates vector representation    "_id": "product_id",

4. **Similarity Search** → Cosine similarity calculation    "productDisplayName": "Product Name",

5. **Filtering** → Apply user-defined filters    "gender": "Men",

6. **Results** → Return ranked similar products    "baseColour": "Black",

    "masterCategory": "Apparel",

---    "imageUrl": "https://cloudinary.com/...",

    "similarity": 0.85

## 🎨 User Interface  }

]

### 🌓 Theme System```

- **Dark Theme**: Modern, sleek interface with high contrast

- **Light Theme**: Clean, minimal design with soft colors  ## 🔍 Features Deep Dive

- **Auto-Toggle**: Smooth animations between themes

- **Persistent**: Remembers user preference### AI-Powered Search

- Uses OpenAI's CLIP model for understanding images

### 📱 Responsive Design- Generates high-quality 512-dimensional embeddings

| Device | Breakpoint | Optimization |- Performs fast cosine similarity calculations

|--------|------------|-------------|- Supports both uploaded files and image URLs

| 📱 Mobile | < 640px | Touch-friendly, compact layout |

| 🖥️ Tablet | 640px - 1024px | Balanced grid, readable text |### Smart Filtering

| 💻 Desktop | > 1024px | Full feature set, larger images |- Real-time filtering without API calls

- Multiple filter combinations

---- Similarity threshold adjustment

- Instant results update

## 🔧 API Documentation

### Image Processing

### 🔍 Search Endpoint- Automatic image optimization via Cloudinary

- Support for multiple image formats

**POST** `/api/products/search`- Error handling for invalid images

- Responsive image loading

```javascript

// Request## 🚀 Performance

{

  "file": <FormData>, // Optional: Image file- **Search Speed**: < 500ms average

  "imageUrl": "https://example.com/image.jpg", // Optional: Image URL- **Image Processing**: 1-3s for embedding generation

  "filters": {- **Database Queries**: Optimized with indexes

    "gender": "Men" | "Women" | "Unisex",- **UI Responsiveness**: 60fps animations

    "baseColour": "Black" | "White" | "Blue" | ...,- **Bundle Size**: Optimized for fast loading

    "category": "Footwear" | "Apparel" | "Accessories",

    "similarity": 0-100 // Minimum similarity percentage## 🎯 Future Enhancements

  }

}- [ ] Advanced search with text queries

- [ ] Product recommendations

// Response- [ ] User favorites and history

[- [ ] Advanced filtering options

  {- [ ] Mobile app version

    "_id": "64a1b2c3d4e5f6789012345",- [ ] Multi-language support

    "productDisplayName": "Classic Black Sneakers",

    "gender": "Men", ## 🤝 Contributing

    "baseColour": "Black",

    "masterCategory": "Footwear",1. Fork the repository

    "imageUrl": "https://res.cloudinary.com/...",2. Create feature branch (`git checkout -b feature/amazing-feature`)

    "similarity": 0.89 // Similarity score (0-1)3. Commit changes (`git commit -m 'Add amazing feature'`)

  }4. Push to branch (`git push origin feature/amazing-feature`)

]5. Open Pull Request

```

## � License

### 📊 Response Codes

- `200` - SuccessThis project is licensed under the MIT License.

- `400` - Invalid request/missing image

- `500` - Server error/CLIP processing failed## 🙏 Acknowledgments



---- **OpenAI CLIP** - Vision-language model

- **Fashion Dataset** - Product data source

## 📁 Project Structure- **Cloudinary** - Image optimization platform

- **MongoDB** - Database solution

```

pixfind/---

├── 📂 frontend/                    # React application

│   ├── 📂 src/<div align="center">

│   │   ├── 📂 components/         # Reusable UI components  <h3>🌟 Star this repository if you found it helpful! 🌟</h3>

│   │   │   ├── Navbar.jsx         # Navigation with theme toggle  <p>Built with ❤️ using modern web technologies</p>

│   │   │   ├── SearchSection.jsx  # Upload and search interface</div>
│   │   │   ├── FilterPanel.jsx    # Product filtering options
│   │   │   ├── ResultCard.jsx     # Product display card
│   │   │   └── ProductCard.jsx    # Alternative product view
│   │   ├── 📂 utils/
│   │   │   └── cloudinary.js      # Image optimization utilities
│   │   ├── App.jsx                # Main application component
│   │   ├── main.jsx               # Application entry point
│   │   └── index.css              # Global styles and themes
│   ├── 📄 package.json            # Frontend dependencies
│   └── 📄 vite.config.js          # Vite configuration
├── 📂 backend/                     # Node.js server
│   ├── 📂 controllers/
│   │   └── productsController.js  # Search logic and API handlers
│   ├── 📂 models/
│   │   └── Product.js             # MongoDB product schema
│   ├── 📂 routes/
│   │   └── products.js            # API route definitions
│   ├── 📂 config/
│   │   └── db.js                  # Database connection
│   ├── 📂 utils/
│   │   ├── embeddingsPy.js        # Python CLIP integration
│   │   ├── generate_embed.py      # CLIP embedding script
│   │   └── seedProducts.js        # Database seeding
│   ├── 📄 index.js                # Server entry point
│   └── 📄 package.json            # Backend dependencies
├── 📂 data/                        # Dataset and utilities
│   ├── 📂 raw/                    # Original CSV data
│   └── uploadCloudinary.js        # Data upload script
└── 📄 README.md                   # Project documentation
```

---

## ⚡ Performance Metrics

<div align="center">

| Metric | Performance | Details |
|--------|-------------|---------|
| 🔍 **Search Speed** | < 500ms | Average response time |
| 🧠 **AI Processing** | 1-3s | CLIP embedding generation |
| 📊 **Database Query** | < 100ms | MongoDB indexed search |
| 🎨 **UI Rendering** | 60fps | Smooth animations |
| 📦 **Bundle Size** | < 2MB | Optimized assets |

</div>

---

## 🔮 Advanced Features

### 🎯 Smart Filtering
- **Multi-dimensional**: Combine multiple filter criteria
- **Real-time**: Instant results without API calls
- **Threshold Control**: Adjustable similarity percentage
- **Category Mapping**: Intelligent category matching

### 🖼️ Image Processing
- **Format Support**: JPEG, PNG, WebP, GIF
- **Size Optimization**: Automatic compression via Cloudinary
- **Error Handling**: Graceful fallbacks for invalid images
- **Progressive Loading**: Optimized image delivery

### 🎨 UI/UX Excellence
- **Micro-interactions**: Subtle hover effects and transitions
- **Loading States**: Beautiful skeleton screens
- **Error Boundaries**: Graceful error handling
- **Accessibility**: ARIA labels and keyboard navigation

---

## 🛣️ Roadmap

### 🔜 Coming Soon
- [ ] **Multi-modal Search**: Text + Image queries
- [ ] **User Accounts**: Save favorites and search history
- [ ] **Advanced Filters**: Brand, price range, ratings
- [ ] **Recommendation Engine**: Personalized suggestions
- [ ] **Mobile App**: React Native implementation

### 🚀 Future Vision
- [ ] **AR Integration**: Try-before-you-buy experience
- [ ] **Social Features**: Share and collaborate on finds
- [ ] **Marketplace Integration**: Direct purchase links
- [ ] **Analytics Dashboard**: Search insights and trends

---

## 🤝 Contributing

We welcome contributions from the community! Here's how you can help:

### 🎯 Ways to Contribute
- 🐛 **Bug Reports**: Found an issue? Let us know!
- ✨ **Feature Requests**: Have an idea? We'd love to hear it!
- 📝 **Documentation**: Help improve our docs
- 🔧 **Code**: Submit pull requests for fixes and features

### 📋 Development Process
```bash
1. Fork the repository
2. Create feature branch: git checkout -b feature/amazing-feature
3. Make your changes
4. Test thoroughly
5. Commit: git commit -m 'Add amazing feature'
6. Push: git push origin feature/amazing-feature
7. Open a Pull Request
```

### 🧪 Testing Guidelines
- Write unit tests for new features
- Ensure all existing tests pass
- Test across different browsers and devices
- Verify mobile responsiveness

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Feel free to use this project for personal and commercial purposes
```

---

## 🙏 Acknowledgments

<div align="center">

### 💎 Special Thanks

| Technology | Contribution |
|------------|-------------|
| 🤖 **OpenAI CLIP** | Revolutionary vision-language model |
| ☁️ **Cloudinary** | Powerful image optimization platform |
| 🍃 **MongoDB** | Flexible and scalable database solution |
| ⚛️ **React Team** | Amazing frontend framework |
| 🎨 **Tailwind CSS** | Beautiful utility-first styling |

### 🌟 Community

Thanks to all the contributors who have helped make PixFind better!

</div>

---

<div align="center">

## 🚀 Ready to Get Started?

**[⬇️ Clone Repository](https://github.com/your-username/pixfind)** • **[📖 View Docs](#)** • **[🐛 Report Bug](#)** • **[💡 Request Feature](#)**

---

### 💫 Made with ❤️ and cutting-edge AI

**Star ⭐ this repository if you found it helpful!**

*Building the future of visual product discovery*

![Visitors](https://visitor-badge.laobi.icu/badge?page_id=pixfind.readme)
[![GitHub stars](https://img.shields.io/github/stars/your-username/pixfind?style=social)](https://github.com/your-username/pixfind/stargazers)

</div>