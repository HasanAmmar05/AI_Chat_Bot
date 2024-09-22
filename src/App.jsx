import { useState, useEffect } from 'react';
import ChatMessage from './components/ChatMessage';
import ModelSelector from './components/ModelSelector';
import MaxTokensSlider from './components/MaxTokensSlider';
import { generateChatResponse } from './api/groq';

const models = {
  "gemma-7b-it": { name: "Gemma-7b-it", tokens: 8192, developer: "Google" },
  "llama2-70b-4096": { name: "LLaMA2-70b-chat", tokens: 4096, developer: "Meta" },
  "llama3-70b-8192": { name: "LLaMA3-70b-8192", tokens: 8192, developer: "Meta" },
  "llama3-8b-8192": { name: "LLaMA3-8b-8192", tokens: 8192, developer: "Meta" },
  "mixtral-8x7b-32768": { name: "Mixtral-8x7b-Instruct-v0.1", tokens: 32768, developer: "Mistral" },
};

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [selectedModel, setSelectedModel] = useState('mixtral-8x7b-32768');
  const [maxTokens, setMaxTokens] = useState(32768);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
  
    const newMessages = [...messages, { role: 'user', content: input }];
    setMessages(newMessages);
    setInput('');
  
    try {
      const response = await generateChatResponse(newMessages, selectedModel, maxTokens);
      setMessages([...newMessages, { role: 'assistant', content: response }]);
    } catch (error) {
      console.error('Error:', error);
      // Handle error (e.g., display an error message to the user)
    }
  };

  useEffect(() => {
    setMaxTokens(Math.min(32768, models[selectedModel].tokens));
  }, [selectedModel]);

  return (
    <div className="min-h-screen bg-background text-text p-4">
      <h1 className="text-3xl font-bold text-center mb-4"> AI CHATBOT</h1>
      <p className="text-center mb-8"> Powered with Advanced LLM's</p>

      <div className="max-w-4xl mx-auto bg-input p-6 rounded-lg shadow-lg mb-8">
        <div className="flex justify-between mb-4">
          <ModelSelector models={models} selectedModel={selectedModel} onModelChange={setSelectedModel} />
          <MaxTokensSlider maxTokens={maxTokens} onMaxTokensChange={setMaxTokens} maxValue={models[selectedModel].tokens} />
        </div>

        <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-800 rounded">
          {messages.map((message, index) => (
            <ChatMessage key={index} role={message.role} content={message.content} />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-gray-700 text-text p-2 rounded-l"
            placeholder="Enter your prompt here..."
          />
          <button type="submit" className="bg-primary text-white px-4 py-2 rounded-r hover:bg-secondary transition duration-300">
            Send
          </button>
        </form>
      </div>

      <footer className="text-center mt-8 p-4 bg-secondary rounded-lg">
        <p> Created By Hasan using React and Tailwind CSS</p>
      </footer>
    </div>
  );
}

export default App;