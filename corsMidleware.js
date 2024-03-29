// corsMiddleware.js
export default function corsMiddleware(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8080'); // Replace with your React app's URL
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
  }
  