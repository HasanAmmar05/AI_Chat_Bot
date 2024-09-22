const ChatMessage = ({ role, content }) => {
  const avatar = role === "assistant" ? "🤖" : "👨‍💻";
  return (
    <div
      className={`flex ${
        role === "assistant" ? "justify-start" : "justify-end"
      } mb-4`}
    >
      <div
        className={`flex max-w-[80%] ${
          role === "assistant"
            ? "bg-gradient-to-r from-blue-500 to-blue-600"
            : "bg-gradient-to-r from-green-500 to-green-600"
        } rounded-lg p-3 shadow-lg`}
      >
        <span className="mr-2">{avatar}</span>
        <p className="text-white">{content}</p>
      </div>
    </div>
  );
};

export default ChatMessage;
