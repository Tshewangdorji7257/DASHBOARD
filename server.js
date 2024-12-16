// server.js

const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for frontend communication
app.use(cors());

// Mock data for each component (in a real app, this would come from actual sensors or a database)
const mockData = {
  gps: {
    speed: '60 km/h',
    location: '40.712776, -74.005974', // Latitude, Longitude (New York City)
    direction: 'North-East',
  },
  temperature: {
    internal: '22°C',
    external: '18°C',
  },
  battery: {
    percentage: 80,
    health: 'Good',
  },
  camera: {
    status: 'Live Feed Active',
    snapshot: 'camera-feed-url', // In a real app, it would be a live image or URL
  },
  lidar: {
    pointCloud: '3d-point-cloud-data', // Example placeholder for point cloud data
  },
  accelerometer: {
    x: '0.02 m/s²',
    y: '0.03 m/s²',
    z: '-0.01 m/s²',
  },
};

// API to get GPS data
app.get('/api/gps', (req, res) => {
  res.json(mockData.gps);
});

// API to get Temperature data
app.get('/api/temperature', (req, res) => {
  res.json(mockData.temperature);
});

// API to get Battery status
app.get('/api/battery', (req, res) => {
  res.json(mockData.battery);
});

// API to get Camera feed status
app.get('/api/camera', (req, res) => {
  res.json(mockData.camera);
});

// API to get LiDAR data (3D point cloud)
app.get('/api/lidar', (req, res) => {
  res.json(mockData.lidar);
});

// API to get Accelerometer data
app.get('/api/accelerometer', (req, res) => {
  res.json(mockData.accelerometer);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
