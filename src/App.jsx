import { useState, useEffect } from "react";
import ChatMessage from "./components/ChatMessage";
import ModelSelector from "./components/ModelSelector";
import MaxTokensSlider from "./components/MaxTokensSlider";
import { generateChatResponse } from "./api/groq";

const models = {
  "gemma-7b-it": { name: "Gemma-7b-it", tokens: 8192, developer: "Google" },
  "llama2-70b-4096": {
    name: "LLaMA2-70b-chat",
    tokens: 4096,
    developer: "Meta",
  },
  "llama3-70b-8192": {
    name: "LLaMA3-70b-8192",
    tokens: 8192,
    developer: "Meta",
  },
  "llama3-8b-8192": { name: "LLaMA3-8b-8192", tokens: 8192, developer: "Meta" },
  "mixtral-8x7b-32768": {
    name: "Mixtral-8x7b-Instruct-v0.1",
    tokens: 32768,
    developer: "Mistral",
  },
};

function App() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [selectedModel, setSelectedModel] = useState("mixtral-8x7b-32768");
  const [maxTokens, setMaxTokens] = useState(32768);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    try {
      const response = await generateChatResponse(
        newMessages,
        selectedModel,
        maxTokens
      );
      setMessages([...newMessages, { role: "assistant", content: response }]);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  useEffect(() => {
    setMaxTokens(Math.min(32768, models[selectedModel].tokens));
  }, [selectedModel]);

  return (
    <div className="relative min-h-screen bg-gradient-to-r from-slate-500 to-slate-800 text-white p-4">
      <a
        href="https://github.com/HasanAmmar05/React_Groq_Chat_Bot"
        target="_blank"
        className="absolute top-4 right-4"
      >
        <button className="p-0.5 rounded-full from-indigo-400 via-pink-500 to-purple-500 bg-gradient-to-r">
          <span className="block px-4 py-2 font-semibold rounded-full text-white transition hover:backdrop-brightness-110">
            GitHub
          </span>
        </button>
      </a>

      <h1 className="text-4xl font-bold text-center mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
        AI CHATBOT
      </h1>
      <p className="text-center mb-8 text-gray-300">Powered Advanced LLM's</p>

      <div className="max-w-4xl mx-auto bg-gradient-to-br from-gray-800 to-gray-700 p-6 rounded-lg shadow-2xl mb-8">
        <div className="flex flex-col md:flex-row justify-between mb-4 space-y-4 md:space-y-0 md:space-x-4">
          <ModelSelector
            models={models}
            selectedModel={selectedModel}
            onModelChange={setSelectedModel}
          />
          <MaxTokensSlider
            maxTokens={maxTokens}
            onMaxTokensChange={setMaxTokens}
            maxValue={models[selectedModel].tokens}
          />
        </div>

        <div className="h-96 overflow-y-auto mb-4 p-4 bg-gray-900 rounded-lg shadow-inner">
          {messages.map((message, index) => (
            <ChatMessage
              key={index}
              role={message.role}
              content={message.content}
            />
          ))}
        </div>

        <form onSubmit={handleSubmit} className="flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="flex-grow bg-gray-700 text-white p-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-purple-400"
            placeholder="Enter your prompt here..."
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-r-lg hover:from-purple-600 hover:to-pink-600 transition duration-300 focus:outline-none focus:ring-2 focus:ring-purple-400"
          >
            Send
          </button>
        </form>
      </div>

      <footer className="text-center mt-8 p-4 bg-gradient-to-r from-gray-800 to-gray-700 rounded-lg">
        <p className="text-gray-300 text-5xl">Created By Hasan</p>
      </footer>
    </div>
  );
}

export default App;
