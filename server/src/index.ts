import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';

// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();
const PORT = process.env.PORT || 5000;
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost:27017/content-idea-generator';

// Middleware
app.use(cors());
app.use(express.json());

// Basic route for testing
app.get('/', (req, res) => {
  res.json({ message: 'Welcome to the AI Content Idea Generator API' });
});

// Ideas route placeholder
app.post('/api/ideas/generate', (req, res) => {
  const { contentType, industry, audience, tone, keywords } = req.body;
  
  // This would normally call an AI service like OpenAI
  // For now, just return mock data
  const ideas = [
    `How to Leverage ${industry} Trends for ${audience} in 2025`,
    `10 ${tone.charAt(0).toUpperCase() + tone.slice(1)} Ways to Connect with ${audience} Through ${industry} Content`,
    `The Ultimate Guide to ${keywords || industry} for Modern ${audience}`,
    `Why ${audience} Are Changing Their Approach to ${industry}`,
    `${industry} Strategies: What ${audience} Really Want in 2025`
  ];
  
  res.json({ ideas });
});

// Connect to MongoDB and start server
const startServer = async () => {
  try {
    // In a real implementation, we would connect to MongoDB
    // await mongoose.connect(MONGODB_URI);
    // console.log('Connected to MongoDB');
    
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  } catch (error) {
    console.error('Error starting server:', error);
    process.exit(1);
  }
};

startServer();