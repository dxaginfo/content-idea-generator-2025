# AI Content Idea Generator

A powerful web application that uses artificial intelligence to generate creative and engaging content ideas for blog posts, videos, and social media.

## 🌟 Features

- **AI-Powered Idea Generation**: Get fresh content ideas based on your industry, audience, and goals
- **Multi-Platform Support**: Generate ideas for blogs, videos, social media, and more
- **Trend Analysis**: Discover trending topics in your niche
- **Keyword Optimization**: Find SEO-friendly content ideas with built-in keyword research
- **Content Calendar Planning**: Organize and schedule your content ideas
- **Customizable Parameters**: Adjust tone, length, and style to match your brand voice
- **Idea Library**: Save and organize your favorite content ideas
- **Export Functionality**: Export your ideas in various formats for team sharing

## 🚀 Tech Stack

### Frontend
- React.js
- TypeScript
- Redux for state management
- Tailwind CSS for styling
- Axios for API requests

### Backend
- Node.js with Express
- MongoDB for database
- JWT for authentication
- OpenAI API integration

### DevOps
- GitHub Actions for CI/CD
- Vercel for frontend hosting
- AWS Lambda for serverless backend

## 📋 Project Roadmap

### Phase 1: MVP Release
- Basic idea generation functionality
- User authentication and profiles
- Idea saving and organization

### Phase 2: Enhanced Features
- Trend analysis integration
- Keyword research tools
- Content calendar functionality

### Phase 3: Advanced Capabilities
- Team collaboration features
- Advanced analytics
- Integration with publishing platforms

## 🏗️ Project Structure

```
/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   └── src/                # Source files
│       ├── components/     # UI components
│       ├── pages/          # Application pages
│       ├── services/       # API services
│       ├── store/          # Redux store
│       └── utils/          # Utility functions
├── server/                 # Backend Node.js application
│   ├── controllers/        # Request controllers
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── services/           # Business logic
│   └── utils/              # Utility functions
└── docs/                   # Documentation
```

## 🛠️ Getting Started

### Prerequisites
- Node.js (v16+)
- npm or yarn
- MongoDB
- OpenAI API key

### Installation

1. Clone the repository
```bash
git clone https://github.com/dxaginfo/content-idea-generator-2025.git
cd content-idea-generator-2025
```

2. Install dependencies for both frontend and backend
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables
```bash
# In the server directory, create a .env file with:
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key

# In the client directory, create a .env file with:
REACT_APP_API_URL=http://localhost:5000/api
```

4. Start the development servers
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend server (from client directory)
npm start
```

## 📚 API Documentation

### Authentication Endpoints
- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Log in a user
- `GET /api/auth/profile` - Get user profile

### Idea Generation Endpoints
- `POST /api/ideas/generate` - Generate new content ideas
- `GET /api/ideas` - Get saved ideas
- `POST /api/ideas` - Save a new idea
- `PUT /api/ideas/:id` - Update a saved idea
- `DELETE /api/ideas/:id` - Delete a saved idea

### Trend Analysis Endpoints
- `GET /api/trends` - Get trending topics
- `GET /api/trends/:category` - Get trends by category

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 📞 Contact

Project Link: [https://github.com/dxaginfo/content-idea-generator-2025](https://github.com/dxaginfo/content-idea-generator-2025)

---

Built with ❤️ by the AI Content Idea Generator Team