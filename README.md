# Groq AI ChatBot

A modern, responsive chat application powered by Groq's advanced language models, built with React, Vite, and Tailwind CSS.


## Features

- Real-time chat interface with AI-powered responses
- Multiple language model selection
- Adjustable token limit for responses
- Responsive design with beautiful gradients and animations

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or later)
- npm (v6 or later)
- A Groq API key

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/groq-chat-react-app.git
   cd groq-chat-react-app
   ```

2. Install frontend dependencies:
   ```
   npm install
   ```

3. Set up the backend:
   ```
   cd backend
   npm install
   ```

4. Create a `.env` file in the `backend` directory and add your Groq API key:
   ```
   GROQ_API_KEY=your_groq_api_key_here
   ```

## Usage

1. Start the backend server:
   ```
   cd backend
   node server.js
   ```

2. In a new terminal, start the frontend development server:
   ```
   cd ..  # Go back to the root directory
   npm run dev
   ```

3. Open your browser and navigate to `http://localhost:5173` to use the app.

## Contributing

Contributions to the Groq Chat React App are welcome. Please follow these steps:

1. Fork the repository
2. Create a new branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a pull request

## License

This project is licensed under the MIT License. See the `LICENSE` file for details.

