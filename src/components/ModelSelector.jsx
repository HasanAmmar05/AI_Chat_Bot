const ModelSelector = ({ models, selectedModel, onModelChange }) => {
  return (
    <select
      className="bg-gradient-to-r from-purple-500 to-purple-600 text-white rounded-lg p-2 shadow-lg focus:outline-none focus:ring-2 focus:ring-purple-400 bg-black"
      value={selectedModel}
      onChange={(e) => onModelChange(e.target.value)}
    >
      {Object.entries(models).map(([key, model]) => (
        <option key={key} value={key}>
          {model.name} ({model.developer})
        </option>
      ))}
    </select>
  );
};

export default ModelSelector;
