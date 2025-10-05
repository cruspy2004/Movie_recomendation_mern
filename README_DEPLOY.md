# Deployment Instructions (Vercel + Backend)

This file contains step-by-step instructions to deploy the project with a separate frontend and backend deployment.

## 1) Frontend (Vercel)
- Root directory: `frontend`
- Build command: `npm run build`
- Output directory: `frontend/dist`
- Set environment variables (Vercel):
  - `VITE_API_URL` = https://<your-backend-domain>

## 2) Backend (Vercel/Render/Railway)
- If deploying to Vercel as a Serverless function/service:
  - Build command: (leave blank) or `npm install`
  - Start command: `node backend/server.js`
- Environment variables to set on the hosting provider:
  - `MONGO_URI`
  - `JWT_SECRET`
  - `NODE_ENV` = production
  - `TMDB_API_KEY`
  - `ALLOWED_ORIGIN` = https://<your-frontend-domain>

## 3) Local testing
- Start backend locally:
  - `npx cross-env NODE_ENV=development nodemon backend/server.js`
- Start frontend locally pointing to backend:
  - In PowerShell: `$env:VITE_API_URL='http://localhost:5000'; npm run dev`

## 4) CORS
- Backend reads `ALLOWED_ORIGIN` env var to restrict access. Set it to your frontend domain in production.

## 5) Common issues
- 405 errors: set ALLOWED_ORIGIN and ensure preflight requests (OPTIONS) are allowed.
- 404: Ensure frontend's build output and Vercel output directory are correct.

---

If you want, I can now commit these docs and push the branch to GitHub for you.