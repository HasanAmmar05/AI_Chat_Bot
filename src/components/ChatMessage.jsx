

const ChatMessage = ({ role, content }) => {
    const avatar = role === 'assistant' ? '🤖' : '👨‍💻';
    return (
      <div className={`flex ${role === 'assistant' ? 'justify-start' : 'justify-end'} mb-4`}>
        <div className={`flex max-w-[80%] ${role === 'assistant' ? 'bg-gray-700' : 'bg-primary'} rounded-lg p-3`}>
          <span className="mr-2">{avatar}</span>
          <p className="text-text">{content}</p>
        </div>
      </div>
    );
  };
  
  export default ChatMessage;