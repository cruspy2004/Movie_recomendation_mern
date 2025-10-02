# 🎬 Netflix Clone - Deployment Guide

## 🚀 Quick Deployment (5 minutes)

### **RECOMMENDED: Render.com (Free Tier)**

#### Step 1: Push to GitHub
```bash
git add .
git commit -m "Prepare for deployment"
git push origin main
```

#### Step 2: Deploy on Render
1. Go to [render.com](https://render.com) and sign up with GitHub
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Movie_recomendation_mern`
4. Configure deployment settings:
   - **Name**: `netflix-clone-[your-name]`
   - **Environment**: `Node`
   - **Build Command**: `npm install && npm install --prefix frontend && npm run build --prefix frontend`
   - **Start Command**: `npm start`
   - **Instance Type**: `Free`

#### Step 3: Add Environment Variables
In Render dashboard, add these environment variables:
```
MONGO_URI = mongodb+srv://haadheesheeraz2004:O1JzfCAjYdQBE9Cz@cluster0.h5834fo.mongodb.net/netflix_db?retryWrites=true&w=majority&appName=Cluster0
PORT = 10000
JWT_SECRET = MY_REALLY_HARD_SECRET_FOR_PRODUCTION_2024
NODE_ENV = production
TMDB_API_KEY = eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiMTJjNGM0YjI3ZDE1OWY1YmNhOTAwMDAzNGVkY2U0NyIsIm5iZiI6MTc0NzE0MTEwOS4wNTQwMDAxLCJzdWIiOiI2ODIzNDFmNTA4YWM0ODg1NjA2ZWU4ZmQiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.wKJhx_MI1VDTYREL93a81G0wo71sZOjKEZcn2bgaS0E
```

#### Step 4: Deploy!
- Click **"Create Web Service"**
- Wait 5-10 minutes for deployment
- Your live link: `https://netflix-clone-[your-name].onrender.com`

---

## 🌐 Alternative Deployment Options

### **Option 2: Railway (Also Free)**
1. Go to [railway.app](https://railway.app)
2. "Start a new project" → "Deploy from GitHub repo"
3. Select your repository
4. Add environment variables from `.env.production`
5. Deploy automatically!

### **Option 3: Heroku (Free tier discontinued)**
1. Install Heroku CLI
2. `heroku create netflix-clone-[your-name]`
3. `heroku config:set` (add all env vars)
4. `git push heroku main`

### **Option 4: Vercel (Frontend) + Railway (Backend)**
Deploy frontend and backend separately for better performance.

---

## 📝 For Your Resume

### **Project Link Format:**
```
🎬 Netflix Clone - Full Stack MERN Application
Live Demo: https://netflix-clone-[your-name].onrender.com
GitHub: https://github.com/cruspy2004/Movie_recomendation_mern
```

### **Project Description:**
```
A full-stack Netflix clone built with React, Node.js, Express, and MongoDB. 
Features include user authentication, movie/TV browsing, search functionality, 
and real-time content recommendations using TMDB API. Deployed on Render 
with MongoDB Atlas integration.

Tech Stack: React, Node.js, Express, MongoDB, JWT, TMDB API, Tailwind CSS
```

---

## 🔧 Troubleshooting

### Build Fails?
- Check if all dependencies are in `package.json`
- Verify build command: `npm run build`
- Ensure no TypeScript errors

### App Won't Start?
- Check environment variables are set correctly
- Verify MongoDB connection string
- Check logs in Render dashboard

### 500 Error?
- Usually MongoDB connection issue
- Check if MongoDB Atlas allows connections from anywhere (0.0.0.0/0)

---

## ✅ Pre-deployment Checklist
- [x] Frontend builds successfully (`npm run build`)
- [x] Environment variables configured
- [x] MongoDB Atlas connection working
- [x] TMDB API key valid
- [x] All routes properly configured
- [x] Build command in package.json working

## � Expected Result
Your deployed app will have:
- ✅ User registration/login
- ✅ Movie and TV show browsing  
- ✅ Search functionality
- ✅ Responsive design
- ✅ Professional resume-worthy link