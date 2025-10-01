# 🎬 Netflix Clone - MERN Stack

A full-stack Netflix clone application built with the MERN stack (MongoDB, Express.js, React, Node.js) featuring user authentication, movie/TV browsing, and search functionality.

## 🌟 Features

- **User Authentication**: Secure signup/login with JWT tokens
- **Movie & TV Shows**: Browse trending content from TMDB API
- **Search Functionality**: Find movies and TV shows instantly
- **Responsive Design**: Works perfectly on desktop and mobile
- **User Dashboard**: Personalized viewing experience
- **Real-time Data**: Live content from The Movie Database API

## 🚀 Live Demo

**🔗 [View Live Application](https://your-deployed-app-link.onrender.com)**

## 🛠️ Tech Stack

**Frontend:**
- React 18
- Vite
- Tailwind CSS
- Axios
- Zustand (State Management)
- React Router

**Backend:**
- Node.js
- Express.js
- MongoDB with Mongoose
- JWT Authentication
- bcryptjs for password hashing

**APIs:**
- TMDB (The Movie Database) API

## 📱 Screenshots

![Netflix Clone Screenshot](./frontend/public/screenshot-for-readme.png)

## 🏃‍♂️ Quick Start

### Prerequisites
- Node.js (v16+)
- MongoDB (local or Atlas)
- TMDB API Key

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/cruspy2004/Movie_recomendation_mern.git
   cd Movie_recomendation_mern
   ```

2. **Install dependencies**
   ```bash
   npm install
   cd frontend && npm install
   ```

3. **Environment Setup**
   ```bash
   # Create .env file in root directory
   MONGO_URI=your_mongodb_connection_string
   PORT=5000
   JWT_SECRET=your_jwt_secret
   NODE_ENV=development
   TMDB_API_KEY=your_tmdb_api_key
   ```

4. **Run the application**
   ```bash
   # Development mode (root directory)
   npm run dev
   
   # Frontend only (frontend directory)
   cd frontend && npm run dev
   ```

5. **Build for production**
   ```bash
   npm run build
   npm start
   ```

## 🌐 Deployment

This application is ready for deployment on:
- **Render** (Recommended - Free tier available)
- **Railway** 
- **Heroku**
- **Vercel** (Frontend) + **Railway** (Backend)

See [DEPLOYMENT.md](./DEPLOYMENT.md) for detailed deployment instructions.

## 📁 Project Structure

```
├── backend/
│   ├── config/           # Database and environment config
│   ├── controllers/      # Route controllers
│   ├── middleware/       # Authentication middleware
│   ├── models/          # MongoDB models
│   ├── routes/          # API routes
│   ├── services/        # External API services
│   └── utils/           # Utility functions
├── frontend/
│   ├── public/          # Static assets
│   ├── src/
│   │   ├── components/  # Reusable components
│   │   ├── hooks/       # Custom React hooks
│   │   ├── pages/       # Page components
│   │   ├── store/       # State management
│   │   └── utils/       # Utility functions
│   └── dist/            # Production build
└── package.json         # Main package configuration
```

## 🔧 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - User registration
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/logout` - User logout
- `GET /api/v1/auth/authCheck` - Check authentication status

### Movies & TV Shows
- `GET /api/v1/movie/trending` - Get trending movies
- `GET /api/v1/tv/trending` - Get trending TV shows
- `GET /api/v1/search/movie/:query` - Search movies
- `GET /api/v1/search/tv/:query` - Search TV shows

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License.

## 👨‍💻 Developer

**Haadhee Sheeraz**
- GitHub: [@cruspy2004](https://github.com/cruspy2004)
- Project: [Movie Recommendation MERN](https://github.com/cruspy2004/Movie_recomendation_mern)

## 🙏 Acknowledgments

- [The Movie Database (TMDB)](https://www.themoviedb.org/) for providing the movie data API
- Netflix for the design inspiration
- React and Node.js communities for excellent documentation

---

⭐ **Star this repository if you found it helpful!**